/*
This file implements a prototype of a widget for visualizing the
primary (2D) and secondary + tertiary (3D) structures of a protein 
simultaneously. To do so it combines two canvases into one component.
- Threejs canvas: 3D 
- D3 canvas: 2D
*/


function plot_3d_structure(protein_structure){
    const viewport = document.getElementById("vis-protein-structure");
    const width = 500;
    const height = 500;
    const scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    viewport.appendChild(renderer.domElement);

    const points = [];
    const points_center = new THREE.Vector3(0, 0, 0);
    const points_min_coords = new THREE.Vector3(0, 0, 0);
    const points_max_coords = new THREE.Vector3(0, 0, 0);

    protein_structure.forEach(element => {
        points.push(new THREE.Vector3(element["x_coord_ca"], element["y_coord_ca"], element["z_coord_ca"]));
    });
    
    points.forEach(point => {
        points_center.add(point);
    });
    points_center.divideScalar(points.length);    
    camera.position = new THREE.Vector3(0,0,0);
    const moving_vec = camera.position;
    moving_vec.sub(points_center).multiplyScalar(10);
    camera.position.add(moving_vec);
    console.log(camera.position);
    camera.lookAt(points_center);


    const points_geom =  new THREE.BufferGeometry().setFromPoints(points);
    const points_material = new THREE.LineBasicMaterial();
    const points_mesh = new THREE.Line(points_geom, points_material);
    scene.add(points_mesh);

    camera.position.z = 5;
    renderer.render(scene, camera);
}

function plot_vis_modifications(proteins, all_modifications){

    /*
    Two files:
    - proteins (P): 3D (primary) structure of the proteins
    - all_modifications (M): post translational modifications

    The idea is to relate the primary structure with the modifications.
    There are multiple ways in which these relationships could be drawn.
    - RES to its MODs per protein
    - MOD to its RES per protein
    - The dataset also allows between protein and species comparison

    Spatial relationships of residues (identified by UniAcc-POS)
    in a protein are also important.
    For instance, are two residues close in 3D space?
     */

    // Data processing
    // - The two datasets join through the POS entry

    // - Join of PS and M.
    //   Contains, for each RES in the protein the positional info + the pms
    // dict with proteins -> their 3d structure
    let pos_info = {};
    proteins.forEach(d => {
        const uniacc = d["UniAcc"];
        const pos = d["POS"];

        if(!(uniacc in pos_info)){
            pos_info[uniacc] = {};
        }
        pos_info[uniacc][pos] = d;
        pos_info[uniacc][pos]["mods"] = [];
    });

    all_modifications.forEach(d => {
        const uniacc = d["UniAcc"];
        const pos = d["POS"];
        pos_info[uniacc][pos]["mods"].push(d);
    });

    // - Mapping modifications to the positions in which they occur in one protein.
    //   Aggregate information on modifications like the total
    //   number of occurrences, the pathogenic and non_pathogenic
    //   occurrences and the positions associated with it.
    let modifications = new Map();
    all_modifications.forEach(d => {
        let mod = d["MOD"]
        let uniacc = d["UniAcc"]
        let pos = d["POS"]
        let is_pathogenic = d["PathogenicMutation"]

        if(!modifications.has(mod)){
            modifications.set(mod, {
                name: mod,
                pathogenic: 0,
                non_pathogenic: 0,
                count: 0,
                entries: {}
            });
        }

        // General modification information
        modifications.get(mod)["count"] += 1;
        if(d["PathogenicMutation"]){
            modifications.get(mod)["pathogenic"] += 1;
        }else{
            modifications.get(mod)["non_pathogenic"] += 1;
        }

        // Per entry (UniAcc) information
        if(!(uniacc in modifications.get(mod)["entries"])){
            modifications.get(mod)["entries"][uniacc] = {pos: []}
        }
        modifications.get(mod)["entries"][uniacc]["pos"].push(pos);
    });

    // - Data printing
    console.log(proteins);
    console.log(all_modifications);
    console.log(pos_info);
    console.log(modifications);

    // Data visualization

    // - Data ready for vis
    const extent_total_sites = [0, d3.max(modifications, d => d[1]["count"])];
    const extent_path_sites = [0, d3.max(modifications, d => d[1]["pathogenic"])];
    const extent_nonpath_sites = [0, d3.max(modifications, d => d[1]["non_pathogenic"])];

    console.log(extent_total_sites);
    console.log(extent_path_sites);
    console.log(extent_nonpath_sites);

    // - General setup of the canvas
    const vp_width = 1000;  // vp is view port
    const vp_height = 1000;
    const padding = {top: 10, right: 10, bottom: 10, left: 10};
    const width = vp_width - (padding["left"] + padding["right"]);
    const height = vp_height - (padding["top"] + padding["bottom"]);

    // - Scales
    const scale_labels = d3.scaleBand().domain(modifications.keys()).range([0, width]);
    const scale_total_sites = d3.scaleLinear().domain(extent_total_sites).range([0, height]);
    const scale_path_sites = d3.scaleLinear().domain(extent_path_sites).range([0, height/2]);
    const scale_nonpath_sites = d3.scaleLinear().domain(extent_nonpath_sites).range([0, height/2]);

    const vis_mods_overview = d3.select("#vis-pt-modifications")
        .append("svg")
            .attr("width", vp_width)
            .attr("height", vp_height)
            .append("g")
            .attr("transform", "translate("+padding["left"]+","+(padding["top"] + (height/2))+")");

    vis_mods_overview.selectAll(".rect-nonpath")
        .data(modifications)
        .enter()
        .append("rect")
        .attr("class", "rect-nonpath")
        .attr("x", d => scale_labels(d[0]))
        .attr("y", d => -scale_nonpath_sites(d[1]["non_pathogenic"]))
        .attr("width", scale_labels.bandwidth())
        .attr("height", d => scale_nonpath_sites(d[1]["non_pathogenic"]))
        .attr("fill", "green");

    vis_mods_overview.selectAll(".rect-path")
        .data(modifications)
        .enter()
        .append("rect")
        .attr("class", "rect-path")
        .attr("x", d => scale_labels(d[0]))
        .attr("y", 0)
        .attr("width", scale_labels.bandwidth())
        .attr("height", d => scale_path_sites(d[1]["pathogenic"]))
        .attr("fill", "red");


    // Processing residues
    let residues = [];
    protein_structure.forEach(d => residues.push(d));

    // Processing modifications 
    modifications = modifications.map(d => d);

    // Relevant value-dependant variables for plotting    
    let n_residues = protein_structure.length;
    let n_cols = 40;
    let n_rows = Math.ceil(n_residues/n_cols);


    residues.map(d => {
        d["POS"] = parseInt(d["POS"]) - 1;
        d["row"] = parseInt(d["POS"]/n_cols);
        d["col"] = parseInt(d["POS"]) - n_cols*d["row"];
    });

    let r_cat_residues = [];
    let r_cat_unstructured = [];
    residues.forEach(d => {
        if (!r_cat_residues.includes(d["RES"])){
            r_cat_residues.push(d["RES"]);
        }
        if (!r_cat_unstructured.includes(d["unstructured"])){
            r_cat_unstructured.push(d["unstructured"]);
        }
    });

    let m_cat_gene = [];
    let m_cat_mod = [];
    let m_cat_pos = [];
    let m_cat_mutation = [];
    let m_cat_res = [];
    let m_cat_classification = [];
    modifications.forEach(d => {
        if (!m_cat_gene.includes(d["Gene"])){
            m_cat_gene.push(d["Gene"])
        }
        if (!m_cat_mod.includes(d["MOD"])){
            m_cat_mod.push(d["MOD"])
        }
        if (!m_cat_pos.includes(d["POS"])){
            m_cat_pos.push(d["POS"])
        }
        if (!m_cat_mutation.includes(d["PathogenicMutation"])){
            m_cat_mutation.push(d["PathogenicMutation"])
        }
        if (!m_cat_res.includes(d["RES"])){
            m_cat_res.push(d["RES"])
        }
        if (!m_cat_classification.includes(d["classification"])){
            m_cat_classification.push(d["classification"])
        }
    });

    // We will have three rows (that we can then map this to a circle around the 3D structure)
    // clicking one element 
    // Row 1: (unique) protein aminoacids
    // Row 2: (unique) modifications in the structure

    // const rings_number = 2;
    // const rings_width = 200;
    // const rings_outer_radius = Math.min(width, height)/2;
    // const rings_inner_radius = rings_outer_radius - rings_width;
    // const rings_center = {"cx": width/2, "cy": height/2};
    // const rings_padding = {"inner": 0.1, "outer": 0};
    //
    // const vis = d3.select("#vis-pt-modifications")
    //     .append("svg")
    //         .attr("width", vp_width)
    //         .attr("height", vp_height)
    //         .append("g")
    //         .attr("transform", "translate("+padding["left"]+","+padding["top"]+")");
    //
    // // Map elements in line to circle perimeter
    //
    // let scale_angle_res = d3.scaleBand()
    //     .domain(residues)
    //     .range([0, 2 * Math.PI]);
    //
    // let scale_angle_mod = d3.scaleBand()
    //     .domain(m_cat_mod)
    //     .range([0, 2 * Math.PI]);
    //
    // let scale_radius_rings = d3.scaleBand()
    //     .domain(d3.range(rings_number))
    //     .range([rings_inner_radius, rings_outer_radius])
    //     .paddingInner(rings_padding["inner"])
    //     .paddingOuter(rings_padding["outer"]);
    //
    // // Map colors
    //
    // console.log(residues.map(d => d["POS"]));
    //
    // let scale_color_res = d3.scaleLinear()
    //     .domain([0, residues.length])
    //     .range([0, 1]);
    //
    // console.log(scale_color_res("50"));
    //
    // function get_arc_gen(start_angle, bandwidth, inner_radius, outer_radius){
    //     return d3.arc()
    //         .startAngle(start_angle)
    //         .endAngle(start_angle + bandwidth)
    //         .innerRadius(inner_radius)
    //         .outerRadius(outer_radius)();
    // }
    //
    // // https://medium.com/@kj_schmidt/show-data-on-mouse-over-with-d3-js-3bf598ff8fc2
    // vis
    //     .append("g")
    //     .attr("id", "res-ring")
    //     .attr("transform", "translate("+rings_center["cx"]+", "+rings_center["cy"]+")")
    //     .selectAll("path")
    //     .data(residues)
    //     .enter()
    //     .append("path")
    //         .attr("d", d => get_arc_gen(scale_angle_res(d), scale_angle_res.bandwidth(), scale_radius_rings(0), scale_radius_rings(0)+scale_radius_rings.bandwidth()))
    //         .attr("stroke", "black")
    //         .attr("fill", d => d3.interpolateSpectral(scale_color_res(d["POS"])))
    //         .on("mouseover", function(d, i){
    //             d3.select(this).transition().duration("50").attr("fill", "white");
    //         })
    //         .on("mouseout", function(d, i){
    //             const data = d.srcElement.__data__;
    //             d3.select(this).transition().duration("50").attr("fill", d3.interpolateSpectral(scale_color_res(data["POS"])));
    //         })
    //
    //
    // vis
    //     .append("g")
    //     .attr("id", "ptm-ring")
    //     .attr("transform", "translate("+rings_center["cx"]+", "+rings_center["cy"]+")")
    //     .selectAll("path")
    //     .data(m_cat_mod)
    //     .enter()
    //     .append("path")
    //         .attr("d", d=>get_arc_gen(scale_angle_mod(d), scale_angle_mod.bandwidth(), scale_radius_rings(1), scale_radius_rings(1)+scale_radius_rings.bandwidth()))
    //         .attr("stroke", "black")
    //         .attr("fill", "white");
    

    // function range(start, end){
    //     return (new Array(end-start)).fill(1).map((d, i) => i + start);
    // }
            
    // const scale_rows = d3.scalePoint().domain(range(0,n_rows)).range([0, height]);
    // const scale_cols = d3.scalePoint().domain(range(0,n_cols)).range([0, width]);
    // const scale_color = d3.scalePoint().domain(r_cat_residues).range([0, 1]);
    

    // vis
    //     .selectAll("circle")
    //     .data(residues)
    //     .enter()
    //     .append("circle")
    //         .attr("cx", d => scale_cols(d["col"]))
    //         .attr("cy", d => scale_rows(d["row"]))
    //         .attr("r", 5)
    //         .attr("fill", d => d3.interpolateTurbo(scale_color(d["RES"])));
}

function plot_dashboard(protein_structure, protein_modifications){      
    // Define global variables like color scales
    //plot_3d_structure(protein_structure);
    plot_vis_modifications(protein_structure, protein_modifications);
}

function plot_3d_structure(){

}

function get_unique(iterable){
    let helper = new Map();
    iterable.forEach(d => helper.set(d, 0));
    return Array.from(helper.keys());
}

function plot_2d_structure(data, ctx, width, height, inner_radius, interaction_data){
    console.log(data);
    let structure = data["structure"];
    //structure = structure.filter(d => d.POS < 100);
    
    let height_var = "num_mods_total";
    let color_var = "RES";

    const radius_res_circle = inner_radius + 10        
    const radius_max = height/2;
  
    function get_colors(steps){
        let out = new Array();
        steps.forEach(d => {
            out.push([Math.random(), Math.random(), Math.random()]);
            out[out.length-1] = out[out.length-1].map(d => parseInt(d*255));
        });
        return out;
    }

    // Outer circle of residues
    // POS -> angle -> x, y    
    const scale_circle = d3.scaleBand().domain(structure.map(d => d.POS)).range([0, (19/10)*Math.PI]);
    scale_circle.paddingInner(0.2);

    const unique_values_to_color = get_unique(structure.map(d => d.RES));
    console.log(unique_values_to_color);
    const scale_squares_color = d3.scaleOrdinal().domain(unique_values_to_color).range(get_colors(unique_values_to_color));

    const x0 = radius_res_circle * Math.sin(0);
    const y0 = radius_res_circle * Math.cos(0);
    const x1 = radius_res_circle * Math.sin(scale_circle.bandwidth());
    const y1 = radius_res_circle * Math.cos(scale_circle.bandwidth());
    const square_size = ((x1-x0)**2 + (y1-y0)**2)**0.5;
    const radius_start_bars = radius_res_circle + square_size;

    const scale_bars_height = d3.scaleLinear().domain(d3.extent(structure, d => d[height_var])).range([0, radius_max - radius_start_bars]);

    ctx.clearRect(0, 0, width, height);

    // Drawing marks
    if(false){
        // Circle where 3d structure will be positioned
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(width/2, height/2, inner_radius, 0, 2 * Math.PI);
        ctx.stroke();

        // Circle where residues start
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(width/2, height/2, radius_res_circle, 0, 2 * Math.PI);
        ctx.stroke();

        // Circle where bars start
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(width/2, height/2, radius_res_circle + square_size, 0, 2 * Math.PI);
        ctx.stroke();

        // Circle where highest bar should end (max radius)
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(width/2, height/2, radius_max, 0, 2 * Math.PI);
        ctx.stroke();
    }  

    // Residues connecting path
    // This is the linear representation
    // Therefore, when squares are too small they fade and only this one remains
    ctx.strokeStyle = "gray";
    ctx.translate(width/2, height/2);
    ctx.beginPath();        
    structure.map(d => {
        const angle_rad = scale_circle(d.POS);
        const x = (radius_res_circle + square_size/2) * Math.sin(angle_rad);
        const y = (radius_res_circle + square_size/2) * Math.cos(angle_rad);
        ctx.lineTo(x,y);
    });
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.setTransform(1,0,0,1,0,0);
    
    // Residues squares
    ctx.strokeStyle = "black";
    ctx.translate(width/2, height/2);
    structure.map(d => {
        const sq_color = scale_squares_color(d[color_var]);
        const angle_rad = scale_circle(d.POS);
        const x = radius_res_circle * Math.sin(angle_rad);
        const y = radius_res_circle * Math.cos(angle_rad);
        //ctx.translate(-(x-width/2), -(y-height/2));
        ctx.translate(x, y);
        ctx.rotate(-angle_rad);
        ctx.translate(-square_size/2, 0);

        ctx.fillStyle = "rgb("+sq_color[0]+","+sq_color[1]+","+sq_color[2]+")"; 
        ctx.fillRect(0,0,square_size,square_size);
        //ctx.strokeRect(0,0,square_size,square_size);

        ctx.translate(+square_size/2, 0);
        ctx.rotate(angle_rad);  
        ctx.translate(-x,-y);
    });
    ctx.setTransform(1,0,0,1,0,0);

    // Bars 
    ctx.fillStyle = "lightgray";
    ctx.translate(width/2, height/2);
    structure.map(d => {
        const bar_height = scale_bars_height(d.num_mods_total);
        const angle_rad = scale_circle(d.POS);
        const x = radius_res_circle * Math.sin(angle_rad);
        const y = radius_res_circle * Math.cos(angle_rad);
        ctx.translate(x, y);
        ctx.rotate(-angle_rad);
        ctx.translate(-square_size/2, square_size);

        ctx.fillRect(0,0,square_size,bar_height);

        ctx.translate(+square_size/2, -square_size);
        ctx.rotate(angle_rad);  
        ctx.translate(-x,-y);        
    });
    ctx.setTransform(1,0,0,1,0,0);

    // INTERACTION DATA
    if("mouseX" in interaction_data & "mouseY" in interaction_data){
        console.log(interaction_data);
        // Find the object with the given coordinates, if there is one and update the chart accordingly
    }

}

function structure_visualization(structure, modifications, nearest_neighbors){
    const width = 800;
    const height = 800;
    const inner_radius = parseInt((width/2)*0.8);
    
    data = {
        "structure": structure,
        "modifications": modifications,
        "nearest_neighbors": nearest_neighbors
    }

    const str_vis_div =d3.select("#structure_visualization_widget");
    str_vis_div.attr("style", "position: relative;");

    str_vis_div.append("canvas")
        .attr("id", "layer_3d_canvas")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "position: absolute; left: 0; top: 0; z-index: 0;");

    str_vis_div.append("canvas")
        .attr("id", "layer_2d_canvas")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "position: absolute; left: 0; top: 0; z-index: 1;");


    const canvas_2d = document.getElementById("layer_2d_canvas");
    const canvas_3d = document.getElementById("layer_3d_canvas");
    const ctx_2d = canvas_2d.getContext("2d");
    const ctx_3d = canvas_3d.getContext("2d");


    plot_2d_structure(data, layer_2d_canvas.getContext("2d"), width, height, inner_radius, {});

    d3.select("#layer_2d_canvas").on("mousemove", function(event){
        const interaction_data = {
            "mouseX": event.layerX || event.offsetX,
            "mouseY": event.layerY || event.offsetY 
        }
        plot_2d_structure(data, layer_2d_canvas.getContext("2d"), width, height, inner_radius, interaction_data);
        //console.log(mouseX, mouseY);
    });
}

const promises = [
    fetch("../../../data/json/df_structures.json"), 
    fetch("../../../data/json/df_modifications.json"),
    fetch("../../../data/json/df_neighbors.json"),
    fetch("../../../data/json/df_nearest_neighbors.json"),
];
Promise.all(promises)
.then(responses => {
    return Promise.all(responses.map(d => d.json()));
})
.then(data => {
    //plot_dashboard(data[0], data[1])
    console.log(get_unique(data[0].map(d => d.UniAcc)));
    const acc = "P01137"; // simulates the selection of a protein structure to visualize
    structure_visualization(
        data[0].filter(d => d.UniAcc == acc), 
        data[1].filter(d => d.UniAcc == acc), 
        data[3].filter(d => d.UniAcc == acc));
});

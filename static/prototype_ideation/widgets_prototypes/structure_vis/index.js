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

function plot_3d_structure(){

}

function get_unique(iterable){
    let helper = new Map();
    iterable.forEach(d => helper.set(d, 0));
    return Array.from(helper.keys());
}

function get_colors(steps){
    let out = new Array();
    steps.forEach(d => {
        out.push([Math.random(), Math.random(), Math.random()]);
        out[out.length-1] = out[out.length-1].map(d => parseInt(d*255));
    });
    return out;
}

function plot_2d_structure_svg(data, svg, width, height, inner_radius){

    // Data related stuff
    let structure = data["structure"];
    let nearest_neighbors = data["nearest_neighbors"];
    
    //structure = structure.filter(d => d.POS < 100);
    //nearest_neighbors = nearest_neighbors.filter(d => d.POS_x < 100 && d.POS_y < 100);
    
    let feat_color = "RES"; 
    let feat_height = "num_mods_total";

    let unique_values_color = get_unique(structure.map(d => d.RES));
    console.log(unique_values_color);

    // Blueprint (scales and limits)
    const scale_res_orbit = d3.scaleBand().domain(structure.map(d => d.POS)).range([0, (19/10)*Math.PI]);
    scale_res_orbit.paddingInner(0.2);
    const radius_res_orbit = inner_radius + 10        

    const scale_squares_color = d3.scaleOrdinal().domain(unique_values_color).range(get_colors(unique_values_color));

    const x0 = radius_res_orbit * Math.sin(0);
    const y0 = radius_res_orbit * Math.cos(0);
    const x1 = radius_res_orbit * Math.sin(scale_res_orbit.bandwidth());
    const y1 = radius_res_orbit * Math.cos(scale_res_orbit.bandwidth());

    const square_size = ((x1-x0)**2 + (y1-y0)**2)**0.5;
    
    const radius_max = height/2;
    const radius_start_bars = radius_res_orbit + square_size;

    const scale_bars_height = d3.scaleLinear().domain(d3.extent(structure, d => d[feat_height])).range([0, radius_max - radius_start_bars]);

    // Drawing marks
    if(true){

        let canvas = svg.append("g");
        
        // Circle where 3d structure will be positioned
        canvas
            .append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", inner_radius)
                .attr("stroke", "red")
                .attr("fill", "none");

        // Circle where residues start
        canvas
            .append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", radius_res_orbit)
                .attr("stroke", "red")
                .attr("fill", "none");

        // Circle where bars start       
        canvas
            .append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", radius_res_orbit + square_size)
                .attr("stroke", "red")
                .attr("fill", "none");

        // Circle where highest bar should end (max radius)
        canvas
            .append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", radius_max)
                .attr("stroke", "red")
                .attr("fill", "none");

    }     

    // Residues squares
    let res_squares = svg.append("g").attr("id", "res_squares");

    structure.map(d => {
        const sq_color = scale_squares_color(d[feat_color]);
        const angle_rad = scale_res_orbit(d.POS);
        const angle_deg = -angle_rad * (180/Math.PI);
        const x = radius_res_orbit * Math.sin(angle_rad);
        const y = radius_res_orbit * Math.cos(angle_rad);
        let square = res_squares
            .append("rect")
                .attr("id", "res_square_"+d.UniAcc+"_"+d.POS+"")
                .attr("x",x+(width/2))
                .attr("y",y+(height/2))
                .attr("width",square_size)
                .attr("height",square_size)
                .attr("fill", "rgb("+sq_color[0]+","+sq_color[1]+","+sq_color[2]+")")
                .attr("transform", "rotate("+angle_deg+" "+(x+width/2)+" "+(y+height/2)+")");

        let prev_feat_color_el = null;

        square.on("click", function(d, i){
            let square_id = d3.select(this).attr("id");
            let acc = square_id.split("_")[2];
            let pos = square_id.split("_")[3];
            let res_el = structure.filter(d => (d.UniAcc == acc) & (d.POS == pos))[0];
            let feat_color_el = res_el[feat_color];            

            let squares = document.querySelectorAll("#res_squares rect");
            squares.forEach(sq => {
                let square = d3.select(sq);
                let square_id = square.attr("id");
                let acc = square_id.split("_")[2];
                let pos = square_id.split("_")[3];
                let res_el = structure.filter(d => (d.UniAcc == acc) & (d.POS == pos))[0];
                
                const sq_color = scale_squares_color(res_el[feat_color]);
                square.attr("fill", "rgb("+sq_color[0]+","+sq_color[1]+","+sq_color[2]+")");

                if(prev_feat_color_el == null || prev_feat_color_el != feat_color_el){
                    if(res_el[feat_color] != feat_color_el){
                        console.log(square);
                        square.attr("fill", "gray");
                    } 
                }
                                    
            }); 

            prev_feat_color_el = feat_color_el;
            
            console.log(res_el);            
            d3.select("#tooltip #res").text(""+res_el.RES_name+" ("+res_el.RES+")");
            d3.select("#tooltip #mods").text(res_el.num_mods_total);
            d3.select("#tooltip #path").text(res_el.num_mods_pathogenic);
           
        });

        square.on("mouseover", function(d, i){
            console.log("Mouse over");
            let square_id = d3.select(this).attr("id");
            let acc = square_id.split("_")[2];
            let pos = square_id.split("_")[3];
            let res_el = structure.filter(d => (d.UniAcc == acc) & (d.POS == pos))[0];

            d3.select(this)
                .attr("x", d3.select(this).attr("x") - 5)
                .attr("y", d3.select(this).attr("y") - 5)
                .attr("height", square_size + 10)
                .attr("width", square_size + 10);

            // Toggle Sankey diagram
        });

        square.on("mouseout", function(d, i){
            console.log("Mouse out");
            let square_id = d3.select(this).attr("id");
            let acc = square_id.split("_")[2];
            let pos = square_id.split("_")[3];
            let res_el = structure.filter(d => (d.UniAcc == acc) & (d.POS == pos))[0];
        
            const angle_rad = scale_res_orbit(res_el.POS);  
            const angle_deg = -angle_rad * (180/Math.PI);          
            const x = radius_res_orbit * Math.sin(angle_rad);
            const y = radius_res_orbit * Math.cos(angle_rad);

            d3.select(this)
                .attr("height", square_size)
                .attr("width", square_size)
                .attr("x", x +  (width/2))
                .attr("y", y + (height/2))
                .attr("transform", "rotate("+angle_deg+" "+(x+width/2)+" "+(y+height/2)+")");

            // Toggle Sankey diagram
        });
    });

    // Residues bars
    structure.map(d => {
        const bar_height = scale_bars_height(d.num_mods_total);
        const angle_rad = scale_res_orbit(d.POS);
        const angle_deg = -angle_rad * (180/Math.PI);
        const x = radius_res_orbit * Math.sin(angle_rad);
        const y = radius_res_orbit * Math.cos(angle_rad);

        let res_bars = svg.append("g").attr("id", "res_bars");
        
        res_bars.append("rect")
        .attr("x",x+(width/2))
        .attr("y",y+(width/2)+square_size)
        .attr("width",square_size)
        .attr("height",bar_height)
        .attr("fill", "gray")
        .attr("transform", "rotate("+angle_deg+" "+(x+width/2)+" "+(y+height/2)+")");   
    });

    // Chord diagram
    console.log(nearest_neighbors);
    let nn_chords = svg.append("g").attr("id", "nn_chords")
    nearest_neighbors.forEach(d => {
        let el_x = structure.filter(e => {return e.UniAcc == d.UniAcc & e.POS == d.POS_x})[0];
        //console.log(el_x);
        const angle_rad_x = scale_res_orbit(el_x.POS);
        const x_x = radius_res_orbit * Math.sin(angle_rad_x) + width/2;
        const y_x = radius_res_orbit * Math.cos(angle_rad_x) + height/2;

        let el_y = structure.filter(e => {return e.UniAcc == d.UniAcc & e.POS == d.POS_y})[0];
        //console.log(el_y);
        const angle_rad_y = scale_res_orbit(el_y.POS);
        const x_y = radius_res_orbit * Math.sin(angle_rad_y) + width/2;
        const y_y = radius_res_orbit * Math.cos(angle_rad_y) + height/2;

        nn_chords
            .append("line")
                .attr("x1", x_x)
                .attr("y1", y_x)
                .attr("x2", x_y)
                .attr("y2", y_y)
                .attr("stroke", "rgba(100,100,100,0.1)");
    });
}

function plot_2d_structure(data, ctx, width, height, inner_radius, interaction_data){

    console.log(data);
    let structure = data["structure"];
    structure = structure.filter(d => d.POS < 100);

    // INTERACTION DATA
    // https://medium.com/free-code-camp/d3-and-canvas-in-3-steps-8505c8b27444
    if("mouseX" in interaction_data & "mouseY" in interaction_data){
        console.log(interaction_data);
        // Find the object with the given coordinates, if there is one and update the chart accordingly
        d3.select("#tooltip").text("("+interaction_data.mouseX+", "+interaction_data.mouseY+")");
        // Determine if element was clicked 
        // If not, everything as usual
        // If yes, highlight elements that share color variable
    }    
    
    let height_var = "num_mods_total";
    let color_var = "RES";

    const radius_res_circle = inner_radius + 10        
    const radius_max = height/2;

    // Outer circle of residues
    // POS -> angle -> x, y    
    const scale_circle = d3.scaleBand().domain(structure.map(d => d.POS)).range([0, (19/10)*Math.PI]);
    scale_circle.paddingInner(0.2);

    const unique_values_to_color = get_unique(structure.map(d => d.RES));
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

    str_vis_div.append("svg")
        .attr("id", "layer_2d_svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "position: absolute; left: 0; top: 0; z-index: 1;");


    const canvas_2d = document.getElementById("layer_2d_canvas");
    const canvas_3d = document.getElementById("layer_3d_canvas");
    const ctx_2d = canvas_2d.getContext("2d");
    const ctx_3d = canvas_3d.getContext("2d");


    //plot_2d_structure(data, layer_2d_canvas.getContext("2d"), width, height, inner_radius, {});
    plot_2d_structure_svg(data, d3.select("#layer_2d_svg"), width, height, inner_radius);

    // d3.select("#layer_2d_svg").on("click", function(event){
    //     const interaction_data = {
    //         "mouseX": event.layerX || event.offsetX,
    //         "mouseY": event.layerY || event.offsetY 
    //     }
    //     plot_2d_structure_svg(data, d3.select("#layer_2d_svg"), width, height, inner_radius, interaction_data);
    //     //console.log(mouseX, mouseY);
    // });
}

const promises = [
    fetch("../../../data/json/df_structures.json"), 
    fetch("../../../data/json/df_modifications.json"),
    fetch("../../../data/json/df_nearest_neighbors.json"),
    //fetch("../../../data/json/df_neighbors.json"),
];
Promise.all(promises)
.then(responses => {
    return Promise.all(responses.map(d => d.json()));
})
.then(data => {
    //plot_dashboard(data[0], data[1])
    console.log(get_unique(data[0].map(d => d.UniAcc)));
    const acc = "P04202"; // simulates the selection of a protein structure to visualize
    structure_visualization(
        data[0].filter(d => d.UniAcc == acc), 
        data[1].filter(d => d.UniAcc == acc), 
        data[2].filter(d => d.UniAcc == acc));
});

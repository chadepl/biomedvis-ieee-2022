/*
This file implements a prototype of a widget for visualizing the
primary (2D) and secondary + tertiary (3D) structures of a protein 
simultaneously. To do so it combines two canvases into one component.
- Threejs canvas: 3D 
- D3 canvas: 2D
*/

import * as THREE from "three";

function plot_3d_structure(data, canvas, width, height, inner_radius){

    let structure = data["structure"];
    let points_data = structure.map(d => {
        return {
            "x": d.x_coord_ca, 
            "y": d.y_coord_ca, 
            "z": d.z_coord_ca
        }
    });

    console.log(points_data);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(255,255,255)");
    let camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({"canvas": canvas});
    renderer.setSize(width, height);      
    
    let points = points_data.map(d => new THREE.Vector3(d.x, d.y, d.z));

    // Draw points
    let group = new THREE.Group();
    scene.add(group);

    let particles_material = new THREE.PointsMaterial({
        //color: new THREE.Color("rgba(255,0,0)"),
        vertexColors: true,
        size: 5,
        //blending: THREE.AdditiveBlending,
        transparent : true,
        sizeAttenuation: false
    });

    let particles = new THREE.BufferGeometry();
    let particles_positions = new Float32Array(points_data.length * 3);
    let particles_colors = new Float32Array(points_data.length * 3);

    for(let i = 0; i < points_data.length; i++){
        particles_positions[(i * 3) + 0] = points_data[i].x;
        particles_positions[(i * 3) + 1] = points_data[i].y;
        particles_positions[(i * 3) + 2] = points_data[i].z;

        particles_colors[(i * 3) + 0] = Math.random();
        particles_colors[(i * 3) + 1] = Math.random();
        particles_colors[(i * 3) + 2] = Math.random();
    }
    console.log(new THREE.Color("rgb(134,56,45)"));

    particles.setDrawRange(0, points_data.length);
    particles.setAttribute("position", new THREE.Float32BufferAttribute(particles_positions, 3).setUsage(THREE.DynamicDrawUsage));
    particles.setAttribute("color", new THREE.Float32BufferAttribute(particles_colors, 3));

    let point_cloud = new THREE.Points(particles, particles_material);
    group.add(point_cloud);

    // Draw lines
    let edges_geometry = new THREE.BufferGeometry();
    edges_geometry.setAttribute("position", new THREE.Float32BufferAttribute(particles_positions, 3));

    let edges_material = new THREE.LineBasicMaterial();
    edges_material.color = new THREE.Color("rgba(0,0,0,1)");

    let edges_mesh = new THREE.Line(edges_geometry, edges_material);
    group.add(edges_mesh);

    // Setup scene
    // - Where to look at
    let mean = [
        points_data.map(d => d.x).reduce((pe, ce) => pe + ce, 0)/points_data.length,
        points_data.map(d => d.y).reduce((pe, ce) => pe + ce, 0)/points_data.length,
        points_data.map(d => d.z).reduce((pe, ce) => pe + ce, 0)/points_data.length
    ];
    let points_center = new THREE.Vector3(mean[0], mean[1], mean[2]);

    camera.position.set(0,0,0);    
    const moving_vec = new THREE.Vector3(0, 0, 0);
    moving_vec.sub(points_center).multiplyScalar(10);
    camera.position.add(moving_vec);    
    camera.lookAt(points_center);

    console.log(camera.position);
    console.log(points_center);
    console.log(moving_vec);

    //camera.position.z = 5;  
    renderer.render(scene, camera);
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

    function get_css_color(rgba_array){
        if(rgba_array.length == 3){
            return "rgba("+rgba_array[0]+","+rgba_array[1]+","+rgba_array[2]+", 1)"
        }else if(rgba_array.length == 4){
            return "rgba("+rgba_array[0]+","+rgba_array[1]+","+rgba_array[2]+", "+rgba_array[3]+")"
        }        
    }

    // Squares data
    let squares_data = structure.map(d => {
        let angle_rad = scale_res_orbit(d.POS);
        return {
            "acc": d.UniAcc, // indexing info
            "pos": d.POS, // indexing info
            "feat_color": d[feat_color],
            "color": scale_squares_color(d[feat_color]),
            "angle_rad": angle_rad,
            "angle_deg": -angle_rad * (180/Math.PI),
            "x": radius_res_orbit * Math.sin(angle_rad),
            "y": radius_res_orbit * Math.cos(angle_rad),            
            "colored": true, // all squares start colored
            "highlighted": false,  // no square starts selected
            "bar_height": scale_bars_height(d[feat_height])
        };
    })

    // Residues squares 
    let res_squares_group = svg.append("g").attr("id", "res_squares");

    let res_squares = res_squares_group.selectAll("rect")
        .data(squares_data, d => d.acc+"-"+d.pos)
        .enter()
            .append("rect")
                .attr("x", d => d.x + (width/2))
                .attr("y", d => d.y + (height/2))
                .attr("width", square_size)
                .attr("height", square_size)
                .attr("fill", d => d.colored ? get_css_color(d.color) : "gray")
                .attr("stroke", d => d.highlighted ? "rgba(0, 155, 155, 1)" : "none")
                .attr("transform", d => "rotate("+d.angle_deg+" "+(d.x+(width/2))+" "+(d.y+(height/2))+")"); 


    // Residues bars
    let res_bars_group = svg.append("g").attr("id", "res_bars");

    let res_bars = res_bars_group.selectAll("rect")
        .data(squares_data, d => d.acc+"-"+d.pos)
        .enter()
            .append("rect")
                .attr("x", d => d.x + (width/2))
                .attr("y", d => d.y + (height/2) + square_size)
                .attr("width", square_size)
                .attr("height", d => d.bar_height)
                .attr("fill", d => d.colored ? "gray" : "lightgray")
                .attr("transform", d => "rotate("+d.angle_deg+" "+(d.x+(width/2))+" "+(d.y+(height/2))+")");

    // Chords data
    let nn_data = nearest_neighbors.map(d => {
        let el_x = squares_data.filter(e => {return e.acc == d.UniAcc & e.pos == d.POS_x})[0];
        let el_y = squares_data.filter(e => {return e.UniAcc == d.acc & e.pos == d.POS_y})[0];

        return {
            "acc": d.UniAcc, // for indexing
            "pos_x": d.POS_x, // for indexing
            "pos_y": d.POS_y, // for indexing
            "x_x": el_x.x,
            "y_x": el_x.y,
            "x_y": el_y.x,
            "y_y": el_y.y,
        };
    });

    // Residues neighbor chords
    let res_chords_group = svg.append("g").attr("id", "res_chords");

    let res_chords = res_chords_group.selectAll("line").data(nn_data, d => d.acc+"-"+d.pos_x+"-"+d.pos_y)
        .enter()
            .append("line")
                .attr("x1", d => d.x_x + (width/2))
                .attr("y1", d => d.y_x + (height/2))
                .attr("x2", d => d.x_y + (width/2))
                .attr("y2", d => d.y_y + (height/2))
                .attr("stroke", "rgba(100,100,100,0.01)");

    function get_res_info(acc, pos){
        return structure.filter(d => d.UniAcc == acc && d.POS == pos)[0];
    }

    let selected_elements = [];
    
    function onclick_res_squares(event, datum){
        /*
        Clicking an element "selects" it.
        Meaning that it gets added to a list of selected 
        elements for neighbor analysis.
         */
        node = d3.select(this);
        console.log(event);
        console.log(datum);
        console.log(node);        
    }

    function onmouseenter_res_squares(event, datum){
        // Toggles information of the res at (acc, pos)
    }

    function onmouseout_res_squares(event, datum){
        // Toggles information of the res at (acc, pos)
    }

    res_squares.on("click", onclick_res_squares);
    res_squares.on("mouseenter", onmouseenter_res_squares);
    res_squares.on("mouseout", onmouseout_res_squares);
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
    const inner_radius = parseInt((width/2)*0.9);
    
    let data = {
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

    // str_vis_div.append("canvas")
    //     .attr("id", "layer_2d_canvas")
    //     .attr("width", width)
    //     .attr("height", height)
    //     .attr("style", "position: absolute; left: 0; top: 0; z-index: 1;");

    str_vis_div.append("svg")
        .attr("id", "layer_2d_svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "position: absolute; left: 0; top: 0; z-index: 1;");


    // const canvas_2d = document.getElementById("layer_2d_canvas");
    const canvas_3d = document.getElementById("layer_3d_canvas");
    // const ctx_2d = canvas_2d.getContext("2d");
    // const ctx_3d = canvas_3d.getContext("2d");

    plot_3d_structure(data, canvas_3d, width, height, inner_radius);
    //plot_2d_structure(data, layer_2d_canvas.getContext("2d"), width, height, inner_radius, {});
    plot_2d_structure_svg(data, d3.select("#layer_2d_svg"), width, height, inner_radius);
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

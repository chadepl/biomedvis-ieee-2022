/*
This file implements a prototype of a widget for visualizing the
primary (2D) and secondary + tertiary (3D) structures of a protein 
simultaneously. To do so it combines two canvases into one component.
- Threejs canvas: 3D 
- D3 canvas: 2D
*/

import * as THREE from "three";
import {OrbitControls} from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js"

/**
 * LOAD DATA
 */

const promises = [
    fetch("../../../data/json/df_structures.json"), 
    fetch("../../../data/json/df_modifications.json"),
    fetch("../../../data/json/df_nearest_neighbors.json"),
    //fetch("../../../data/json/df_neighbors.json"),
];

Promise.all(promises)
    .then(responses => Promise.all(responses.map(d => d.json())))
    .then(data => foldvis_app(data[0], data[1], data[2]));


/**
 * WIDGET ENTRY POINT
 */

function foldvis_app(all_structures, all_modifications, all_nns){
    const acc = ["P01137", "P04202", "P09651"][2]; // simulates the selection of a protein structure to visualize

    let structure_data = {
        structure: all_structures.filter(d => d.UniAcc == acc),
        modifications: all_modifications.filter(d => d.UniAcc == acc),
        nns: all_nns.filter(d => d.UniAcc == acc)
    }

    console.log(structure_data);    

    // general state (data) that different widgets share
    let state = {selected_elements: new Map()};

    // define scales, which need to be shared across widgets
    let var_color_options = new Map();
    var_color_options.set("RES", {name:"RES", desc: "Residue", type: "categorical", palette: d3.schemePaired});
    var_color_options.set("has_mods", {name: "has_mods", desc: "Has modifications", type: "categorical", palette: d3.schemeSpectral[3]});     
    let var_color = var_color_options.get("RES");

    let var_height_options = new Map();
    Object.keys(structure_data.structure[0]).forEach(d => {
        if(d.includes("num")){
            var_height_options.set(d, {name:d, desc: d, type: "linear"});
        }
    });
    console.log(var_height_options);
    let var_height = var_height_options.get("num_mods_total"); // size might be hard to differentiate in current encoding, maybe better to do color orbits?

    // configure menus for scales
    let var_color_select_el = document.getElementById("var-color");
    var_color_options.forEach(v => {
        d3.select(var_color_select_el).append("option").attr("value", v.name).text(v.desc);
    })

    let var_height_select_el = document.getElementById("var-height");
    var_height_options.forEach(v => {
        d3.select(var_height_select_el).append("option").attr("value", v.name).text(v.desc);
    })

    let scale_color;
    function configure_scale_color(data, var_color){
        let scale;
        if(var_color.type === "categorical"){
            let unique_colors = get_unique(data.map(d => d[var_color.name]));
            scale = d3.scaleOrdinal().domain(unique_colors).range(var_color.palette);
        }
        return scale;
    }
    scale_color = configure_scale_color(structure_data.structure, var_color);

    let scale_height;
    function configure_scale_height(data, var_height){
        let scale = d3.scaleLinear().domain([0, d3.max(data, d => d[var_height.name])]);
        return scale;
    }
    scale_height = configure_scale_height(structure_data.structure, var_height);

    // Vis config
    let config = {
        scale_color: scale_color,
        var_color: var_color,
        scale_height: scale_height,
        var_height: var_height,
        orbit_controls_enabled: false,
        bulk_selection_enabled: false,
        show_links_in_3d: false,
        window_square_size: Math.min(window.innerHeight-100, window.innerWidth)        
    }
    config.inner_radius = parseInt((config.window_square_size/2)*0.9);

    let structure_vis_el = document.getElementById("structure_vis_widget");
    structure_visualization(structure_data, structure_vis_el, state, config);

    // Interaction 

    d3.select(var_color_select_el).on("change", d => {
        let var_color_value = var_color_select_el.options[var_color_select_el.selectedIndex].value;
        config.var_color = var_color_options.get(var_color_value);
        config.scale_color = configure_scale_color(structure_data.structure, config.var_color);
        structure_visualization(structure_data, structure_vis_el, state, config);
    });

    d3.select(var_height_select_el).on("change", d => {
        let var_height_value = var_height_select_el.options[var_height_select_el.selectedIndex].value;
        config.var_height = var_height_options.get(var_height_value);
        console.log(config.var_height);
        config.scale_height = configure_scale_height(structure_data.structure, config.var_height);
        structure_visualization(structure_data, structure_vis_el, state, config);
    });

    d3.select("#enable-orbit-controls").on("change", d => {        
        config.orbit_controls_enabled = d3.select("#enable-orbit-controls").node().checked;
        structure_visualization(structure_data, structure_vis_el, state, config);
    });

    d3.select("#enable-bulk-selection").on("change", d => {        
        config.bulk_selection_enabled = d3.select("#enable-bulk-selection").node().checked;
        structure_visualization(structure_data, structure_vis_el, state, config);
    });

    d3.select("#show-links-in-3d").on("change", d => {        
        config.show_links_in_3d = d3.select("#show-links-in-3d").node().checked;
        structure_visualization(structure_data, structure_vis_el, state, config);
    });

    d3.select(window).on("resize", d => {        
        config.window_square_size = Math.min(window.innerHeight-200, window.innerWidth);
        config.inner_radius = parseInt((config.window_square_size/2)*0.9);
        structure_visualization(structure_data, structure_vis_el, state, config);
    })

}

 function structure_visualization(structure_data, structure_vis_el, state, config){
    /*
    Plots the analysis widget for one structure.
    The center is a 3D view of the protein.
    The outer circle corresponds to a 2D view of the protein's
    primary structure, which makes selection and neighborhood 
    analysis easier.
     */

    // - Filtering the data (for debugging purposes)
    // let num_res = 100;
    // data.structure = data.structure.filter(d => d.POS < num_res);
    // data.modifications = data.modifications.filter(d => d.POS < num_res);
    // data.nearest_neighbors = data.nearest_neighbors.filter(d => d.POS_x < 100 && d.POS_y < num_res);

    // General widget settings
    
    let width = config.window_square_size;
    let height = config.window_square_size;
    let inner_radius = config.inner_radius;
    let radius_res_orbit = inner_radius + 10;
    let radius_max = height/2;    

    // Setting up visualization environment
    const str_vis_div = d3.select(structure_vis_el);
    str_vis_div.attr("style", "position: absolute; top: 200px;");

    let canvas3d = str_vis_div.select("#layer_3d_canvas");
    if(canvas3d.empty()){
        canvas3d = str_vis_div.append("canvas")
            .attr("id", "layer_3d_canvas")
            .attr("width", width)
            .attr("height", height)
            .attr("style", "position: absolute; left: 0; top: 0; z-index: 0;");
    }else{
        canvas3d
            .attr("width", width)
            .attr("height", height);
    }
    
    let svg2d = str_vis_div.select("#layer_2d_svg");
    if(svg2d.empty()){
        svg2d = str_vis_div.append("svg")
            .attr("id", "layer_2d_svg")
            .attr("width", width)
            .attr("height", height)
            .attr("style", "position: absolute; left: 0; top: 0; z-index: 1;")
    }else{
        svg2d
            .attr("width", width)
            .attr("height", height);
    }

    // Grid lines (for debugging purposes)

    if(false){

        let drawing_marks = d3.select("#layer_2d_svg").append("g");
        
        // Circle where 3d structure will be positioned
        drawing_marks
            .append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", inner_radius)
                .attr("stroke", "red")
                .attr("fill", "none");

        // Circle where residues start
        drawing_marks
            .append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", radius_res_orbit)
                .attr("stroke", "red")
                .attr("fill", "none");

        // Circle where highest bar should end (max radius)
        drawing_marks
            .append("circle")
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", radius_max)
                .attr("stroke", "red")
                .attr("fill", "none");

    }  


    // Plotting the widget components

    let controls = plot_3d_structure(structure_data, canvas3d.node(), svg2d.node(), width, height, inner_radius, state, config);
    plot_2d_structure_svg(structure_data, svg2d.node(), width, height, radius_res_orbit, radius_max, state, config);   
    controls.enabled = config.orbit_controls_enabled; 
}

/**
 * PLOTTING FUNCTIONS
 */

function plot_3d_structure(data, canvas_node, controls_element, width, height, inner_radius, state, config){

    let scale_color = config.scale_color;
    let var_color = config.var_color.name;

    let structure = data["structure"];
    let points_data = structure.map(d => {
        return {
            "x": d.x_coord_ca, 
            "y": d.y_coord_ca, 
            "z": d.z_coord_ca,
            "var_color": d[var_color]
        }
    });

    const scene = new THREE.Scene();
    console.log(scene);
    scene.background = new THREE.Color("rgb(255,255,255)");
    let camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({"canvas": canvas_node});
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

        let color = d3.rgb(scale_color(points_data[i]["var_color"]));
        particles_colors[(i * 3) + 0] = color.r/255;
        particles_colors[(i * 3) + 1] = color.g/255;
        particles_colors[(i * 3) + 2] = color.b/255;
    }

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

    d3.select(canvas_node).on("click", d => {
        console.log("clicked canvas3d");
    });

    const controls = new OrbitControls(camera, controls_element);    

    //camera.position.z = 5; 
    function animate(){
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }    
    animate(); 
    return controls;
}

function plot_2d_structure_svg(data, svg_node, width, height, radius_res_orbit, radius_max, state, config){    
    // Data related stuff
    let structure = data.structure;
    let nns = data.nns;

    // Config

    let scale_color = config.scale_color;
    let var_color = config.var_color.name; 
    let var_height = config.var_height.name;
    let bulk_selection_enabled = config.bulk_selection_enabled;

    // - Orbit scale setup
    const scale_res_orbit = d3.scaleBand().domain(structure.map(d => d.POS)).range([0, (19/10)*Math.PI]);
    scale_res_orbit.paddingInner(0.2);

    const x0 = radius_res_orbit * Math.sin(0);
    const y0 = radius_res_orbit * Math.cos(0);
    const x1 = radius_res_orbit * Math.sin(scale_res_orbit.bandwidth());
    const y1 = radius_res_orbit * Math.cos(scale_res_orbit.bandwidth());

    const square_size = ((x1-x0)**2 + (y1-y0)**2)**0.5;
    console.log(width, height, radius_res_orbit, square_size);
        
    const radius_start_bars = radius_res_orbit + square_size;

    let scale_bars_height = config.scale_height;
    scale_bars_height.range([0, radius_max - radius_start_bars]);
    console.log(scale_bars_height.domain());
    console.log(scale_bars_height.range());
    //console.log(structure.forEach(d => scale_bars_height(d[var_height])))

    // Plotting

    let svg = d3.select(svg_node);

    console.log(state);

    // - squares data
    function update_squares_data(structure_data, selected_elements){
        let squares_data = structure_data.map(d => {
            let angle_rad = scale_res_orbit(d.POS);
            
            return {
                "acc": d.UniAcc, // indexing info
                "pos": d.POS, // indexing info
                "var_color": d[var_color],
                "color": scale_color(d[var_color]),
                "angle_rad": angle_rad,
                "angle_deg": -angle_rad * (180/Math.PI),
                "x": radius_res_orbit * Math.sin(angle_rad),
                "y": radius_res_orbit * Math.cos(angle_rad),            
                "colored": true, // all squares start colored
                "highlighted": false,  // no square starts selected
                "bar_height": scale_bars_height(d[var_height])
            };
        })
        console.log(selected_elements);
        Array.from(selected_elements.keys()).forEach(d => {
            console.log(d);
            for (let i = 0; i < squares_data.length; i++) {
                const e = squares_data[i];
                if(e.pos === d){
                    squares_data[i].highlighted = true;
                    break;                   
                }
            }
        })
        return squares_data;
    }
    let squares_data = update_squares_data(structure, state.selected_elements)

    console.log(squares_data);

    // Residues squares 
    let res_squares_group = svg.select("#res_squares");
    if(res_squares_group.empty()){
        res_squares_group = svg.append("g").attr("id", "res_squares");
    }   
    
    function update_squares(data){
        let res_squares = res_squares_group.selectAll("rect")
            .data(data, d => d.acc+"-"+d.pos)
            .join("rect")
                .attr("x", d => d.x + (width/2))
                .attr("y", d => d.y + (height/2))
                .attr("width", square_size)
                .attr("height", square_size)
                .attr("fill", d => d.colored ? d.color : "gray")
                .attr("stroke", d => d.highlighted ? "rgba(0, 155, 155, 1)" : "none")
                .attr("transform", d => "rotate("+d.angle_deg+" "+(d.x+(width/2))+" "+(d.y+(height/2))+")"); 
        return res_squares;
    }
    let res_squares = update_squares(squares_data);

    // Residues bars
    let res_bars_group = svg.select("#res_bars");
    if(res_bars_group.empty()){
        res_bars_group = svg.append("g").attr("id", "res_bars");
    }    

    let res_bars = res_bars_group.selectAll("rect")
        .data(squares_data, d => d.acc+"-"+d.pos)
        .join("rect")
            .attr("x", d => d.x + (width/2))
            .attr("y", d => d.y + (height/2) + square_size)
            .attr("width", square_size)
            .attr("height", d => d.bar_height)
            .attr("fill", d => d.colored ? "gray" : "lightgray")
            .attr("transform", d => "rotate("+d.angle_deg+" "+(d.x+(width/2))+" "+(d.y+(height/2))+")");

    function create_nns_chords(datum, squares_data, nns_data, chords_class){

        // Chords data
        let datum_nn = nns_data.filter(d => (d.POS_x == datum.pos)).map(d => {
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
        let res_chords_group = svg.append("g").attr("id", "res_chords").attr("class", chords_class);

        res_chords_group.selectAll("line").data(datum_nn, d => d.acc+"-"+d.pos_x+"-"+d.pos_y)
            .enter()
                .append("line")
                    .attr("x1", d => d.x_x + (width/2))
                    .attr("y1", d => d.y_x + (height/2))
                    .attr("x2", d => d.x_y + (width/2))
                    .attr("y2", d => d.y_y + (height/2))
                    .attr("stroke", "rgba(100,100,100,0.1)");
    }

    function clean_nns_chords(chords_class){
        console.log("clean");
        svg.select("#res_chords."+chords_class).remove();
    }

    // Interaction

    svg.on("click", function(event, datum){
        let [x, y] = d3.pointer(event)
        x = x - width/2;
        y = y - height/2;
        let norm_vec = Math.sqrt(x**2 + y**2);
        if(norm_vec < radius_res_orbit){
            console.log("Withing field of view. Sending event to canvas3d.");
            d3.select("canvas").dispatch("click");
        }else{
            console.log("Outside field of view.");
        }
    })
    
    function onclick_res_squares(event, datum){
        /*
        Clicking an element "selects" it.
        Meaning that it gets added to a list of selected 
        elements for neighbor analysis.
         */        
        let node = d3.select(this);  
        let deselect = state.selected_elements.has(datum.pos); // if false then select
        console.log("Bulk selection enabled: " + bulk_selection_enabled);
        console.log("Deselecting: " + deselect);

        if(bulk_selection_enabled){
            let var_select = datum.var_color;
            squares_data.forEach(d => {
                if(d.var_color === var_select){
                    if(deselect){
                        if(state.selected_elements.has(d.pos)){
                            console.log("State has: " + d.pos);
                            console.log(state.selected_elements.delete(d.pos));
                        }
                    }else{
                        state.selected_elements.set(d.pos, d);
                    }
                    state.selected_elements.set(d.pos, d);
                }
            });
        }else{
            if(deselect){
                state.selected_elements.delete(datum.pos);
                clean_nns_chords("selection")
            }else{
                state.selected_elements.set(datum.pos, datum);
                create_nns_chords(datum, squares_data, nns, "selection");
            }
        }
        console.log(state.selected_elements);
        squares_data = update_squares_data(structure, state.selected_elements)
        console.log(squares_data);
        res_squares = update_squares(squares_data);           
    }

    function onmouseenter_res_squares(event, datum){
        // Toggles information of the res at (acc, pos)
        let node = d3.select(this);
        create_nns_chords(datum, squares_data, nns, "hover");
    }

    function onmouseout_res_squares(event, datum){
        // Toggles information of the res at (acc, pos)
        clean_nns_chords("hover");
    }

    res_squares.on("click", onclick_res_squares);
    res_squares.on("mouseenter", onmouseenter_res_squares);
    res_squares.on("mouseout", onmouseout_res_squares);
}

/**
 * HELPER FUNCTIONS
 */

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
import * as THREE from "three";
import {OrbitControls} from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js"

/**
 * Load app data
 */

 const promises = [
    fetch("../data/json/df_structures.json"), 
    fetch("../data/json/df_modifications.json"),
    fetch("../data/json/df_nearest_neighbors.json"),
    //fetch("../../../data/json/df_neighbors.json"),
];

Promise.all(promises)
    .then(responses => Promise.all(responses.map(d => d.json())))
    .then(data => app(data[0], data[1], data[2]));

/**
 * App entry point
 */

let raw_data = {};
let state = {};
let config = {};

function app(structures_raw, modifications_raw, neighbors_raw){  

    raw_data.structures_raw = structures_raw;
    raw_data.modifications_raw = modifications_raw;
    raw_data.neighbors_raw = neighbors_raw;
    
    // Configure protein selector (refreshes the whole UI)

    let unique_proteins = new Map();
    structures_raw.forEach(d => {if(!unique_proteins.has(d.UniAcc)){unique_proteins.set(d.UniAcc, {Protein: d.Protein, Species: d.Species, Gene: d.Gene})}});

    let protein_selector = document.getElementById("dataset-picker");
    Array.from(unique_proteins.entries()).forEach(d => {
        let option = document.createElement("option");
        option.value = d[0];
        option.text = `${d[0]} - ${d[1].Protein} (${d[1].Species})`;
        protein_selector.appendChild(option);    
    });

    protein_selector.addEventListener("change", function(){
        let protein_selector = document.getElementById("dataset-picker");
        configure_app(protein_selector.value);
        render_app();
    })
         
    // events
    window.addEventListener("resize", function(){
        update_config();
        render_app();
    });

    configure_app(protein_selector.value);
    render_app();
    
}

function configure_app(prot_uniacc){        
    update_state(prot_uniacc);
    configure_options();
    update_config();            
}

function render_app(){
    render_main_panel();
    render_side_panel();
    //neighborhood_vis(state, neighborhood_vis_container, config);
}

function update_state(prot_uniacc){

    state.structure = raw_data.structures_raw.filter(d => d.UniAcc == prot_uniacc);
    state.modifications = raw_data.modifications_raw.filter(d => d.UniAcc == prot_uniacc);
    state.neighbors = raw_data.neighbors_raw.filter(d => d.UniAcc == prot_uniacc);

    state.structure = state.structure.map(d => {
        let out = d;
        out.has_pathogenic = out.num_mods_pathogenic > 0;
        return out;
    });

    state.selected_residues = new Map();

    state.available_color_vars = ["RES", "secondary_structure", "has_pathogenic"];
    state.color_var = state.available_color_vars[0];

    state.available_num_vars = Object.keys(state.structure[0]).filter(k => k.includes("num"));
    state.num_var = state.available_num_vars[0];

    state.available_ribbon_color_vars = ["distance_ca"];
    state.ribbon_color_var = state.available_ribbon_color_vars[0];
    
    state.ordinal_var_maps = {};

    state.ordinal_var_maps["RES"] = new Map();
    state.structure.forEach(d => {
        if(!state.ordinal_var_maps["RES"].has(d.RES)){
            state.ordinal_var_maps["RES"].set(d.RES, {RES_name: d.RES_name, num: 1});
        }else{
            const res = state.ordinal_var_maps["RES"].get(d.RES);
            state.ordinal_var_maps["RES"].set(d.RES, {RES_name: res.RES_name, num: res.num + 1});
        }
    });

    state.ordinal_var_maps["secondary_structure"] = new Map();
    state.structure.forEach(d => {
        if(!state.ordinal_var_maps["secondary_structure"].has(d.secondary_structure)){
            state.ordinal_var_maps["secondary_structure"].set(d.secondary_structure, {num: 1});
        }else{
            const res = state.ordinal_var_maps["secondary_structure"].get(d.secondary_structure);
            state.ordinal_var_maps["secondary_structure"].set(d.secondary_structure, {num: res.num + 1});
        }
    });
    
    state.ordinal_var_maps["has_pathogenic"] = new Map();
    state.structure.forEach(d => {
        if(!state.ordinal_var_maps["has_pathogenic"].has(d.has_pathogenic)){
            state.ordinal_var_maps["has_pathogenic"].set(d.has_pathogenic, {num: 1});
        }else{
            const res = state.ordinal_var_maps["has_pathogenic"].get(d.has_pathogenic);
            state.ordinal_var_maps["has_pathogenic"].set(d.has_pathogenic, {num: res.num + 1});
        }
    });

    state.unique_modifications = new Map();
    state.modifications.forEach(d => {
        if(!state.unique_modifications.has(d.MOD)){
            state.unique_modifications.set(d.MOD, {num : 1});
        }else{
            const mod = state.unique_modifications.get(d.MOD);
            state.unique_modifications.set(d.MOD, {num : mod.num + 1});
        }
    });

    console.log(state);

}  

function update_config(){

    config.app_width = document.getElementById("app").offsetWidth;
    config.app_height = document.getElementById("app").offsetHeight;

    config.options_panel_width = document.getElementById("options-panel").offsetWidth;
    config.options_panel_height = document.getElementById("options-panel").offsetHeight;

    config.main_panel_width = document.getElementById("main-panel").offsetWidth;
    config.main_panel_height = document.getElementById("main-panel").offsetHeight;
    config.main_panel_square_size = Math.min(config.main_panel_width, config.main_panel_height);

    config.side_panel_width = document.getElementById("side-panel").offsetWidth;
    config.side_panel_height = document.getElementById("side-panel").offsetHeight;

    config.side_panel_top_width = document.getElementById("side-panel-top").offsetWidth;
    config.side_panel_top_height = document.getElementById("side-panel-top").offsetHeight;

    config.side_panel_bottom_width = document.getElementById("side-panel-bottom").offsetWidth;
    config.side_panel_bottom_height = document.getElementById("side-panel-bottom").offsetHeight;

    config.inspection_mode = document.getElementById("inspection-mode-select").value;
    config.main_panel_center_widget = document.getElementById("center-view-widget-select").value;

    config.neighborhood_restriction_type = document.getElementById("select-neighborhood-type").value;
    config.neighborhood_restriction_value = +document.getElementById("restriction-input").value;
    
    config.structure_vis = {};
    config.structure_vis.min_radius = 0.8 * config.main_panel_square_size/2;
    config.structure_vis.max_radius = 1 * config.main_panel_square_size/2;

    // Scales domains
    config.scale_color = d3.scaleOrdinal().domain(Array.from(state.ordinal_var_maps[state.color_var].keys()));
    config.scale_color_ribbons = d3.scaleSequential().domain([0, d3.max(state.neighbors, d => d[state.ribbon_color_var])]);
    config.scale_num = d3.scaleLinear().domain([0, d3.max(state.structure, d => d[state.num_var])]);
} 

/**
 * Options panel
 */

function configure_options(){

    // General 
    const select_inspection_mode = document.getElementById("inspection-mode-select").cloneNode(true);
    document.getElementById("inspection-mode-select").replaceWith(select_inspection_mode); // remove event listeners
    select_inspection_mode.addEventListener("change", function(){
        config.inspection_mode = select_inspection_mode.value;
        update_config();
        render_app();
    });

    const select_center_view = document.getElementById("center-view-widget-select").cloneNode(true);
    document.getElementById("center-view-widget-select").replaceWith(select_center_view); // remove event listeners
    select_center_view.addEventListener("change", function(){
        config.main_panel_center_widget = select_center_view.value;
        update_config();
        render_app();
    });

    // Encodings

    
    const select_arcs_color = document.getElementById("select-arcs-colors").cloneNode(true);
    document.getElementById("select-arcs-colors").replaceWith(select_arcs_color); // remove event listeners
    select_arcs_color.innerHTML = ""; // clean previous options
    state.available_color_vars.forEach(d => {
        const option = document.createElement("option")
        option.value = d;
        option.text = d;
        select_arcs_color.appendChild(option);
    });
    select_arcs_color.addEventListener("change", function(){
        state.color_var = select_arcs_color.value;
        update_config();
        render_app();
    });

    const select_arcs_height = document.getElementById("select-arcs-height").cloneNode(true);
    document.getElementById("select-arcs-height").replaceWith(select_arcs_height); // remove event listeners
    select_arcs_height.innerHTML = ""; // clean previous options    
    state.available_num_vars.forEach(d => {
        const option = document.createElement("option")
        option.value = d;
        option.text = d;
        select_arcs_height.appendChild(option);
    });
    select_arcs_height.addEventListener("change", function(){
        state.num_var = select_arcs_height.value;
        update_config();
        render_app();
    });

    const select_ribbon_color = document.getElementById("select-ribbon-colors").cloneNode(true);
    document.getElementById("select-ribbon-colors").replaceWith(select_ribbon_color); // remove event listeners
    select_ribbon_color.innerHTML = ""; // clean previous options    
    state.available_ribbon_color_vars.forEach(d => {
        const option = document.createElement("option")
        option.value = d;
        option.text = d;
        select_ribbon_color.appendChild(option);
    });
    select_ribbon_color.addEventListener("change", function(){
        state.ribbon_color_var = select_ribbon_color.value;
        update_config();
        render_app();
    });

    // Neighborhood definition

    const select_restriction_type = document.getElementById("select-neighborhood-type").cloneNode(true);
    document.getElementById("select-neighborhood-type").replaceWith(select_restriction_type.cloneNode(true));

    const restriction_input = document.getElementById("restriction-input").cloneNode(true);
    document.getElementById("restriction-input").replaceWith(restriction_input.cloneNode(true));

    function update_restriction_input_labels(){
        const div_labels = document.getElementById("restriction-input-labels");
        div_labels.innerHTML = `
            <span>${restriction_input.min}</span> \< 
            <span>${restriction_input.value}</span> \> 
            <span>${restriction_input.max}</span>  
        `;
    }
    
    function configure_neighborhood_restriction_input(restriction_type){         
        if(restriction_type === "knn"){
            restriction_input.min = 0;
            restriction_input.max = 30; // we know there are maximum 30 nn
            restriction_input.step = 1;
            restriction_input.value = restriction_input.max;
        }else if(restriction_type === "radius"){
            restriction_input.min = 0;
            restriction_input.max = d3.max(state.neighbors, d => d.distance_ca);
            restriction_input.step = restriction_input.max / parseInt(restriction_input.max);
            restriction_input.value = restriction_input.max;
        }        
        update_restriction_input_labels();
    }

    configure_neighborhood_restriction_input(select_restriction_type.value);

    select_restriction_type.addEventListener("change", function(){
        configure_neighborhood_restriction_input(select_restriction_type.value);
        update_config();
        render_app();
    });

    restriction_input.addEventListener("input", function(){
        update_restriction_input_labels();        
        update_config();
        render_app();
    });

    // Selection
    const button_clear_selection = document.getElementById("button-clear-selection").cloneNode(true);
    document.getElementById("button-clear-selection").replaceWith(button_clear_selection);

    button_clear_selection.addEventListener("click", function(){
        console.log("clear selection");
        state.selected_residues = new Map();
        render_app();
    });

}

/**
 * Main panel
 */

function render_main_panel(){
    primary_structure_orbit();
    render_main_pane_center();
}

function render_main_pane_center(){
    if(config.main_panel_center_widget === "graph-view"){
        center_graph_view();
    }else if(config.main_panel_center_widget === "chord-view"){
        center_chord_view();
    }
}

function primary_structure_orbit(){
    /**
     * Idiom: structure orbit
     * Permits an overview of the protein suitable for selecting 
     * nodes/residues for analysis.
     * The idiom is a (d3) chord layout, with the following available
     * encodings:
     * - Color of the arcs
     * - Length of the arcs
     * - Thickness of the arcs
     * - Color of the ribbons
     */

    // Data

    const structure = state.structure;
    const modifications = state.modifications;
    const neighbors = state.neighbors;

    const structure_map = new Map(); // pos -> info
    structure.forEach(d => structure_map.set(d.POS, d));

    const modifications_map = new Map(); // pos -> modifications
    Array.from(structure_map.keys()).forEach(k => modifications_map.set(k, []));
    modifications.forEach(d => modifications_map.get(d.POS).push(d));
    
    const neighbors_map = new Map(); // pos -> neighbors pos
    Array.from(structure_map.keys()).forEach(k => neighbors_map.set(k, []));
    neighbors.forEach(d => neighbors_map.get(d.POS_x).push({target: d.POS_y, link: d.distance_ca}));

    Array.from(neighbors_map.keys()).forEach(k => {
        let arr = neighbors_map.get(k);
        arr.sort((a, b) => d3.ascending(a.link, b.link));
        if(config.neighborhood_restriction_type === "knn"){
            neighbors_map.set(k, arr.slice(1, config.neighborhood_restriction_value));
        }else if(config.neighborhood_restriction_type === "radius"){
            arr = arr.filter(d => d.link <= config.neighborhood_restriction_value);
            neighbors_map.set(k, arr);
        }            
    });

    // Container setup

    const width = config.main_panel_width;
    const height = config.main_panel_height;
    const square_size = config.main_panel_square_size;

    let svg;
    if(d3.select("#main-panel").select("#structure-orbit").empty()){
        console.log("create svg");
        svg = d3.select("#main-panel").append("svg")
            .attr("id", "structure-orbit")
            .attr("style", "position: absolute; z-index: 1; top: 0; left: 0;")
    }else{
        svg = d3.select("#structure-orbit");        
        svg.selectAll("*").remove();   
    }
    svg.attr("width", width).attr("height", height);

    // Visualization parameters 

    const min_radius = config.structure_vis.min_radius;
    const max_radius = config.structure_vis.max_radius;
    const start_nn_arcs_radius = min_radius;
    const end_nn_arcs_radius = min_radius + 0.1 * (max_radius - min_radius);
    const start_res_arcs = end_nn_arcs_radius;
    const end_res_arcs = end_nn_arcs_radius + 0.9 * (max_radius - min_radius);;

    const scale_arcs_radius = config.scale_num.range([start_res_arcs + 5, end_res_arcs]);
    const scale_arcs_colors = config.scale_color;
    scale_arcs_colors.range(d3.schemeCategory10);
    const color_var = state.color_var;

    const num_pos = structure.length;
    let graph = new Array(num_pos);
    for (let i = 0; i < num_pos; i++) {
        graph[i] = new Array(num_pos);
        for (let j = 0; j < num_pos; j++) {
            graph[i][j] = 0;
        }
        neighbors_map.get(i).forEach(d => graph[i][d.target] = 1);
    }

    // state.neighbors.forEach(d => {
    //     graph[d.POS_x][d.POS_y] = 1;
    // });

    let chord_maker = d3.chord();
    let chord = chord_maker(graph);

    let arc_creator, ribbon_creator;

    let arcs_res = svg.append("g")
        .selectAll("g")
        .data(chord.groups)
        .join("g")
        .call(g => g.append("path"))
        .attr("transform", `translate(${width/2}, ${height/2})`)
        .select("path")
            .attr("d", d => {
                let res = structure_map.get(d.index);
                arc_creator = d3.arc().innerRadius(start_res_arcs).outerRadius(scale_arcs_radius(res.num_mods_total));
                return arc_creator(d);
            })
            .attr("fill", d => {
                let res = structure_map.get(d.index);                
                return scale_arcs_colors(res[color_var]);
            });

    let arcs_nn = svg.append("g")
        .selectAll("g")
        .data(chord.groups)
        .join("g")
        .call(g => g.append("path"))
        .attr("transform", `translate(${width/2}, ${height/2})`)
        .select("path")
            .attr("d", d => {
                arc_creator = d3.arc().innerRadius(min_radius).outerRadius(start_res_arcs);
                return arc_creator(d);
            })
            .attr("class", "unselected");


    function update_active_ribbons(){
        console.log(Array.from(state.selected_residues.values()));
        let selected_residues = Array.from(state.selected_residues.values());
        console.log(selected_residues);

        let active_ribbons = chord.filter(d => {
            let is_active = false;                        
            for (let i = 0; i < selected_residues.length; i++) {
                const element = selected_residues[i];
                if(element.POS === d.source.index){
                    is_active = true;
                    break;
                }                
            }
            return is_active;
        });
        console.log(active_ribbons);

        svg.append("g")
            .attr("class", "active-ribbons")
            .selectAll("g")
            .data(active_ribbons)
            .join("path")
                .attr("d", d => {
                    ribbon_creator = d3.ribbon().radius(min_radius).padAngle(0);//1/min_radius);
                    return ribbon_creator(d);
                })
                //.attr("fill", "blue")
                .attr("stroke", "rgba(255,0,0)")
                .attr("stroke-opacity", 1)
                .attr("transform", `translate(${width/2}, ${height/2})`);
        
    }


    arcs_nn.on("click", function(event, datum){
        let element = d3.select(this);
        let residue = structure_map.get(datum.index);

        if(state.selected_residues.has(residue.POS)){
            state.selected_residues.delete(residue.POS);
            element.attr("class", "unselected");
        }else{
            state.selected_residues.set(residue.POS, residue);
            element.attr("class", "selected");
        }

        //update_active_ribbons();
        render_main_pane_center();
    });


    arcs_nn.on("mouseover", function(event, datum){
        let element = d3.select(this);

        d3.select(this).classed("hovered", true);
        let chord_filtered = chord.filter(d => d.source.index === datum.index);        

        svg.append("g")
            .attr("class", "hover-ribbons")
            .selectAll("g")
            .data(chord_filtered)
            .join("path")
                .attr("d", d => {
                    ribbon_creator = d3.ribbon().radius(min_radius).padAngle(0);//1/min_radius);
                    return ribbon_creator(d);
                })
                //.attr("fill", "blue")
                .attr("stroke", "rgba(255,0,0)")
                .attr("stroke-opacity", 1)
                .attr("transform", `translate(${width/2}, ${height/2})`);

    });

    arcs_nn.on("mouseout", function(event, datum){
        let element = d3.select(this);

        d3.select(this).classed("hovered", false);

        d3.selectAll(".hover-ribbons").remove();
    });


}

function center_chord_view(){

    // Raw data
    const structure = state.structure;
    const modifications = state.modifications;
    const neighbors = state.neighbors;
    const selected_residues = state.selected_residues;
    
}


function center_graph_view(){

    // Raw data
    const structure = state.structure;
    const modifications = state.modifications;
    const neighbors = state.neighbors;
    const selected_residues = state.selected_residues;

    const container_node = document.getElementById("main-panel");
    const width = config.main_panel_width;
    const height = config.main_panel_height;
    let svg;
    if(d3.select(container_node).select("#center_graph_view").empty()){
        svg = d3.select(container_node)
            .append("svg")
                .attr("id", "center_graph_view")
                .attr("height", height)
                .attr("width", width)
                .style("style", "position: absolute; z-index: 2; top: 0; left: 0;");
    }else{
        svg = d3.select(container_node).select("#center_graph_view");
        svg.selectAll("*").remove();
    }
    

    const min_radius = config.structure_vis.min_radius; // this defines the boundary of the force simulation

    //svg.append("rect").attr("x", 0).attr("y", 0).attr("width", width).attr("height", height).attr("fill", "black");
    //svg.append("circle").attr("cx", width/2).attr("cy", height/2).attr("r", min_radius - 10).attr("fill", "gray");

    // Preparing data for simulation

    const nodes = Array.from(selected_residues.values());


    // Visualization parameters
    const radius = 10;


    // Force simulation

    const force_simulation = d3.forceSimulation(nodes);
    force_simulation
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter().strength(0.1))
        .force("collide", d3.forceCollide(radius));

    //force_simulation.stop();

    const nodes_group = svg.append("g").attr("id", "nodes_group").attr("transform", `translate(${width/2}, ${height/2})`);

    nodes_group.selectAll("circle")
        .data(nodes)
        .join("circle")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", radius)
            .attr("fill", "#03DAC5");

    force_simulation.on("tick", function(){
        console.log("ticked");
        d3.select("#nodes_group").selectAll("circle").data(nodes)
        .join("circle")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", 5)
            .attr("fill", "#03DAC5");
    });


}

/**
 * Side panel ()
 */

function render_side_panel(){
    console.log("[render_side_panel]");

    structure_3d_view();
    bulk_selection_view();

    if(false){
        //structure_analysis_side_panel(container_node);
    }else{
        //neighborhood_analysis_side_panel(container_node);
    }
}

function structure_3d_view(){

    const width = config.side_panel_top_width;
    const height = config.side_panel_top_height;

    const container = d3.select(document.getElementById("side-panel-top"));
    let canvas;
    if(container.select("#view-3d-canvas").empty()){
        canvas = container.append("canvas").attr("id", "view-3d-canvas");
    }else{
        canvas = container.select("#view-3d-canvas");
    }
    canvas.attr("width", width).attr("height", height);
    let canvas_node = canvas.node();

    let var_color = state.color_var;
    let scale_color = config.scale_color;
    
    let structure = state.structure;
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
    scene.background = new THREE.Color("#232323");
    let camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({"canvas": canvas_node});
    renderer.setSize(width, height);      
    
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
    edges_material.color = new THREE.Color("rgba(200,200,200,1)");

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

    const controls = new OrbitControls(camera, canvas_node);
    controls.enabled = true; //config.orbit_controls_enabled; 

    //camera.position.z = 5; 
    function animate(){
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }    
    animate(); 
    return controls;
}

function bulk_selection_view(){
    const width = config.side_panel_bottom_width;
    const height = config.side_panel_bottom_height;

    const container = d3.select(document.getElementById("side-panel-bottom"));
    let svg;
    if(container.select("#view-bulk-select-svg").empty()){
        svg = container.append("svg").attr("id", "view-bulk-select-svg");
    }else{
        svg = container.select("#view-bulk-select-svg");
        svg.selectAll("*").remove();
    }
    svg.attr("width", width).attr("height", height);

    let var_color = state.color_var;
    

    console.log(`Var: ${state.color_var}`);
    console.log(state.ordinal_var_maps[state.color_var]);

    let bars_data = Array.from(state.ordinal_var_maps[state.color_var].entries());
    let scale_position = d3.scaleBand().domain(bars_data.map(d => d[0])).range([0, height]);
    let scale_size = d3.scaleLinear().domain([0, d3.max(bars_data, d => d[1].num)]).range([0, width]);
    let scale_color = config.scale_color;//.domain(bars_data.map(d => d[0]));

    console.log(scale_color);
    let bars_group = svg.append("g").attr("id", "bulk-select-bars");
    let bars = bars_group.selectAll("rect")
        .data(bars_data)
        .join("rect")
            .attr("x", 0)
            .attr("y", d => scale_position(d[0]))
            .attr("width", d => scale_size(d[1].num))
            .attr("height", scale_position.bandwidth())
            .attr("fill", d => scale_color(d[0]));

    bars.on("mouseover", function(event, datum){
        let element = d3.select(this);
        element.classed("hovered", true);
    });

    bars.on("mouseout", function(event, datum){
        let element = d3.select(this);
        element.classed("hovered", false);
    });
}

function neighborhood_analysis_side_panel(container_node){
    console.log("[neighborhood_analysis_side_panel]");
    let width = config.side_panel_width;
    let height = config.side_panel_height;

    let canvas = d3.select(container_node).append("canvas").attr("width", width).attr("height", height).node();
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    let structure = state.structure;
    let neighbors = state.neighbors;
    let structure_map = new Map();
    structure.forEach(d => structure_map.set(d.POS, d));

    let scale_vertical = d3.scaleBand().domain(Array.from(structure_map.keys())).range([0, height + (3900 - height)]);
    let scale_horizontal = d3.scaleBand().domain((new Array(30)).fill(1).map((d, i) => i)).range([0, width - 10]);
    let scale_color = config.scale_color;

    // First column is the residue
    // Next columns correspond to the neighbors
    // Max number of neighbors define the blocks width, which should be mapped to container width
    
    let graph_map = new Map();
    scale_vertical.padding(0.5);
    scale_horizontal.padding(0.5);

    neighbors.forEach(d => {        
        if(!graph_map.has(d.POS_x)){
            graph_map.set(d.POS_x, 1);
        }else{
            graph_map.set(d.POS_x, graph_map.get(d.POS_x) + 1);
        }
        ctx.fillStyle = "white"; //scale_color(structure_map.get(d.));
        ctx.fillRect(scale_horizontal(graph_map.get(d.POS_x)), scale_vertical(d.POS_x), scale_horizontal.bandwidth(), scale_vertical.bandwidth());
    });


}

/**
 * Miscellanea
 */
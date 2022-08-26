import * as THREE from "three";
import {OrbitControls} from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js"

/**
 * Constants
 */

const COLOR_HOVER = "rgb(3, 218, 197)";
const COLOR_SELECT = "rgb(3, 218, 197)";

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

    update_data_maps();

}  

function update_data_maps(){
    state.structure_map = new Map(); // pos -> info
    state.structure.forEach(d => state.structure_map.set(d.POS, d));

    state.modifications_map = new Map(); // pos -> modifications
    Array.from(state.structure_map.keys()).forEach(k => state.modifications_map.set(k, []));
    state.modifications.forEach(d => state.modifications_map.get(d.POS).push(d));
    
    state.neighbors_map = new Map(); // pos -> neighbors pos
    Array.from(state.structure_map.keys()).forEach(k => state.neighbors_map.set(k, []));
    state.neighbors.forEach(d => state.neighbors_map.get(d.POS_x).push({POS: d.POS_y, value: d.distance_ca}));

    Array.from(state.neighbors_map.keys()).forEach(k => {
        let arr = state.neighbors_map.get(k);
        arr.sort((a, b) => d3.ascending(a.value, b.value));
        if(config.neighborhood_restriction_type === "knn"){
            state.neighbors_map.set(k, arr.slice(1, config.neighborhood_restriction_value));
        }else if(config.neighborhood_restriction_type === "radius"){
            arr = arr.filter(d => d.value <= config.neighborhood_restriction_value);
            state.neighbors_map.set(k, arr);
        }            
    });

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

    config.side_panel_bottom_width = document.getElementById("side-panel-bottom-vis").offsetWidth;
    config.side_panel_bottom_height = document.getElementById("side-panel-bottom-vis").offsetHeight;

    config.inspection_mode = document.getElementById("inspection-mode-select").value;

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
    document.getElementById("select-neighborhood-type").replaceWith(select_restriction_type);

    const restriction_input = document.getElementById("restriction-input").cloneNode(true);
    document.getElementById("restriction-input").replaceWith(restriction_input);

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
        update_data_maps();
        render_main_panel();
        //render_app();
    });

    restriction_input.addEventListener("input", function(){
        update_restriction_input_labels();        
        update_config();
        update_data_maps();
        render_main_panel();
        //render_app();
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

    const width = config.main_panel_width;
    const height = config.main_panel_height;

    let svg_residues, svg_neighborhoods;

    if(d3.select("#main-panel #svg-residues").empty()){
        svg_residues = d3.select("#main-panel").append("svg")
            .attr("id", "svg-residues")
            //.attr("style", "position: absolute; z-index: 1; top: 0; left: 0;")
    }else{
        svg_residues = d3.select("#svg-residues");        
        svg_residues.selectAll("*").remove();   
    }
    svg_residues
        .attr("width", width)
        .attr("height", height)
        .attr("style", "position: absolute; top: 0; left: 0;");;

    if(d3.select("#main-panel #svg-neighborhoods").empty()){
        svg_neighborhoods = d3.select("#main-panel").append("svg")
            .attr("id", "svg-neighborhoods")
            //.attr("style", "position: absolute; z-index: 1; top: 0; left: 0;")
    }else{
        svg_neighborhoods = d3.select("#svg-neighborhoods");        
        svg_neighborhoods.selectAll("*").remove();   
    }
    svg_neighborhoods
        .attr("width", width)
        .attr("height", height)
        .attr("style", "position: absolute; top: 0; left: 0;");

    if(config.inspection_mode === "residues"){
        console.log("Residues");
        svg_residues.attr("style", "z-index: 1;");
        svg_neighborhoods.attr("style", "z-index: 0;");
    }else if(config.inspection_mode === "neighborhoods"){
        console.log("Neighborhoods");
        svg_residues.attr("style", "z-index: 0;");
        svg_neighborhoods.attr("style", "z-index: 1;");
    }

    primary_structure_orbit();
    center_graph_view();
}

function primary_structure_orbit(){

    // Data
    const structure = state.structure;
    const structure_map = state.structure_map;
    const modifications_map = state.modifications_map;
    const neighbors_map = state.neighbors_map;

    // Container setup

    const width = config.main_panel_width;
    const height = config.main_panel_height;

    let svg = d3.select("#svg-residues");
    svg.selectAll("*").remove();

    // Visualization parameters 

    const min_radius = config.structure_vis.min_radius;
    const max_radius = config.structure_vis.max_radius;
    const max_arc_thickness = max_radius - min_radius;
    const fixed_arc_thickness_per = 0.07;
    const between_orbit_gap_per = 0.01;
    const num_orbit_thickness_per =  1 - (2 * fixed_arc_thickness_per + 2 * between_orbit_gap_per);

    const start_pos_arcs_radius = min_radius;
    const end_pos_arcs_radius = start_pos_arcs_radius + fixed_arc_thickness_per * max_arc_thickness;

    const start_type_arcs_radius = end_pos_arcs_radius + between_orbit_gap_per * max_arc_thickness;
    const end_type_arcs_radius = start_type_arcs_radius + fixed_arc_thickness_per * max_arc_thickness;

    const start_num_arcs_radius = end_type_arcs_radius + between_orbit_gap_per * max_arc_thickness;
    const end_num_arcs_radius = start_num_arcs_radius + num_orbit_thickness_per * max_arc_thickness;

    const color_var = state.color_var;
    const num_var = state.num_var;

    const scale_arcs_radius = config.scale_num.range([start_num_arcs_radius, end_num_arcs_radius]);
    const scale_arcs_colors = config.scale_color.range(d3.schemeCategory10);
    const scale_pos_color = d3.scaleSequential().domain(d3.extent(structure, d => +d.POS)).interpolator(d3.interpolateBlues);

    const num_pos = structure_map.size;
    let graph = new Array(num_pos);
    for (let i = 0; i < num_pos; i++) {
        graph[i] = new Array(num_pos);
        for (let j = 0; j < num_pos; j++) {
            graph[i][j] = 0;
        }
        neighbors_map.get(i).forEach(d => graph[i][d.POS] = 1);
    }

    let chord_maker = d3.chord();
    let chord = chord_maker(graph); 

    let arc_creator, ribbon_creator;

    let orbits_arcs = svg.append("g").attr("id", "orbit-arcs");

    let my_selection = orbits_arcs.selectAll("g").data(chord.groups).join("g");

    my_selection.append("g").attr("class", "pos-arcs").call(g => g.append("path"))
    .attr("transform", `translate(${width/2}, ${height/2})`)
    .select("path")
        .attr("d", d => {
            arc_creator = d3.arc().innerRadius(start_pos_arcs_radius).outerRadius(end_pos_arcs_radius);
            return arc_creator(d);
        })
        .attr("fill", d => {
            let res = structure_map.get(d.index);
            if(state.selected_residues.has(res.POS)){
                return COLOR_SELECT;
            }else{
                return scale_pos_color(res.POS);
            }
        });

    my_selection.append("g").attr("class", "type-arcs").call(g => g.append("path"))
    .attr("transform", `translate(${width/2}, ${height/2})`)
    .select("path")
        .attr("d", d => {
            arc_creator = d3.arc().innerRadius(start_type_arcs_radius).outerRadius(end_type_arcs_radius);
            return arc_creator(d);
        })
        .attr("fill", d => {
            let res = structure_map.get(d.index);
            if(state.selected_residues.has(res.POS)){
                return COLOR_SELECT;
            }else{
                return scale_arcs_colors(res[color_var]);
            }
        });

        my_selection.append("g").attr("class", "num-arcs").call(g => g.append("path"))
        .attr("transform", `translate(${width/2}, ${height/2})`)
        .select("path")
            .attr("d", d => {
                let res = structure_map.get(d.index);
                arc_creator = d3.arc().innerRadius(start_num_arcs_radius).outerRadius(scale_arcs_radius(res[num_var]));
                return arc_creator(d);
            })
            .attr("fill", d => {
                let res = structure_map.get(d.index);
                if(state.selected_residues.has(res.POS)){
                    return COLOR_SELECT;
                }else{
                    return scale_arcs_colors(res[color_var]);
                }                
            });

    my_selection.on("click", function(event, datum){
        let element = d3.select(this);
        let residue = structure_map.get(datum.index);        

        if(state.selected_residues.has(residue.POS)){
            state.selected_residues.delete(residue.POS);
        }else{
            state.selected_residues.set(residue.POS, residue);
            console.log(state.selected_residues);
        }

        primary_structure_orbit();
        center_graph_view();
    });

    my_selection.on("mouseover", function(event, datum){
        let element = d3.select(this);
        let res = structure_map.get(datum.index);

        let chord_filtered = chord.filter(d => d.source.index === datum.index);        

        console.log(datum.index);
        console.log(structure_map.get(datum.index));
        console.log(neighbors_map.get(datum.index));
        console.log(graph[datum.index]);
        console.log(chord);
        console.log(chord_filtered);

        element.classed("hovered", true);
        d3.select("#tooltip-pso").node().innerHTML = `
                    <div id="tooltip-inner">
                        <h3>${res.POS} - ${res.RES_name} (${res.RES})</h3>
                        <p>Color (${color_var}): 
                            <span style="display: inline-block; width: 0.8em; height: 0.8em; background: ${scale_arcs_colors(res[color_var])};"></span>
                        </p>                        
                        <p>Arc thickness (${num_var}): ${res[num_var]}</p>
                    </div>                    
        `;        

        svg.append("g")
            .attr("id", "hovering-circle")
            .append("circle")
            .attr("cx", width/2)
            .attr("cy", height/2)
            .attr("r", min_radius)
            .attr("fill", "gray")
            .attr("fill-opacity", 0.5);            

        svg.append("g")
            .attr("id", "hover-ribbons")
            .selectAll("g")
            .data(chord_filtered)
            .join("path")
                .attr("d", d => {
                    ribbon_creator = d3.ribbon().radius(min_radius).padAngle(0);
                    return ribbon_creator(d);
                })
                .attr("stroke", COLOR_HOVER)
                .attr("stroke-opacity", 1)
                .attr("transform", `translate(${width/2}, ${height/2})`);

    });

    my_selection.on("mouseout", function(event, datum){
        let element = d3.select(this);
        element.classed("hovered", false);

        d3.select("#tooltip-pso").node().innerHTML = "";

        svg.select("#hovering-circle").remove();            
        svg.selectAll("#hover-ribbons").remove();
    });


}

function center_graph_view(){

    // Data
    const structure = state.structure;
    const modifications = state.modifications;
    const neighbors = state.neighbors;
    const selected_residues = state.selected_residues;

    const structure_map = state.structure_map;
    const modifications_map = state.modifications_map;
    const neighbors_map = state.neighbors_map;

    const width = config.main_panel_width;
    const height = config.main_panel_height;

    let svg = d3.select("#svg-neighborhoods");
    svg.selectAll("*").remove();

    // State vars
    const color_var = state.color_var;  

    // Config vars
    const min_radius = config.structure_vis.min_radius; // this defines the boundary of the force simulation

    // Preparing data

    // - Per -selected- node modifications histogram
    let all_modifications_map = new Map();  // complete histogram of mods present in selected nodes
    let selected_modifications_map = new Map();  // per node mod presence

    // -- First we build the general histogram as all selected nodes should have all keys
    Array.from(selected_residues.keys()).forEach(d => { // for each selected residue
        let res_nns = neighbors_map.get(d);
        res_nns.forEach(e => { // for each neighbor
            if(modifications_map.has(e.POS)){  // Modification map has entries for the given residue
                let mods = modifications_map.get(e.POS);
                mods.forEach(f => {
                    if(!all_modifications_map.has(f.MOD)){
                        all_modifications_map.set(f.MOD, 1);
                    }else{
                        all_modifications_map.set(f.MOD, all_modifications_map.get(f.MOD) + 1);
                    }
                });            
            }
        });        
    });

    // -- Now we build the per node histogram
    Array.from(selected_residues.keys()).forEach(d => { // for each selected residue
        let res_nns = neighbors_map.get(d);
        let sel_map = new Map();  // per residue histogram 
        Array.from(all_modifications_map.keys()).forEach(f => sel_map.set(f, 0));    
        res_nns.forEach(e => { // for each neighbor
            if(modifications_map.has(e.POS)){  // Modification map has entries for the given residue
                let mods = modifications_map.get(e.POS);  // total histogram                                
                mods.forEach(f => sel_map.set(f.MOD, sel_map.get(f.MOD) + 1));                
            }
        });                
        selected_modifications_map.set(d, sel_map);
    });

    console.log(all_modifications_map);
    console.log(selected_modifications_map);

    // Preparing data for simulation 

    // -- Nodes (selected ones + those in their neighborhood)

    let primary_nodes = Array.from(selected_residues.values()).map(d => {return {id: d.POS, type: "primary"}});
    primary_nodes.forEach(d => {
        d.mods_hist = Array.from(selected_modifications_map.get(d.id).entries()).map(e => { return {MOD: e[0], value: e[1]}});
    });

    let links = [];
    primary_nodes.forEach(d => {
        let links_temp = neighbors_map.get(d.id);
        links = links.concat(links_temp.map(e => {return {source: d.id, target: e.POS, value: e.value}}));
    });
    let secondary_nodes = new Map();
    links.forEach(d => {
        if(!secondary_nodes.has(d.target) && !selected_residues.has(d.target)){
            secondary_nodes.set(d.target, {id: d.target, type: "secondary"});
        }
    });
    secondary_nodes = Array.from(secondary_nodes.values());

    const nodes = primary_nodes.concat(secondary_nodes);

    // Scales for per-selected-node histogram
    let scale_position_hist = d3.scaleBand().domain(Array.from(all_modifications_map.keys())).range([0, 2*Math.PI]);
    let scale_color_hist = d3.scaleOrdinal().domain(Array.from(all_modifications_map.keys())).range(d3.schemeCategory10);

    // Visualization parameters
    // - Main nodes and links
    const primary_node_config = {}
    primary_node_config.outer_radius = 20;
    primary_node_config.inner_radius = 10;
    primary_node_config.color_pathogenic = "#FF9AA2";
    primary_node_config.color_normal = "#E2F0CB";

    // - Secondary nodes and links
    const secondary_node_config = {}
    secondary_node_config.radius = 5;
    secondary_node_config.color = "rgb(80,80,80)";
    secondary_node_config.link_color = "rgb(130,130,130)";
    secondary_node_config.stroke_color = "rgb(130,130,130)"

    // Force simulation

    const force_link = d3.forceLink(links).id(d => d.id);
    const force_simulation = d3.forceSimulation(nodes)
        .force("center", d3.forceCenter().strength(1)) // ensures center of gravity is (0, 0)
        .force("collide", d3.forceCollide(d => d.type === "primary" ? primary_node_config.outer_radius : secondary_node_config.radius)) // prevents collisions of points
        .force("link", force_link)
        .force("charge", d3.forceManyBody().strength(d => -40))
        .force("position-x", d3.forceX())
        .force("position-y", d3.forceY());
        

    // setTimeout(function(){
    //     force_simulation.stop();
    // }, 1000);
    //force_simulation.stop();

    const link = svg.append("g")
        .attr("id", "links_group")
        .attr("transform", `translate(${width/2}, ${height/2})`)
        .attr("stroke", secondary_node_config.link_color)
        .attr("stroke-opacity", 1)
        .attr("stroke-width", 1)
            .selectAll("line")
            .data(links)
            .join("line");

    // Building primary nodes

    const node_primary = svg.append("g")
        .attr("id", "nodes_group_primary")
        .attr("transform", `translate(${width/2}, ${height/2})`);

    node_primary  
        .selectAll(".outer-circle")
        .data(nodes.filter(d => d.type === "primary"))
        .join("circle")
        .attr("class", "outer-circle");

    node_primary
        .selectAll(".inner-circle")
        .data(nodes.filter(d => d.type === "primary"))
        .join("circle")
        .attr("class", "inner-circle");

    node_primary
        .selectAll(".mods-hist")
        .data(nodes.filter(d => d.type === "primary"))
        .join("g")
        //.append("g")        
        .attr("class", "mods-hist")
        .selectAll("path")
        .data(function(d, i){ return d.mods_hist;})
        .join("path");
        //.append("circle")       

    node_primary
        .selectAll(".selection-circle")
        .data(nodes.filter(d => d.type === "primary"))
        .join("circle")
        .attr("class", "selection-circle");

    const node_secondary = svg.append("g")
        .attr("id", "nodes_group_secondary")
        .attr("transform", `translate(${width/2}, ${height/2})`)
        .selectAll("circle")
        .data(nodes.filter(d => d.type === "secondary"))
        .join("circle");

    force_simulation.on("tick", function(){
        console.log("ticked");

        d3.select("#links_group")
            .selectAll("line")
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

        // Update primary nodes

        d3.select("#nodes_group_primary")
            .selectAll(".outer-circle")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", primary_node_config.outer_radius)
                .attr("fill", "white")
                .attr("stroke", "black");

        d3.select("#nodes_group_primary")
            .selectAll(".inner-circle")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", primary_node_config.inner_radius)
                .attr("fill", d => structure_map.get(d.id).num_mods_pathogenic > 0 ? primary_node_config.color_pathogenic : primary_node_config.color_normal)
                .attr("stroke", "black")
                .attr("stroke-width", d => 1);

        let arc_creator = d3.arc();
        d3.select("#nodes_group_primary")
            .selectAll(".mods-hist")
            .attr("transform", d => `translate(${d.x} ${d.y})`)
            .selectAll("path")
            .attr("d", d => {
                let arc_params = {
                    innerRadius: primary_node_config.inner_radius,
                    outerRadius: primary_node_config.outer_radius,
                    startAngle: scale_position_hist(d.MOD),
                    endAngle: scale_position_hist(d.MOD) + scale_position_hist.bandwidth()
                }
                //arc_creator = d3.arc();

                return arc_creator(arc_params);
            })
            .attr("fill", d => {
                return d.value > 0 ? scale_color_hist(d.MOD) : "white"; 
            })
            .attr("stroke", "black");

        d3.select("#nodes_group_primary")
            .selectAll(".selection-circle")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", primary_node_config.outer_radius)
                .attr("fill-opacity", "0");

        d3.selectAll("#selection-circle").on("click", function(event, datum){
            const element = d3.select(this);
            console.log(datum);
            console.log(selected_modifications_map.get(datum.id));
        });

        // Update secondary nodes

        d3.select("#nodes_group_secondary")
            .selectAll("circle")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", secondary_node_config.radius)
                .attr("fill", secondary_node_config.color)
                .attr("stroke", secondary_node_config.stroke_color);
            
    });    

}

/**
 * Side panel ()
 */

function render_side_panel(){

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

    const structure = state.structure;
    let color_var = state.color_var;
    let bars_data = Array.from(state.ordinal_var_maps[color_var].entries());
    
    const width = config.side_panel_bottom_width;
    const height = config.side_panel_bottom_height;

    const container = d3.select(document.getElementById("side-panel-bottom-vis"));
    let svg;
    if(container.select("#view-bulk-select-svg").empty()){
        svg = container.append("svg").attr("id", "view-bulk-select-svg");
    }else{
        svg = container.select("#view-bulk-select-svg");
        svg.selectAll("*").remove();
    }
    svg.attr("width", width).attr("height", height);

    let bars_margin = {top: 10, right: 10, bottom: 40 , left: 0};
    let bars_height = height - bars_margin.top - bars_margin.bottom;    
    
    // Scales and axis
    let scale_position = d3.scaleBand().domain(bars_data.map(d => d[0])).range([0, bars_height]);    
    let scale_color = config.scale_color;//.domain(bars_data.map(d => d[0]));    

    let axis_left = svg.append("g")
        .attr("id", "bulk-select-axis")       
        .call(d3.axisLeft(scale_position))
        .attr("color", "white");        

    bars_margin.left = d3.select("#bulk-select-axis g").node().getBBox().width + 20;
    let bars_width = width - bars_margin.left - bars_margin.right;    
    axis_left.attr("transform", `translate(${bars_margin.left} ${bars_margin.top})`);

    let scale_size = d3.scaleLinear().domain([0, d3.max(bars_data, d => d[1].num)]).range([0, bars_width]);

    let axis_bottom = svg.append("g")
        .attr("id", "bulk-select-axis")       
        .call(d3.axisBottom(scale_size))
        .attr("color", "white");     

    axis_bottom.attr("transform", `translate(${bars_margin.left} ${bars_margin.top + bars_height})`);
    
    
    let bars_group = svg.append("g")
        .attr("id", "bulk-select-bars")
        .attr("transform", `translate(${bars_margin.left} ${bars_margin.top})`);

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

    bars.on("click", function(event, datum){
        let element = d3.select(this);
        element.classed("selected", true);
        structure.forEach(d => {
            if(d[color_var] === datum[0] && !state.selected_residues.has(d.POS)){
                state.selected_residues.set(d.POS, d);
            }
        });
        console.log(state.selected_residues);
        render_app();
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
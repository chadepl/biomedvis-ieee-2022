var nextCol = 1;
function genColor(){   
    var ret = [];
    if(nextCol < 16777215){ 
        ret.push(nextCol & 0xff); // R 
        ret.push((nextCol & 0xff00) >> 8); // G 
        ret.push((nextCol & 0xff0000) >> 16); // B
        nextCol += 1; 
    }
    var col = "rgb(" + ret.join(',') + ")";
    return col;
}

function plot_nns_graph(data, selected_nns, svg_node){
    /**
     * Plots selected neighborhoods in a 2D canvas
     * using a force-directed layout. This is the first 
     * step for comparing multiple neighborhoods deemed 
     * interesting in the heatmap.
     * The graph has two types of edges. 
     * Type 1: within neighborhood edges.
     * Type 2: between neighborhood edges. 
     */

    console.log(data);
    console.log(selected_nns);

    let nodes_map = data.nodes_map;
    let nn_map = data.nn_map;

    let svg = d3.select(svg_node);
    let width = svg.attr("width");
    let height = svg.attr("height");
    
    svg.attr("viewBox", [-width / 2, -height / 2, width, height]);

    let links = [{source: 0, target: 1, value: 10}];

    let nodes = selected_nns.map(d => {
        if(nodes_map.has(d)){
            return {pos: d, res: nodes_map.get(d).res};
        }
    });

    console.log(nodes);

    let force_node = d3.forceManyBody();
    let force_link = d3.forceLink(links);

    let simulation = d3.forceSimulation(nodes)
        .force("link", force_link)
        .force("charge", force_node)
        .force("center", d3.forceCenter())
        .on("tick", ticked);

    let link = svg.append("g")
        .attr("stroke", "white")
        .selectAll("line")
        .data(links)
        .join("line");

    let node = svg.append("g")
        .attr("fill", "red")
        .attr("stroke", "white")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
            .attr("r", 10);

    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
    
        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
        }

}

function plot_nns_heatmap(data, selected_nodes, canvas, width, height){
    /**
     * This function plots a heatmap for comparing neighborhoods
     * Spatial neighborhoods are defined by two parameters:
     * - The center of the neighborhood
     * - The extent of the neighborhood, which could be given by:
     *   - A ball of certain radius 
     *   - A prefixed number of elements to include
     * If a subset of centers is not supplied, all nodes (residues)
     *   are assumed to be centers
     * If an extent is not provided, neightborhoods are only assumed
     * to contain the selected node.
     */   

    let nodes_map = data.nodes_map;
    let nn_map = data.nn_map;

    let nn_data = [];
    for(let i = 0; i < selected_nodes.length; i++){
        for(let j = 0; j < selected_nodes.length; j++){
            if(i >= j){
                let s = nodes_map.get(selected_nodes[i]);
                let t = nodes_map.get(selected_nodes[j]);
                let s_nns = nn_map.get(selected_nodes[i]);
                let t_nns = nn_map.get(selected_nodes[j]);                
                let cell_data = {
                    pos_x: selected_nodes[i], // source neighborhood
                    pos_y: selected_nodes[j], // target neighborhood                    
                    // this is the place to compute neighborhood distance functions
                    dist_euc_centers: Math.sqrt((s.x - t.x)**2 + (s.y - t.y)**2 + (s.z - t.z)**2),
                    intersect_over_union_res: get_intersect_over_union("res", nodes_map, s_nns, t_nns)
                };                
                nn_data.push(cell_data);
            }            
        }
    } 

    // Visualization parameters and data    

    // Interaction
    let interaction_map = new Map();

    let interaction_canvas = d3.select(canvas)
        .append("canvas")
            .attr("id", "widget_nns_heatmap_interactivity")
            .attr("width", width)
            .attr("height", height)
            //.attr("style", "position: absolute; left: 0; top: 0; z-index: 1;");
            .attr("style", "display: none; position: absolute; left: 0; top: 0; z-index: 0;").node();

    // Heatmap data
    let ctx = canvas.getContext("2d");
    let interaction_ctx = interaction_canvas.getContext("2d");

    ctx.clearRect(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);

    // Preparing data to plot
    function get_intersect_over_union(feat, node_map, nns_1, nns_2){        

        let all_vals = new Set();
        let vals_1 = new Set();
        let vals_2 = new Set();

        let node; 
        nns_1.forEach(d => {
            node = node_map.get(d.target);
            all_vals.add(node[feat]); 
            vals_1.add(node[feat])
        });

        nns_2.forEach(d => {
            node = node_map.get(d.target);
            all_vals.add(node[feat]); 
            vals_2.add(node[feat])
        });

        let size_intersect = 0;
        vals_1.forEach(d => {            
            if(vals_2.has(d)){
                size_intersect += 1;
            }
        })

        return size_intersect/all_vals.size;
    }

    let feat_distance = ["intersect_over_union_res",][0];
    let extent_dists = d3.extent(nn_data, d => d[feat_distance]);

    // Scales
    let scale_x = d3.scaleBand().domain(selected_nodes).range([0, width]);
    let scale_y = d3.scaleBand().domain(selected_nodes).range([0, height]);
    let scale_color = d3.scaleSequential(extent_dists, t => d3.interpolateYlOrRd(1 - t));

    // Style 
    nn_data.forEach(d => {
        d.fillStyle = scale_color(d[feat_distance]);
        d.fillStyleInteraction = genColor();
    })    

    // Plotting
    nn_data.forEach(d => {
        ctx.fillStyle = d.fillStyle;
        ctx.fillRect(scale_x(d.pos_x), scale_y(d.pos_y), scale_x.bandwidth(), scale_y.bandwidth());
        ctx.strokeRect(scale_x(d.pos_x), scale_y(d.pos_y), scale_x.bandwidth(), scale_y.bandwidth());
        if(d.pos_x === d.pos_y){
            ctx.font = '24px sansserif';
            ctx.fillStyle = "black";        
            ctx.fillText(d.pos_y, scale_x(d.pos_x), scale_y(d.pos_y)+scale_y.bandwidth()*0.7, scale_x.bandwidth());
        }

        // Interaction
        interaction_map.set(d.fillStyleInteraction, d);
        interaction_ctx.fillStyle = d.fillStyleInteraction;
        interaction_ctx.fillRect(scale_x(d.pos_x), scale_y(d.pos_y), scale_x.bandwidth(), scale_y.bandwidth());
    });

    // Interactivity
    d3.select(canvas).on("mousemove", function(event){
        let [x, y] = d3.pointer(event);         
        let ic = interaction_ctx.getImageData(x, y, 1, 1).data;
        ic = "rgb("+ic[0]+","+ic[1]+","+ic[2]+")";
        let cell_data = interaction_map.get(ic);
        if(typeof cell_data !== "undefined"){
            let n_x = nn_map.get(cell_data.pos_x);
            let n_y = nn_map.get(cell_data.pos_y);
        }else{
            console.log("No interaction here");
        }        
        
    });

    d3.select(canvas).on("click", function(event){
        let [x, y] = d3.pointer(event);         
        let ic = interaction_ctx.getImageData(x, y, 1, 1).data;
        ic = "rgb("+ic[0]+","+ic[1]+","+ic[2]+")"
        let cell_data = interaction_map.get(ic);
        console.log(cell_data);
    });

}

function neighborhood_comparison_visualization(structure, modifications, nearest_neighbors){
    
    let data = {
        structure: structure,
        modifications: modifications,
        nearest_neighbors: nearest_neighbors
    }

    data.nodes_map = new Map();
    data.structure.forEach(d => data.nodes_map.set(d.POS, {
        x: d.x_coord_ca, 
        y: d.y_coord_ca, 
        z: d.z_coord_ca,
        res: d.RES,
        res_name: d.RES_name
    }));

    //let selected_nodes = [0, 10, 12, 33, 46, 55];
    let selected_nodes = Array.from(data.nodes_map.keys()).filter((d, i) => Math.random() > 0.95);

    //let extent = {type:"radius", value:20}
    let nn_extent = {type:"num_nodes", value:5} // TODO add menu for this
    
    function get_nn_map(nearest_neighbors_data, selected_nodes, nn_extent){
        let nn_map = new Map();
        nearest_neighbors_data.forEach(d => {
            if(selected_nodes.includes(d.POS_x)){
                if(nn_map.has(d.POS_x)){
                    let arr = nn_map.get(d.POS_x);
                    if(nn_extent.type === "ball_radius"){
                        if(d.distance_ca <= nn_extent.value){
                            arr.push({target: d.POS_y, edge_w: d.distance_ca})
                        }
                    }else if(nn_extent.type == "num_nns"){
                        if(arr.length - 1 < nn_extent.value){
                            arr.push({target: d.POS_y, edge_w: d.distance_ca})
                        }
                    }                                
                    nn_map.set(d.POS_x, arr); // maybe costly to repeat it when its not needed
                }else{
                    nn_map.set(d.POS_x, [{target: d.POS_y, edge_w: d.distance_ca}]);
                }
            }
        });
        return nn_map
    }

    data.nn_map = get_nn_map(data.nearest_neighbors, selected_nodes, nn_extent);  

    const width = 800;
    const height = 800;

    const str_vis_div = d3.select("#structure_visualization_widget");    

    str_vis_div.append("canvas")
        .attr("id", "widget_nns_heatmap")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "position: absolute; left: 0; top: 0; z-index: 2;");

    str_vis_div.append("svg")
        .attr("id", "widget_nns_graph")
        .attr("width", width/2)
        .attr("height", height/2)
        .attr("style", "position: absolute; left: 0; top: "+(height/2)+"px; z-index: 1;");    

    const canvas = document.getElementById("widget_nns_heatmap");
    const svg_nns_graph = document.getElementById("widget_nns_graph");    

    // TODO: mechanisms for selecting nodes. For instance all nodes with a certain mod

    function configure_extent_slider(extent_type){
        let slider_name = document.getElementById("extent_type_name");
        let slider = document.getElementById("extent_value");

        if(extent_type === "ball_radius"){
            console.log(slider_name);
            slider_name.innerHTML = "Ball radius: ";
            slider.min = 0;
            slider.max = 50;
            slider.value = 5;
        }else if(extent_type === "num_nns"){
            slider_name.innerHTML = "Num neighbors: ";
            slider.min = 0;
            slider.max = 30;
            slider.value = 10;
        }

        slider.oninput = function(){
            nn_extent = {type: extent_type, value: this.value};
            document.getElementById("extent_selected_value").innerHTML = this.value;
            data.nn_map = get_nn_map(data.nearest_neighbors, selected_nodes, nn_extent);  
            plot_nns_heatmap(data, selected_nodes, canvas, width, height);
            plot_nns_graph(data, selected_nodes, svg_nns_graph);
        }
        return 0;
    }

    let extent_radius = document.getElementsByName("extent_type");
    extent_radius.forEach(d => {
        d.onchange = function(){
            extent_radius.forEach(d => {
                if(d.checked){
                    configure_extent_slider(d.value);
                }
            });
        }
    })
    

    plot_nns_heatmap(data, selected_nodes, canvas, width, height);
    plot_nns_graph(data, selected_nodes, svg_nns_graph);
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
    const acc = ["P01137", "P04202", "P09651"][0]; // simulates the selection of a protein structure to visualize
    neighborhood_comparison_visualization(
        data[0].filter(d => d.UniAcc == acc), 
        data[1].filter(d => d.UniAcc == acc), 
        data[2].filter(d => d.UniAcc == acc));
});
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

function plot_2d_heatmap_canvas(data, selected_nodes, nn_extent, canvas, interaction_canvas, width, height){
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
    console.log(data);     

    let nodes_map = data.nodes_map;

    // Visualization parameters and data    

    let nn_map = new Map();
    data.nearest_neighbors.forEach(d => {
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

    console.log(nodes_map);
    console.log(nn_map);    

    // Interaction helpers
    let interaction_map = new Map();

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

    console.log(nn_data);

    let feat_distance = ["intersect_over_union_res",][0];
    let extent_dists = d3.extent(nn_data, d => d[feat_distance]);
    console.log(extent_dists);

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
            ctx.fillText(d.pos_x, scale_x(d.pos_x), scale_y(d.pos_y)+scale_y.bandwidth()*0.7, scale_x.bandwidth());
        }

        // Interaction
        interaction_map.set(d.fillStyleInteraction, d);
        interaction_ctx.fillStyle = d.fillStyleInteraction;
        interaction_ctx.fillRect(scale_x(d.pos_x), scale_y(d.pos_y), scale_x.bandwidth(), scale_y.bandwidth());
    });


    console.log(interaction_map);

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

    const width = 800;
    const height = 800;

    const str_vis_div = d3.select("#structure_visualization_widget");

    str_vis_div.append("canvas")
        .attr("id", "layer_2d_canvas_interactivity")
        .attr("width", width)
        .attr("height", height)
        //.attr("style", "position: absolute; left: 0; top: 0; z-index: 1;");
        .attr("style", "display: none; position: absolute; left: 0; top: 0; z-index: 0;");

    str_vis_div.append("canvas")
        .attr("id", "layer_2d_canvas")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "position: absolute; left: 0; top: 0; z-index: 2;");

    str_vis_div.append("canvas")
        .attr("id", "layer_2d_canvas_nn_comparison")
        .attr("width", width/2)
        .attr("height", height/2)
        .attr("style", "position: absolute; left: 0; top: "+(height/2)+"px; z-index: 1;");    

    const canvas = document.getElementById("layer_2d_canvas");
    const canvas_interactivity = document.getElementById("layer_2d_canvas_interactivity");
    const canvas_nn_analyzer = document.getElementById("layer_2d_canvas_nn_comparison");

    const ctx_nn_analyzer = canvas_nn_analyzer.getContext("2d");
    ctx_nn_analyzer.fillStyle = "black";
    ctx_nn_analyzer.fillRect(0,0,width/2,height/2);

    // TODO: mechanisms for selecting nodes. For instance all nodes with a certain mod

    //let selected_nodes = [0, 10, 12, 33, 46, 55];
    let selected_nodes = Array.from(data.nodes_map.keys()).filter((d, i) => Math.random() > 0.95);

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
            console.log(nn_extent);
            plot_2d_heatmap_canvas(data, selected_nodes, nn_extent, canvas, canvas_interactivity, width, height);
        }
        return 0;
    }

    //let extent = {type:"radius", value:20}
    let nn_extent = {type:"num_nodes", value:5} // TODO add menu for this    
    

    let extent_radios = document.getElementsByName("extent_type");
    extent_radios.forEach(d => {
        d.onchange = function(){
            extent_radios.forEach(d => {
                if(d.checked){
                    configure_extent_slider(d.value);
                }
            });
        }
    })
    
    

    

    plot_2d_heatmap_canvas(data, selected_nodes, nn_extent, canvas, canvas_interactivity, width, height);
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
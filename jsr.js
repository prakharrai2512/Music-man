async function load(){
    const model = await tf.loadLayersModel('localstorage://./my_model');
}

load();
console.log("Friday hai bc");
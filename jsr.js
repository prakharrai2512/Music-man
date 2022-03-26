var char2en={
    '\n' : 0,
    ' ' : 1 ,
    '!' : 2 ,
    '"' : 3 ,
    '#' : 4 ,
    '\'' : 5 ,
    '(' : 6 ,
    ')' : 7 ,
    ',' : 8 ,
    '-' : 9 ,
    '.' : 10 ,
    '/' : 11 ,
    '0' : 12 ,
    '1' : 13 ,
    '2' : 14 ,
    '3' : 15 ,
    '4' : 16 ,
    '5' : 17 ,
    '6' : 18 ,
    '7' : 19 ,
    '8' : 20 ,
    '9' : 21 ,
    ':' : 22 ,
    '<' : 23 ,
    '=' : 24 ,
    '>' : 25 ,
    'A' : 26 ,
    'B' : 27 ,
    'C' : 28 ,
    'D' : 29 ,
    'E' : 30 ,
    'F' : 31 ,
    'G' : 32 ,
    'H' : 33 ,
    'I' : 34 ,
    'J' : 35 ,
    'K' : 36 ,
    'L' : 37 ,
    'M' : 38 ,
    'N' : 39 ,
    'O' : 40 ,
    'P' : 41 ,
    'Q' : 42 ,
    'R' : 43 ,
    'S' : 44 ,
    'T' : 45 ,
    'U' : 46 ,
    'V' : 47 ,
    'W' : 48 ,
    'X' : 49 ,
    'Y' : 50 ,
    'Z' : 51 ,
    '[' : 52 ,
    ']' : 53 ,
    '^' : 54 ,
    '_' : 55 ,
    'a' : 56 ,
    'b' : 57 ,
    'c' : 58 ,
    'd' : 59 ,
    'e' : 60 ,
    'f' : 61 ,
    'g' : 62 ,
    'h' : 63 ,
    'i' : 64 ,
    'j' : 65 ,
    'k' : 66 ,
    'l' : 67 ,
    'm' : 68 ,
    'n' : 69 ,
    'o' : 70 ,
    'p' : 71 ,
    'q' : 72 ,
    'r' : 73 ,
    's' : 74 ,
    't' : 75 ,
    'u' : 76 ,
    'v' : 77 ,
    'w' : 78 ,
    'x' : 79 ,
    'y' : 80 ,
    'z': 81 ,
    '|': 82 
};

async function predicter(output){
    var model_path='https://raw.githubusercontent.com/prakharrai2512/Music-man/master/jsrmodel/model.json';
    const model = await tf.loadLayersModel(model_path,Strict=false);
    var x = await model.predict(output);
    return x;
}

async function load(){
    var model_path='https://raw.githubusercontent.com/prakharrai2512/Music-man/master/jsrmodel/model.json';
    let model = await tf.loadLayersModel(model_path,Strict=false);
    return model;
}

let model=load();
console.log("Friday hai bc");

async function tatake(){
    var input = document.getElementById("reader").value;
    var output=[]
    for(let i=0;i<input.length;i++){
        output.push(char2en[input[i]]);
    }
    //
    /*const predicted = (data)=>{
        model.predict(tf.tensor(output,[1,1]));
        return prediction.data
    }*/
    //predicted.then(res=>console.log(res));
    //prediction = model.tehn(tf.tensor(output,[1,1]));
    //var prediction = model.predict(tf.tensor(output,[1,1]));;
    model.then(function (res) {
        const prediction = res.predict(tf.tensor(output,[1,1]));
        console.log(tf.squeeze(prediction));
    }, function (err) {
        console.log(err);
    });
    //console.log(prediction);
}

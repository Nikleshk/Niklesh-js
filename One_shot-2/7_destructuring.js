const objects={x:3,y:4,z:5}

// var a = objects.x;
// var b =objects.y;
// var c =objects.z;

const {x:a,y:b,z:c} = objects;
console.log(a,b,c);


//Complex problems using destructuring

const temperatures={
    today:100,
    tmrw:80
}

function getTempOfTmrw(){
    const {tmrw:temperatureoftommorrow}=temperatures;
    return temperatureoftommorrow
}
console.log(getTempOfTmrw(temperatures));

//Destructuring in nested objects

const weather = {
    today:{min:80,max:100},
    tmorw:{min:85,max:110}
}
function getMaxTmrw(){
    const {tmorw:{max:maximumOfTmrw}}=weather;
    return maximumOfTmrw;
}
console.log((getMaxTmrw(weather)))

// Destructuring in arrays
const [x,y,,z] = [1,2,3,4,5];
console.log(x,y,z);

let w=6,e=10;
[w,e]=[e,w];
console.log(w,e);


//Examples

const exs=[1,2,3,4,5];
function twoRemoving(){
    const [,,...arrays]=exs;
    return arrays;
}
console.log(twoRemoving(exs));

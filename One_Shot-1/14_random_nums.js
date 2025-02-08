function randomNum(){
    return Math.random();
}
console.log(randomNum());

//Random num between 1 and 10

function numFrom1To10(){
    return Math.floor(Math.random()*10);
}
console.log(numFrom1To10());


//Random number from 5 t0 15

function numBetween5And15(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(numBetween5And15(5,15));

//random num btwn 1 and 10


var numfrom1to10 = 1;

console.log(Math.floor(Math.random()*10));
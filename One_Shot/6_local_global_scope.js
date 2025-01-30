var  myGlobal = 10;
function fun1(){
    oopsGlobal = 15;
}
function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined" ){
        output+= "myGlobal: " + myGlobal ;
    }
    if(typeof oopsGlobal != "undefined"){
        output+= " oopsGlobal:" + oopsGlobal ;
    }
    console.log(output);
}
fun1()
fun2()


//Local and global scope functions
function lcal(){
    var myVar = "animal";
    console.log(myVar);
    
}
lcal();


var aWord = "shirt";
function calling(){
    var aWord = 10;
    return aWord;
}
console.log(calling());
console.log(aWord);


// returning a value from a function
function minusNum(b){
   return b-3;
}
console.log(minusNum(8));
 function fiveTimes(num){
    return num*5;
 }
 console.log(fiveTimes(6));
 

// Undefined value returned from a function
var sum = 0;
function addThree(){
    sum = sum + 3;
}


//Assignment with a returned value
var changed = 0;
function change(num){
    return (num + 5) / 3;
} 

changed  = change(4);
console.log(changed);


var processed = 0;

function processArg(num){
    return (num+3)/5;
}
processed = processArg(7);
console.log(processed);

//example
var storing = 0;
function memory(x){
    return x*5;
}
storing = memory(5);
console.log(storing);

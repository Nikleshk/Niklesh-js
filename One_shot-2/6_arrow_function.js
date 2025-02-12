var magic = function(){
    return new Date();
}
console.log(magic());

//the above code can be written as
var magic=()=> new Date();
console.log(magic());

//Arrow function with two parameters
 
var arrays = function(arr1,arr2){
    return arr1.concat(arr2);
}
console.log(arrays([1,2],[3,4,5]));


// The Above Program Can Be Written As

var arrays = (arr1,arr2)=>arr1.concat(arr2);
console.log(arrays([1,2],[4,5]));



//complex problems using arrow functions

const anArray = [1,5,76,-4,1.5,34.5];

const squaredNums= (arr)=>{
    const squaredInts = arr.filter(num => Number.isInteger(num) && num>0).map(x=>x*x);
    return squaredInts;
}
const squaredInts = squaredNums(anArray);

console.log(squaredInts);


//Increment function
function incrementNums(num,value){
   return num+value;
}
console.log(incrementNums(5,2));

//Rest operator
//const args= [1,2,3,4,5];
function adding(...args){
    return args.reduce((a,b)=>a+b,0);
    
    }
console.log(adding(1,2,4,7));

//Spread operator

let Array = ["JAN","FEB",3,"APRIL"];
let array2 =[...Array];
array2[2]=1;
console.log(...Array);


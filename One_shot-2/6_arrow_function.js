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

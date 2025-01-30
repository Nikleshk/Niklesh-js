function args(arr,item){
  arr.push(item);
  return arr.shift();
}
var newArr = [1,2,3,4,5];
console.log("Before:" +JSON.stringify(newArr));
console.log(args(newArr,6));
console.log("After:" +JSON.stringify(newArr));

// Example
function arguments(arr,item){
    arr.push(item);
   return arr.shift();
}
var theArray = [1,2,3,4,5];
console.log("Before: " +JSON.stringify(theArray));
console.log(arguments(theArray,6));
console.log("After: " +JSON.stringify(theArray));



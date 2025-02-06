var array=[];
var i=0;
while(i<5){
    array.push(i);
     i++;    
}
console.log(array);
console.log(array.length);

//For loop /////
var nums =[]
for(i=0;i<5;i++){
    nums.push(i)
}
console.log(nums);

//Odd numbers

var oddNums =[];
for(i=1;i<10;i+=2){
    oddNums.push(i);
}
console.log(oddNums);

//Even numbers//
var evenNums=[];
for(i=0;i<=10;i+=2){
    evenNums.push(i)
}
console.log(evenNums);

// going backwards

var nums=[];
for(i=10;i>1;i-=2){
    nums.push(i)
}
console.log(nums);

//Adding elements in a array through loops
var anArray=[1,2,3,4,5];
var total=0;
for(i=0;i<anArray.length;i++){
    total += anArray[i];
}
console.log(total);


//Multiplying all the elements in an array

function multiplyAll(arr){
    var product=1;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4,5],[6,7]]);

console.log(product);

//Do while loops

var array=[];
var i=10;

do{
    array.push(i);
    i++;
}while(i<5)
console.log(i,array);


var anArray  = [ 'a boy' , 19 ]
console.log(anArray);

// Nested Array
var nestedexample = [ "computer","laptop" ]
var nestedArray = [[ "acer", 12 ], ["asus", 11], ["acer", "asus", "hp",123,456]]
console.log(nestedArray[2]);
console.log(nestedexample);


var nest = [[12,122,111],[121,11,67],[[34],[23]],[[89],[99],[999]]]
console.log(nest[3][1]);
var nests = [[12,122,111],[121,11,67],[[34],[23]],[[89],[99],[999]]]
var nestElement = nests[3][0];
console.log(nestElement);



// updating an array
var array = [12,23,214];
array[0] = 1;
console.log(array);
 

// pushing into an array

 var pushing = [12,1222,143]
 pushing.push(123333);
 console.log(pushing);
 
// popping'

 var popping = [12,2123,32];
 popping.pop()
 console.log(popping);
  

//shift function

 var shifting = [ "arr",9,"sniper"]
 shifting.shift();
 console.log(shifting);
 

//unshifting
 var unshifting = ["superman", "batman","spiderman"]
 unshifting.shift();
 unshifting.unshift("spiderman");
 console.log(unshifting);
 

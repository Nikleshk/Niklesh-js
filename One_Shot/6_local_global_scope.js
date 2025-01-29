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



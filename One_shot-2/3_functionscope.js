function checkScope(){
    "use strict";
    if(true){
        var i = "block scope"
        console.log( " block scope",i);
    }
    console.log("function scope",i)
    return i ;
} 
checkScope();
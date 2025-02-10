function checkScope(){
    "use strict";
    var
    if(true){
        let i = "block scope"
        console.log( " block scope",i);
    }
    console.log("function scope",i)
    return i ;
} 
checkScope();
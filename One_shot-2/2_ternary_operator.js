function checkEqual(a,b){
    if(a===b){
        return "true";
        
    }else {
    return "false";
}
}
console.log(checkEqual(1,1));

//Example 

function checkEqual2(a,b){
    return a === b ? true : false;
}
console.log(checkEqual2(1,2));

//check sign 

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkSign(0));

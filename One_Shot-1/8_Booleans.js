function trueOrfalse(isItTrue){
    if(isItTrue){
        return "Yes , it is True";
    }
    return "No, it is False"
}
console.log(trueOrfalse(false));

//True or False using operators

function valueChecking(value){
    if(value==10){
        return "YES, it is equal value";
    }
    return "NO,it is not equal value";
}
 console.log(valueChecking('10'));


//Stict equality operator
function strictChecking(value){
    if(value===10){
        return "Equal";
    }
    return "Not Equal";
}
console.log(strictChecking('10'));

//Example using two numbers
function comparing(a,b){
    if(a===b){
        return "Yes,they are equal";
    }
    return "No,they are not equal";
}
console.log(comparing(10,"10"));


//Checking using inequality operator
function checkNotEqual(value){
    if(value !=10){
        return "It Is Not Equal";
    }
    return "It Is Equal";
}
console.log(checkNotEqual('10'));

//Checking using strict inequality operator

function strictNotEqual(value){
    if(value !==10){
        return "It is not Equal";
    }
    return "It is equal";
}
console.log(strictNotEqual(10));


//Comparing with Logical operator

function greater(value){
    if(value>100){
        return "Greater than 100";
    }
    if(value>10){
        return "Greater than 10 and less than 100";
    }
    return "Less than 10"
}
console.log(greater(5));

//Example using both operators

function greaterOrEqual(value){
    if(value>=100){
        return "value is greater than or equal to 100";
    }
    if(value>=10){
        return "value is greater than or equal to 10";
    }
    return "Less than 10"
}
console.log(greaterOrEqual(1111));


//Example using less than operator
function lessOrEqual(value){
    if(value<=10){
        return "value is less than or equal to 10";
    }
    if(value<=100){
        return "value is less than or equal to 100";
    }
    return "value is greater than 100";
}
console.log(lessOrEqual(-1));

//AND operator

function lessOrGreater(value){
    if(value<=50 && value>=25){
        return "Value is in 25 to 50";
    }
    return "xplicit value";
}
console.log(lessOrGreater(500));

//OR operator

function usingOrOperator(value){
    if(value<10 || value>20){
        return "value is from outside";
    }
    return "value is from inside";
}
console.log(usingOrOperator(156));


//Boolean return
function isLess(x,y){
    return x<y;
}
console.log(isLess(10,15));

function ifElse(value){
    if(value<10){
        return "Value is less than 10";
    }
    else if(value<50){
        return "value is less than 50";
    }
    else{
        return "value is greater than 50";
    }
}
console.log(ifElse(5));

//Example using if else chain

function testSize(value){
    if(value<10){
        return "ones place";
    }
    else if(value<100){
        return "tens place";
    }
    else if(value<1000){
        return "100's place";
    }
    else if(value<10000){
        return "1000's place";
    }
    else {
        return "Huge Number";
    }
}
console.log(testSize(23657798278634567832));

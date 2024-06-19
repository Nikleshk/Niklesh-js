function sayMyName(){
console.log("N");
console.log("I");
console.log("K");
}
//sayMyName()


function  addTwoNumbers(number1,number2){
        console.log(number1+number2)
}
addTwoNumbers(3,4)
// function addTwoNumbers(number1 , number2){

//     let result = number1 + number2
//     return result

// }
// const result = addTwoNumbers(3,4)
// console.log("result:",result)


function shoppingCart(val1,val2,...num1){
    return num1
}
console.log(shoppingCart(400,500,1000,2000))

const user ={
    Username :"Nik",
    price:500
}
 
function handleObject(anyObject){
    console.log(`Username is ${anyObject.Username} and the price is ${anyObject.price}`)

}
handleObject(user)

const myArray = [100,200,300,400];

function getSecondValue(secondnum){
    return secondnum[1]
}
console.log(getSecondValue(myArray));
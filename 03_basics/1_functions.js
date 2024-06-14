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

function loginUser(username){
    if(username===undefined){
        console.log("enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUser("Nik"))
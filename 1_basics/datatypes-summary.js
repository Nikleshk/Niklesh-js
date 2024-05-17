// primitive 

// 7 types:Number, Boolean ,  Symbol , String , BigInt, Null , Undefined
const score=100
const scoreValue=1000.8

const isLoggedIn=false
const isArrived=true



let userEmail;

const id = Symbol('123')
const courseId=Symbol('123')

console.log( id === courseId );

//const bigNumber=1231143217842n

// Reference (Non primitive)

//Arrays,Objects,Functions

const heros=["shaktimaan","Naagraj","Powerman"];

let hisObj = {
    name:"hitesh",
    age:'20',
}

const myFunction =function(){
    console.log("hello world");
}
console.log(typeof heros);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack and heap memory
//Stack memory fetches the most recent or updated ..
let myYoutubeName = "nikleshk800@gmail.com"
let anotherYoutubeName=myYoutubeName
anotherYoutubeName="nk@gmail.com"

console.log(myYoutubeName);
console.log(anotherYoutubeName);

//heap memory is a whole memory while stack is a step by step memory

let myObj = {
    id:"nikleshk800@gmail.com",
    course:"csm"
}

let ourObj=myObj
ourObj.id="nk@gmail.com"
console.log(ourObj.id);
console.log(myObj.id);
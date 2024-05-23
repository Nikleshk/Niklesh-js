//singleton
//object laterals
//object.create

const mySym = Symbol("key1")
const jsUser = {
    name:"Niklesh",
    [mySym] :"key1",
    email:"nikleshk800@gmail.com",
    isLoggedIn :false

}
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// console.log(jsUser["name"]);
// console.log(typeof mySym);


jsUser.email="niklesh@gogle.com"
//Object.freeze(jsUser)
jsUser.email="nik@gmail.com"
//console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello jsUser")
}
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello jsUser,${this.name} your email is ${this.email}`)
}
console.log(jsUser.greetingTwo())
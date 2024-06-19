const user = {
    username :"Niklesh",
    price : 222,
    welcomeMessage : function(){
        //console.log(`${this.username}, this is the interface`);
    }
}
// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "niklesh"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//      let username = "niklesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
     let username = "niklesh"
    console.log(this.username);
}
// chai()


// const addTwo =(num1,num2)=>{
//     return num1+num2
// }
// const addTwo =(num1,num2)=>num1+num2
// const addTwo =(num1,num2)=>(num1+num2)
const addTwo =(num1,num2)=>({username:"niklesh"})
console.log(addTwo(3,4));
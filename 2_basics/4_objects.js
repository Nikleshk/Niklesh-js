//const tinderUser = new object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "niklesh"
tinderUser.isLoggedIn = "false"
 //console.log(tinderUser);
//  console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


 const regularUser = {
    fullName :{
        firstName:"niklesh",
        secondName:"kumar"

    }
 }
 //console.log(regularUser.fullName.firstName);


 const id1 = {1:"a",2:"b"}
 const id2 = {3:"c",4:"d"}
 const id4 = {5:"e",6:"f"}
 //const id3 = {id1,id2}
 const id3 = Object.assign({},id1,id2,id4)
 //console.log(id3);
 const id6 = {...id1,...id2,...id4}
 //console.log(id6);

 const course = {
    courseName : "eng",
    courseInstructor:"Niklesh",
    courseFees:'333'

 }
 const {courseInstructor:ins} = course
 console.log(ins);
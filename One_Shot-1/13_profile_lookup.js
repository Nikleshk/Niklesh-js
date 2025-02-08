var contact=[{
    "firstName":"Niklesh",
    "lastName":"kumar",
    "likes":["cricket","Dancing"],
    "hobbies":["cricket","dancing"]
},{
    "firstName":"Neeraj",
    "lastName":"Kumar",
    "likes":"food",
    "hobbies":"eating"
},{
    "firstName":"Rohith",
    "lastName":"Kumar",
    "likes":["cricket","songs"],
    "hobbies":"cricket"
},{
    "firstName":"Chris",
    "lastName":"Hemsworth",
    "likes":"acting",
    "hobbies":"hitting"
}]
function profileLookUp(name,prop){
    for(var i =0;i<contact.length;i++){
        if(contact[i].firstName===name){
            return contact[i][prop]||"no such property";
        }
    }
    return "no such contact";
}
var data = profileLookUp("Chris","hobbies");
console.log(data);
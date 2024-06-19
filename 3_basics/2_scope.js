let a =11;
const b =13;
if(true){
    let a = 4;
    const b= 45;
    var c = 66;
    //console.log("inner output:",b);
}

// console.log(a)
// console.log(b);
// console.log(c);

function one() {
    const username = "Niklesh"
    function two(){
        name = "Nik"
        id = 55
        console.log(username);
    }
    
    two()
    console.log(name);
}
one()


if (true){
    username = "niklesh"
    if(username === "niklesh"){
        const mail = " youtube"
        console.log(username + mail);
    }
}


////++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++/////


console.log(addOne(6)); 
function addOne(num){
    return num + 1
}

// console.log(addTwo(5))
const adding=function addTwo(num){
   //console.log(addTwo(5))
    return num +1
}

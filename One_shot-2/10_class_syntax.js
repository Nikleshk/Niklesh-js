var aPlanet=function(likedPlanet){
    this.likedPlanet=likedPlanet;
}
var that =new aPlanet('Jupiter');
console.log(that.likedPlanet);
//The Above code Can Be Written As 

class planetShowing{
    constructor(targetPlanet){
        this.targetPlanet=targetPlanet;
    }
}
var ans = new planetShowing('Mars');
console.log(ans.targetPlanet);


//Complex example

function makeClass(){
    class vegetables{
        constructor(name){
            this.name=name;
        }
    }
    return vegetables;
}
const vegetables=makeClass();
const carrot = new vegetables('carrot');
console.log(carrot.name);

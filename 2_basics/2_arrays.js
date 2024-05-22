const marvel = ["IronMan","Hulk","Thor"]
const dcm = [ "Batman","Superman","Darkseid"]
//const total = marvel.concat(dcm)
const total = [...marvel,...dcm]
//console.log(marvel.concat(dcm));
//console.log(total);


const cars = ["ford","dodge","ferrari",["koeniggseg","bugatti","pagani"],"tata"]
//console.log(cars.flat(2)); 

console.log(Array.isArray("Niklesh"));
console.log(Array.from("Niklesh"));
console.log(Array.from({name:"Niklesh"}))


let score1 = 122
let score2 = 233
let score3 = 232
console.log(Array.of(score1,score2,score3))
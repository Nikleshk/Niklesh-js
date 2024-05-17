const name="niklesh"
const id="6611"

console.log(`${name} ${id}`);

console.log(`my name is ${name} and my id is ${id}`);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const gameName='pubgmobile'

console.log(gameName.charAt(2))
console.log(gameName.indexOf('g'));
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.__proto__);
console.log(gameName.substring(0,7));
console.log(gameName.slice(-10,4));
const anotherString=gameName.slice(-10, 10);
console.log(anotherString);


const url='https://niklesh.com/niklesh%14kumar'
console.log(url.replace('%14','_'));

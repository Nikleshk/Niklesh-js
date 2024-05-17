//date

let myDate = new Date();
//console.log(myDate);
//console.log(myDate.toLocaleString());
//console.log(myDate.toDateString());

//let myCreatedDate = new Date(2002,01,12);
//let myCreatedDate = new Date(2002,9,31,5,30);
let myCreatedDate = new Date("2001,2,2");
//let myCreatedDate = new Date("1-1-1")
//console.log(myCreatedDate.toDateString());

///////////////////////////++++++++++++++++++++++////////////////////////////////
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log((newDate.getMonth())+1);
console.log(newDate.getDate());
console.log(`today is ${newDate.getDate()} and month is ${newDate.getMonth()} and the time now is ${newDate.getTime()}`);

newDate.toLocaleString('default',{
    weekday: "long",

}
)

)
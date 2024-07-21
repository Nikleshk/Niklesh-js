//for

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element ==5) {
        //console.log("5 is the required num");
        
    }
    //console.log(element);
}

for (let j = 0; j < 10; j++) {
    //console.log(`outer loop value is ${j}`);
    for (let i = 1; i < 10; i++) {
       // console.log(`inner loop value is ${i}`);
        //console.log(j + '*' + i+ '=' +j*i);
    };
}
let myArray =["shaktimaan","batman","superman"];
for (let index = 0; index <=myArray.length; index++) {
    //const element = myArray[index];
   // console.log(element);
    
}

/////Break And Continue

// for (let index = 1; index <=10; index++) {
//     if (index==5) {
//         console.log( `value 5 is detected`);
//         break;
//     }
//     console.log(`required value is ${index}`);
    
// }


for (let index = 1; index <=10; index++) {
    if (index==5) {
        console.log( `value 5 is detected`);
        continue;
    }
    console.log(`required value is ${index}`);
    
}
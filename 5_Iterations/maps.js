const map = new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('NY',"NewYork")
//console.log(map);

// for (const key in map) {
// console.log(key);
//     }


// for (const key of map) {
//     console.log(key);
    
// }

// for (const [key ,value] of map) {
//     console.log(key, ':-', value);
    
// }
//maps are not iteratable i.e they don't give output in forin,forof loop


const programming=["JS","CPP","PYTHON"]
for (const key in programming) {
    console.log(programming[key]);
    
    }

const languages ={ JS:"javascript",
    CPP:"cplusplus"
}
for (const key in languages) {
   
    //console.log(`${key} is for ${languages[key]}`);
    }




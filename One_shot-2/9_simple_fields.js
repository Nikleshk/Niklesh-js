const details=(name,age,weight) =>{
   return{ name:name,
    age:age,
    weight:weight
}
};
console.log(details('Niklesh',22,55));
//Above code can written as 
const detail=(name,age,weight) =>({name,age,weight})


console.log(detail('Niklesh',22,55));

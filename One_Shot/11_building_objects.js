var myHouse={
    "rooms":6,
    "floors":2,
    "type":"duplex",
    "amenities":['elevator']
};
console.log(myHouse.type);
console.log(myHouse);
var valueOfHouse= myHouse.rooms;
console.log(valueOfHouse);


var dog ={
    "name":"tommy",
    "age":10,
    "weight":25
};
dog.name="rocky";

dog.height=165;

dog['breed']="rottweiler";

delete dog.age;

console.log(dog);

//Objects for lookup

function phoneticLookUp(value){
    var result = "";
    var lookUp={
        "rank1":"Thor",
        "rank2":"Scarlet Witch",
        "rank3":"Hulk",
        "rank4":"Captain",
        "rank5":"Loki"
    }
    result = lookUp[value];
    return result;
}
console.log(phoneticLookUp("rank2"));


var Objects={
    rank:"heath",
    type:"ledger",
    height:22
}
function checkType(checkprop){
    if(Objects.hasOwnProperty(checkprop)){
        return Objects[checkprop];
    }
    else{
        return "not found";
    }
}
console.log(checkType("rank"));


var alphabets=[{
    a:"sh",
    b:"sh"
},
{
    c:"sdh",
    d:"sdhf"
}
];
console.log(alphabets[0].a);

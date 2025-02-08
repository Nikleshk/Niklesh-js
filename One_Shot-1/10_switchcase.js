function switchCase(value){
    var result = "";
    switch(value){
        case 1:
            result = "alpha";
            break;
        case 2 :
            result = "beta";
            break;
        case 3:
            result = "gamma";
            break;
        case 4 :
            result = "delta";
            break;       
    }
    return result;

}
console.log(switchCase(1));

//Example using avengers
function avengersByRank(rank){
    var avenger ="";
    switch(rank){
        case 1 :
            avenger="Thor";
            break;
        case 2:
            avenger="Hulk";
            break;
        case 3:
            avenger="Scarlet Witch";
            break;
        case 4 :
            avenger="captain";
            break; 
            default:
                avenger="unknown "       
    }
    return avenger;
}
console.log(avengersByRank(3));

//returning boolean
function isLess(a,b){
    return a<b;
}
console.log(isLess(10,19));


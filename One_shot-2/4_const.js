function primary(str){
    const SENTENCE = str + " is best";
    for(let i = 0;i<str.length;i+=2){
        console.log(SENTENCE);
    }
}
primary("FreeCodeCamp")  

//example

const s = [2,3,4];
function editInPlace(){
    s[0]=1;
    s[1]=2;
    s[2]=3;
}
editInPlace();
console.log(s);


//

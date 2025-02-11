function primary(str){
    const SENTENCE = str + " is best";
    for(let i = 0;i<str.length;i+=2){
        console.log(SENTENCE);
    }
}
primary("FreeCodeCamp")  
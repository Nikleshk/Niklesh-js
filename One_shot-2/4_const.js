function primary(str){
    var sentence = str + " is best";
    sentence = str + " is awesome";
    for(var i =0;i<str.length;i+=2){
        console.log(sentence);
        
    }
}
primary("JavaScript")
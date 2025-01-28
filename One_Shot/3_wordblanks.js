function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result = "";
    result += "the" + myAdjective + myNoun +  myVerb + " within the given time"  + myAdverb+  ""
    return result ;
}
console.log(wordBlanks(" course", " big", " completed", " fastly"));



function wordBlanks(myAdjective,myNoun,myVerb,myAdverb){
    var courses = '';
    courses += "the" + " " + myAdjective + " " + myNoun + " " + " course has been" + " " + myVerb + " " + myAdverb + "";
    return courses ;
}
console.log(wordBlanks("hard","js","coded","Succesfully"));

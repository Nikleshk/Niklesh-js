//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

(function one(){
    console.log(`IAM IRON MAN`)
})();


((name)=>{
    console.log(`IAM BATMAN ${name}`)
})('BRUCE BANNER');
// you can't execute two IIFE functions in one program without using semi colon's
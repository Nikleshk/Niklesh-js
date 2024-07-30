const coding=["js","cpp","py","c","java"]
// coding.forEach(function (val){
//     console.log(val);
// })


//coding.forEach((item)=>(console.log(item)))

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)



coding.forEach((item,index,Array)=>{
    console.log(item,index,Array);
}
)



const myCoding=[
    {
        languagename:"Java",
        languageFileName:"js"
    },
     {
        languagename:"python",
        languageFileName:"python"
    },
     {
        languagename:"cpp",
        languageFileName:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languagename);
})

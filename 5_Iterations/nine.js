const nums=[1,2,3]

// const myValues = nums.reduce(function(acc,currval){
//     console.log(`accumulator:${acc} current values${currval}`);
//     return acc+currval
// },2)

const myValues=nums.reduce((acc,currval)=>acc+currval,2)
console.log(myValues);

const courseInfo = [
    {
        courseName:'JS',
        coursePrice:1000,
    },
    {
        courseName:'python',
        coursePrice:1200,
    },
    {
        courseName:'c',
        coursePrice:500,
        },
]

const Price=courseInfo.reduce((acc,item)=>acc+item.coursePrice,0)
console.log(Price);
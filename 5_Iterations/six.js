const coding=["js","cpp","py","c","java"]

const myValues = coding.forEach(
    (item)=>{
    //console.log(item);
    })
//console.log(myValues);


const numValues = [ 1,2,3,4,5,6,7,8,9,10]
//const nums= numValues.filter((nums)=> nums>4)
const nums= numValues.filter((nums)=> {
    return nums>4})
//console.log(nums);

const books = [
    {
        title: 'AFTER', genre:'DRAMA', published: 1990,
    },
    {
        title: 'MYFAULT', genre: 'ROMANCE', published:1991,
    },
    { 
        title: '364DAYS', genre: 'HORROR', published:1995,
    }
]
const info = books.filter((bk)=>bk.genre==='DRAMA')
console.log(info);
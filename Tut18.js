const lang = ["cpp" , "java" , "python "]



const value = lang.forEach(element => {
    console.log(element);
    return element
    
});
console.log(value);
// for each doesnt return any value 


const myNums = [1,2,3,4,5,6,7,8,9]


// const newNums =  myNums.filter((nums)=>{
//      return nums > 4 
// })
const newNums =  myNums.filter((nums)=>(
    nums > 4 
))

console.log(newNums)



const newMyNum =   myNums.map((ele)=>{
return ele*2
})


console.log(newMyNum);


// chaining in js 

const nayaMapFunc = myNums.map((ele) => {
    return ele*10
}).map((ele)=>{
return ele+1
})

console.log(nayaMapFunc);



// reduce  in js 

const array1 = [1,2,3,4]

const initialValue = 0;

const reduceMethod = array1.reduce((acc , curr)=>{
    console.log(`the value of before return statement of acc is ${acc} and the value of curr is ${curr}`);
return acc + curr

}, initialValue);


console.log(reduceMethod);

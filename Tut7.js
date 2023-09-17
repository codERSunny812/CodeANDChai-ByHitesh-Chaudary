// memories in javascript

// There are two type of memory:
// stack  memory (primitive)
// heap memory (non primitive) 
  

let str = "heyimsunny"
let strCpy  = str
console.log(strCpy)
strCpy="value updated "
console.log(str);
console.log(strCpy);


let obj = {
    name:"sunny",
    age:21,
    hobbies:"coding"
}

let newObj = obj
console.log(newObj);

newObj.hobbies="football"


console.log(newObj);
console.log(obj);
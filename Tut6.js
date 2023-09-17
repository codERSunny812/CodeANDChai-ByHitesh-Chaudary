// Data Type summary 

/*
type of data type 

1. primitive data type

ex- string  , number , null , undefined , boolean , symbol , bigInt


2. non primitive  data type (refrence type )
example - Objects , array, function 

*/


// example of  primitive data type 

const user = 100;
console.log(user);
const scoreValue = 99.4
console.log(scoreValue);
const isLoggedIn = true
console.log(isLoggedIn);
const temp = null
console.log(temp);
let userEmail = undefined
console.log(userEmail);
const id  = Symbol('123')
const id1 = Symbol('123')
console.log(id == id1);

// example of non primitive data type

const arr = ["sunny" ,"shivashish" , "anu" , "shivu"]

console.log(arr);
console.log(typeof arr);

let data = {
    name:"sunny",
    age:22,
    hobbies:"football"
}
console.log(data);
console.log(typeof data);

function data1(){
    console.log("heyyy ");
}
console.log(data1);
console.log(typeof data1);

// type of every non primitive data type is object  adn return type of function is funciton object
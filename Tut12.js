// Object in js 

// singleton
// its a part of construtor

// creation of object 
//  using object litrals 
const user = {
    name:" sunny  ",
    age:22,
    hobbies:["travelling " , "coding " , "football"],
    location:"Ayodhya",
    email:"sunny@gmail.com",
    isLoggedIn:false, 
    "gender":"male"

}

console.log(user);

// acessing of the  object element 

console.log(user.email);
console.log(user["email"]);

// you can't use the dot to acess the object always coz if your key in also oa string then  you have to use the bracket method to acess  the object 

console.log(user["gender"]);

// Interview question 
// take a symbol and add it as the key of any object 

const newSym = Symbol("key1");

const obj = {
    name:"sunny",
    age:12,
    [newSym]:"mykey1"
}
console.log(obj[newSym]);
console.log(obj);
// changing the value of the obj
obj.name="sunny pandey ";
console.log(obj);

// if you want to freeze the object then you can use the freeze function , here freeze mean you cant edit the object anymore 

// Object.freeze(obj);

// now adding funcition to the object 

obj.greet = function(){
    console.log(" hey its a new function added in the object ");
}

console.log(obj);
console.log(obj.greet);
console.log(obj.greet());

 
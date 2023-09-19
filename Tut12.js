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

// lecture 2 on object


const tinderUser = new Object(); 
//the diffrence between this  and the next term is teh first term is a singleton object where as the second term is non sihsd
console.log(tinderUser);  
const tinder = {}
console.log(tinder);  

const regularUser  = {
    email:"senegrsunny448@gmail.com",
    fullName:{
        userFullName:{
            firstName:"sunnny",
            lastName:"pandey"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName.userFullName.firstName);


// combination of  object 
const obj1 = {num1:1,num2:2}
console.log(obj1);
const obj2 = {num3:3,num4:4}
console.log(obj2);
const obj3 = Object.assign(obj1,obj2)
const obj4 = Object.assign({},obj1,obj2) 
// the {} parameter is an optional object and its tells that the resuly should come   in this
console.log(obj3);
console.log(obj4);

const obj5 = { ...obj1 , ...obj2 };
console.log(obj5);


// some useful method of object 
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty('name')); //its used to check whether  the given property  is present in the object or not
 


// last video notes  of   the object part 3 video
console.log("Object destructring ");
// The destructuring assignment  in  JavaScript makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const course = {
    courseName:"js ",
    price:990,
    courseInstructor:"hitesh chaudary"

}

const {courseName,price,courseInstructor} =  course;
console.log("the course name is " + courseName);
console.log("the course price is " + courseInstructor);
console.log("the course intructor  is " + price);


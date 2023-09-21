// scope in js 
/*
there are two type of scope present in js 
1. global scope 
2. function/block scoped
*/
//  curly braces is the scope

// let and const are block scoped variable

let a = 23
const b = 12
var c = 112

console.log(a);
console.log(b);
console.log(c);

// you can acess to all the variables becoz all  are  present in global scope.


{
    let a = 12;
    const b = 13;
    var c = 14;
}

// but now if you  try to access the variable a and b then you will get an error becoz  both are block varible but the value of c is chaged 

console.log(a);
console.log(b);
console.log(c);



 

// more about scope and hoisting

 function one(){
    const userName = "sunny"
    function two(){
        const age = 21
        console.log("the name is " + userName);
    }
    // console.log(age); --> block scope 
    two()
 }
 one()




//  ***********Intresting ************************

// javascript variable are very powerful they can store anything like json data , value , fucnction 

function addOne(value){
    return value+1
}

console.log(addOne(2));


// there is one more method to declare the js function which is known as function expressionadn the diffrence between both the two is you can call the fucntion before initilize it but you cant do this in the function expression and if you do you will get an error  

const addTwo = function(value){
    return value+2
}

console.log(addTwo(7));



// arrow funciton 

// came in es6 2015




 // this keywoprd - it refer to the current context

// example fo the this object

const User = {
    UserName:"sunny",
    price:999,
    welcomeMessage: function(){
  console.log(` hey my name is ${this.UserName} and the price of the item is ${this.price}`);
    }
}

User.welcomeMessage()
User.UserName="sushil"
User.welcomeMessage()


console.log(this); //noting will print  on the output display 

function chai(){
    let name = "sunny pandey "
    console.log(this);

    // if you try to acess the name through the keyword this then nothing will print , here is the example

    console.log(this.name); //output : undefined
}
chai()



console.log(" now lets know about arrow fumnciton ");

// you cant use the this keyword in the arrow function 

const newFunction = () => {
console.log(this);
}

newFunction()


// implicit return in the arrow fucntion 

console.log("implicit return in js ");


const newArrowFunction = (a,b) => a+b 


//its used when we have only 1 statement in the return

// if you are writing curly braces in your program then its compulsoury to  write the return keyword but if in case you are writing the parenthesis then its not compulsoury to write the return statement 


console.log(newArrowFunction(5,3))


// in case of object we must use the curley braces 

const objArrowFunction = () => {
    return {
        userName:"me"
    }
}

console.log(objArrowFunction());


// diffrence between the arrow function and normal function 
/*
1. arrow function doesn't  have its own this.
2. regular function are callable since they can be call using new keyword but the arrow function cant be called using  the new keyword.

*/

//iife 

// An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop.
//IIFEs prevent pollution of the global JS scope.

console.log("immediately invoked function expression ");


(function iife(){
    console.log("hello ");
})()


// two type of iife named and unnamed iife just like regular function and anonymus function 

 


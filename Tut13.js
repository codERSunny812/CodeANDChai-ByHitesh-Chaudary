// function in js

function sayMyName(){
    console.log("sunny");
}

sayMyName// funciton refrence 
sayMyName() //function call 

function addTwoNumber(num1,num2){ //parameter
    console.log(num1+num2);
}

addTwoNumber(1,2); //argument


// return in a function

function addThreeNumber (num1,num2,num3){
    return num1+num2+num3
}


const result = addThreeNumber(1,2,3)

console.log(result);



// part 2 funciton

// rest and spread operator 

// both are same but the usecsase is diffrent

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,4000));


const obj = {
    user:"sunny",
    price:1009
}

function handleObject(anyObj){
console.log(`the username is ${anyObj.user} and the price of the product is ${anyObj.price}`);

}

handleObject(obj);


// function that return the 2 value of an array 

const arr  = [1,2,4,7]

function getArrayValue(arr){

    console.log(arr[2]);
} 

getArrayValue(arr)

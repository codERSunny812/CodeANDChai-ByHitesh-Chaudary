// Control flow in the js 

// 1. if statement 
let condition= false;
if(condition ){
    //run only if condition is true 
    console.log(" the condition is true and if block is executed");
}
else{
    console.log("the if block is not executed that's why the else block is executed ");
}

let balance = 1000;
if(balance<500){
    console.log("your balance is lower than 500");
}
else if(balance>500){
    console.log(" your balance  is higher than 500");
}
else if(balance <1200){
    console.log("your balance is less than 1200");
}
else if(balance == 1000){
    console.log(" you have a balance of 1000");
}
else{
    console.log(" good luck ");
}


console.log(" now lets know about the switch case");


let number = 3;

switch (number) {
    case 1:
        console.log("sunday ");
        break;
    case 2:
        console.log("sunday ");
        break;
    case 3:
        console.log("sunday ");
        break; 
    case 4:
        console.log("sunday ");
        break;
    case 5:
        console.log("sunday ");
        break;
    case 6:
        console.log("sunday ");
        break;                

    default:
        console.log(" no match found ");
        break;
}


//**** * truthy and falsy value ********
/*
 falsy value 
 false , 0 , -0 , BigInt , null , undefined , Nan 

 truthy value (exceptional cases)
 "0" , 'false' , " " , [] , {} , function(){}

*/


// Nullish coalescing operator (?? ) : null undefined 

let val1; 
val1 = 5 ?? 10; //mainly  used in the database problem 
console.log(val1);


// ternary operator 

// condition ? true : false
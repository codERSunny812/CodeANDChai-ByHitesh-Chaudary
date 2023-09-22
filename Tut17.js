// Loops in js 
// 1. for loop

for (let index = 0; index <=10; index++) {
    console.log(index);
}


// 2. while loop 
console.log("while loop ");
let  num = 10;
let digit = 0;
while(num--){
    console.log(digit);
    digit++;
}


// 3. do while loop 

console.log(" do while loop ");
let digit2 = 0;
do {
    console.log(digit2);
    digit2+=2;
} while (digit2<10);




// Higher Order Loops 
console.log(" highher order function ");

const arr = ["sunny " , "shivam " , "shivashihsh" , "manas"]

console.log(" for of loop");
for (const ele of arr) {
    console.log(ele);
}

console.log(" for each loop");
arr.forEach(element => {
    console.log(element);
});

console.log(" for in loop ");
for (const key in arr) {
    console.log(key);
    //it will print the key of the array

    // ******array also have key but its key is always numeric that why object came in picture *****
}


// map 
// its   is just like the hashmap in the java collection framwork 

console.log("map in js ");

const map = new Map();
map.set("name1" , "sunny")
map.set("name2", "shivashish")
map.set("name3" , "shivam")

console.log( typeof map)
console.log(map);

for (const ele of map) {
 console.log(ele);  //this will print every element as an aray   
}

for (const  [key , value] of map ) {
    console.log(key , "-" , value);
}


// how to apply for of loop in an object 

// for (const  [key , value] of map ) {
//     console.log(key , "-" , value);
// } --> this syntax will not work in  in case of object 





const lang = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by java "

}

for (const key in lang) {
    // console.log(key);
    //by this we get the value  of  the key 

    // now for getting both the value of key and value we use this 
   
    console.log(`${key} - ${lang[key]}`);
        
    
}






 



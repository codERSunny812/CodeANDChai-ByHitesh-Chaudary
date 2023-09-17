// all about strings 

// The String is an object which is use to create or modify the sequence of character

// creation of string using string literals 
const name = "sunny"
const gitUserName = "codersunny812"
const repoCount = 64

console.log("Hey myself " + name + " and my githubUser name is " + gitUserName + " and i have almost " + repoCount + " repositries on my github account ")

//but this  is the oldway of string now a days we are using something else

console.log(` Hello my name is ${name} and my github username is ${gitUserName} and i have a total of ${repoCount} repositries on my github account `);


// creation of string using the string constructor
const newNameGet = new String("  sunny  ")

console.log(newNameGet);
console.log(newNameGet.startsWith('q'));

console.log(newNameGet.charCodeAt(3));


// error in this negative 
console.log(newNameGet.slice(-1,0));

console.log(newNameGet.trim());

let newStrCpy = "my-name-is-sunny"


console.log( newStrCpy.split('-'));

const a = "c";
const b = "b";
// it compare the ascii value 
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}


// type conversion

// Type conversion can either be implicit (automatically done during code execution or explicit (done by you the developer.

// Implicit Type Conversion is also known (and more commonly referred to) as Coercion while Explicit Type Conversion is also known as Type Casting. 


// String coercion 








// arrays in js 

const arr = [1,2,3,4,5,8]
// or 
const fruits = new Array("Apple", "Banana");

console.log(arr);

//acessing the array element 
console.log(arr[1]);

console.log(arr.join("-"));

const arr2 = [1,"sunny" , 2, "shivam"]
console.log(arr2);

// array method
console.log("array method in js");
arr.push(99)
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(29);
console.log(arr);
arr.shift(12)
console.log(arr);


console.log(arr.includes(12));
console.log(arr2.fill(0)); //[0,0,0,0,]

const newArr  = arr.join();
console.log(newArr);
console.log(typeof newArr);

console.log("Important array method");
let array  = [1,2,3,4,5,6,7,8,9]
console.log(array);
const newArray1 = array.slice(0 ,5)
console.log(newArray1)
console.log(array)
const newArray2 = array.splice(0,5)
console.log(newArray2)
console.log(array)

// The main diffrence between the splice and slice is they both are used to extract the info from the array but the slice array return a piece of the array but it doesnt affect the original array but in case of splice the original array get affected 


// now lets know about the combination of the 2 array 

const marvelArray = ["thor" , "ironman" , "captionAmerica" , "spiddy"]

const dcArray  = ["greenLantern " , "superman" , "flash" , "batman"];

// marvelArray.push(dcArray)

// console.log(marvelArray);

// The array will not get merged it add array in the array 

// console.log(marvelArray[4][0])


// you can also use the concat method which return  the new array 

const newArrayOfAllHero = marvelArray.concat(dcArray);

console.log(newArrayOfAllHero);


console.log(" spread operator in array ");

const newArrayOfAllHero2 = [...marvelArray,...dcArray];
console.log(newArrayOfAllHero2);


const nestedArray  = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]];


const solOfNestedArray = nestedArray.flat(Infinity);

console.log(solOfNestedArray);

const nayaArr = [1,2,3,4];


 const nawaArr = nayaArr.flatMap((ele)=>[ele,ele*2]);
 console.log(nayaArr);
 console.log(nawaArr);




// now the array() constructor create new array object

// Array() can be called with or without new. Both create a new Array instance.

console.log(Array.isArray("sunnny"));

console.log(Array.from("sunny")); //it will convert it into array 


console.log(Array.from({name:"sunny"})); //intresting case because you have to give atleast one argument form which you have to make an array. like  key or value 


let score1=100
let score2 = 200
let score3 = 300

// console.log(Array.from(score1,score2,score3)); this will not work on this case 

console.log(Array.of(score1,score2,score3));

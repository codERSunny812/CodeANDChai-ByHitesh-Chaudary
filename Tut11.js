// arrays in js 

const arr = [1,2,3,4,5,8]
console.log(arr);
//acessing the array element 

console.log(arr[1]);

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
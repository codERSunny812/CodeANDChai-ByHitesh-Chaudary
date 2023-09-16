// DataType conversion 

let data = 33
let data1 = "33"

console.log(typeof data);
console.log(typeof data1);

console.log("now lets type cast these values");

let NUmber = Number(data1)
console.log(typeof NUmber)

console.log(" sometime the typecaseted value is not a number ");

// sometime you got any variable which is not a pure number but you still type casted it into number , it became the number type but when you try to acess  its value then it will give us nan (not a number) . here is the example




let value = "23an"
let data11 = Number(value)
console.log(typeof (data11));
console.log(data11);

console.log(" some other type conversion ");

let val = null
let dat = Number(val)
console.log(typeof (dat));
console.log(dat); 


let va = true
let da = Number(va)
console.log(typeof (da));
console.log(da);



let sub = "23an"
let dub = Number(sub)
console.log(typeof (dub));
console.log(dub);
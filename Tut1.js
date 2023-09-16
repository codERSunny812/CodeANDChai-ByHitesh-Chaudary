const accountId =1245
let accountEmail = "sengersunny@gmail.com  " 
var accountPassword = "124"
accountCity = "Ayodhya" //bad way of declaring the variable 

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.log("Now Lets changed the variables");
accountEmail= "sushilpandey@gmail.com"
accountCity= "faizabad"
accountPassword="none"



console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountEmail,accountId,accountPassword]);


// prefer no to use var because of block scope only use let and const
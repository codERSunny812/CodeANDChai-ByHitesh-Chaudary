// Date in javascript
 

 let date = new Date();
 console.log(Date); //[Function: Date]
 console.log(date);  //2023-09-18T05:04:02.356Z 

 console.log(date.getTime());  //1695013442356
 console.log(date.toTimeString());  //10:34:02 GMT+0530 (India Standard Time)

 console.log(date.toString()); //Mon Sep 18 2023 10:34:02 GMT+0530 (India Standard Time)

 console.log(date.toLocaleTimeString()); //10:34:02 am

 console.log(date.toLocaleString()); // 18/9/2023, 10:34:02 am

 console.log(date.toLocaleDateString());   //18/9/2023

 console.log(date.toJSON()); //2023-09-18T05:04:02.356Z
 console.log(date.toDateString()); //Mon Sep 18 2023
 console.log( typeof date); //object


 console.log("specific date");

 let mySpecificDate = new Date( 2001,11,8)
 console.log(mySpecificDate.toLocaleDateString());
 console.log(" my date of birth date and time is given below ");

 let myDateOfBirth = new Date(2001,11,8,20,0);
 console.log(myDateOfBirth.toLocaleString()); 

 let myTimeStamp = Date.now();
 console.log(myTimeStamp);
 console.log(myTimeStamp/1000);
 console.log(Math.round(myTimeStamp/1000));
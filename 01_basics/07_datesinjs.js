//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
//homework check all the option and write result in form of comment

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 1, 24)
 //moths also start from 0 like 0 is jan 1 is feb

 //for more info like time also use localstrig 
// let myCreatedDate = new Date(2025, 1, 24, 5, 3)
// let myCreatedDate = new Date("2025-07-06"); //in form of yy/mm/dd month goes like same like 1 jan
let myCreatedDate = new Date("01-08-2025"); //in india we follow mm/dd/yy 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //it is in milisecond value from 1st jan 1970year
// console.log(Date.now()); // it is in milisec now convert it into second
// console.log(Date.now()/1000);// for convert into sec divide with 1000 and use math.floor for better answer
// console.log(Math.floor(Date.now()/1000));

//other methods related to maths

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getHours());

newDate.toLocaleString('default', {
    weekday: "long";
})
//basic covered wewill foncus on future

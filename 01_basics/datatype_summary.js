// TYPES OF DATATYPES

//PREMETIVE
// 7TYPES IN PREMITIVE : String, Number, BOOLEAN, null, undefined, Symbol, BigInt,

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');
// //both console have different solution
// console.log(id === anotherId);

const bigNumber = 78787877878778788n //bigint use n before no. to convert into bigInt

//REFERANCE (Non primitive datatype also called)
 
// Arrays, Objects, Functions

const heros = ["ironman", "soiderman", "antman"] //arrays write in sqare bracket we will discuss more soon
let myobj = {
    name : "Zaid",
    age : 18,
}
//object writes in key valve pair and curly bracket use for object soon we will discuss

const myfunction = function () {
    console.log("hello world");
    
} 
//function first add in variable use paranthesis and curly bracket with function
console.log(typeof heros);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//taking about memories
//one is "STACK MEMORY" SECOND IS "HEAP MEMORY"
//IN PREMITIVE DATATYPE STACK MEMORY IS USED
//IN REFERANCE DATATYPE HEAP MEMORY IS USED
//example

let myYoutubeName = "ZA Gameplay 123";

let anothername = myYoutubeName;
anothername = "ilm-saudagar"
console.log(myYoutubeName);

console.log(anothername);

let userOne = {
    email : "user@,mailcom",
    upi : "userbyl"
}

let userTwo = userOne;
userTwo.email = "Za@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

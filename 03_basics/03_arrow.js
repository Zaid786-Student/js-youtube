const user = {
    username : "Zaid",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);  //this ko rum karne par sare contex share karega
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Zaid"
//     console.log(this.username);
    
// }
// chai()

// const chai = function() {
//     let username = "Zaid"
//     console.log(this.username);
    
// }

const chai = () => {                           //function keyword ko hata do => likho to arrow function ban jata hai
    let username = "Zaid"
    console.log(this); 
}

// chai()

//arrow function

// const addTwo = (num1, num2) => {   //curly bracket ke sath return key word use hota hai
//     return num1 +num2
// }
//++++++++++implecit return ++++++++++++// we dont use curly bracket
// const addTwo = (num1, num2) =>  num1 +num2

// const addTwo = (num1, num2) =>  (num1 +num2)

const addTwo = (num1, num2) =>  ({username: "Zaid"})      //object show karne ke liye parantheses use karna hoga ()

console.log(addTwo(3,4));

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

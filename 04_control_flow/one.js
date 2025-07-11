//if statement

// const isUserLoggedIn = true 
// const temperature = 51
// if (temperature < 50){
//     console.log("less than 50");
// } else {
//     console.log("temp is greater than 50");
// }



// if (2 === "2") {
//     console.log("execute");
    
// }

//for comparison we use 
// <, >, <=, >=, ==, != (not equal), === (it check type also) , !==

// const score = 190
// if (score >= 100) {
//     const power = "fly"
//     console.log(`User power: ${power} `);
    
// } else  {
//     const power = "run fast"
//     console.log(`User power: ${power} `);
// }

//short trick without scope //but  its scope will only for one line
// const balance = 6000

// // if (balance> 500) console.log("test"),   //one trick to expant scope dont write semicolon at last write at end of code like here 
// // console.log("test2"); //but never try this

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance <1000) {
//     console.log("less than 1000");
// } else {
//     console.log("Nice amount of money you have");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 3===2) {   //&& lagane par sab true hona chahie
    console.log("Allow to buy course");
    
}
if (loggedInFromEmail || loggedInFromGogle) {     // || (or) any one condition shoud be correct
    console.log("Succesful logged in");
}
//functions start

function sayMyName() {
    console.log("Z");
    console.log("i");
    console.log("i");
    console.log("d");

}
// sayMyName() //it will run when you use scopes() otherwise it will know but not run

// function addTwoNumber(num1, num2) {         //jub number introduce karate hai to wo parameter kahlate hai
//     console.log(num1 + num2);
    
// }
function addTwoNumber(num1, num2) {         
    // let result = num1 + num2
    // return result
    return num1 + num2 //better way
    
}
const result = addTwoNumber(3, 4)  //jab no. ko call karate hai to use argument kahte hai

// console.log("Result",result);


function loginUserMessage(username = "XYZ") {
    if(username === undefined){        //if we not pass any value in scope how to check use if else
        console.log("please enter a user name");
        return
    }                                                    
    return `${username} just logged in`
}
// console.log(loginUserMessage("Zaid"));
//give user name default when person will not enter any value then default value will come we can ignore undefined term
//if person write user name then simply overwrite it

function calcuateCartPrice(val1, val2, ...num1) {           //... iske aage lagne ka matlb hai rest operator aur piche lagne ka matlb hai spread it work to pack element
    return num1
}                                                          // basically this val takes value if i added two val then i only got last two value here as a array
// console.log(calcuateCartPrice(400, 200, 199, 2000));

const user = {
    username: "Zaid",
    price : 199
} 
function handleObject(anyobject){
    
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject({
    username: " Sam",
    price : 399
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue (getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

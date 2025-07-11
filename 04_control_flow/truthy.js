const userEmail = "Za@mail.com"

if (userEmail) {
    console.log("got email");
} else {
    console.log("dont have email");
    
}        //truthy value means if string have some value then then it behave as true otherwise falsy value
        // in array if it is empty that it will assume as true but in empty string we assume it false why?
/* falsey value  means which value is assume to be false
1 false 
2 0, -0
3 In BigInt 0n value assume falsy , (4) empty string "" (5) null (6) undefined  (7) NaN 
// except this everything is true 
ex empty array, BigInt, not empty string, "0", 'false', " " , {}, function () {}
*/
// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length ===0) {
    console.log("empty");
    
}

// Nullis Coaclescing Operator (??) : null and undefined we have to talk here

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);

//ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


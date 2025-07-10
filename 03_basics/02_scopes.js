
                                  //if ke bahar ke scope{} ko kahte hai global scope
let a = 300                                  
if (true) {                       //if ke ander ke scope{} ko kahte hai block scope
    let a = 10;
    const c= 30;
    // console.log("INNER", a);
    
}
// console.log(a);
// console.log(c);

function one() {
    const username = "Zaid"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}           //ander ka function bahar ke function ko access karte hai

// one()

if (true) {
    const username ="Zaid"
     if (username === "Zaid") {
        const website = "youtube"
        // console.log(username + website);
        
     }

    //  console.log(username);
}

//++++++++++++intresting concept++++++++++++++++++++++++++++++++++//

function addone(num) {
    return num +1
}

console.log(addone(5));

const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(6));

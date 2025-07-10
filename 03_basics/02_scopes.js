
                                  //if ke bahar ke scope{} ko kahte hai global scope
let a = 300                                  
if (true) {                       //if ke ander ke scope{} ko kahte hai block scope
    let a = 10;
    const c= 30;
    console.log("INNER", a);
    
}
console.log(a);
// console.log(c);

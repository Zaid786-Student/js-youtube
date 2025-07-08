const score = 400
// console.log(score);

const balance = new Number(100);

// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 254.32354654
// console.log(otherNumber.toString().length);
// console.log(otherNumber.toFixed(5));

// console.log(otherNumber.toFixed(2));


// console.log(otherNumber.toPrecision(3)); //riundoff basically

const newNumber = 259.88

// console.log(newNumber.toPrecision(4)); //see how round off work same as maths
// console.log(newNumber.toPrecision(3));
// console.log(newNumber.toPrecision(2)); //two presion value and then exponential

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN')); //use 'en-IN' to get indian calcuculation system 


//+++++++++++++++++++++++++++++++++Now Maths ++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //abs means absolute us only to make -ve to +ve value +ve will same +ve
// console.log(Math.round(9.6)); //round off the no.
// //in round off we can choose we have to get upper value or lower value
// console.log(Math.ceil(9.3)); //roundoff for upper here it will 10 not 9 after run this
// console.log(Math.floor(9.6)); //roundoff for lower here it will 9 not 10 after run this
// console.log(Math.min(9.6, 2, 5 ,1.1, 2.9)); //for minimum value
// console.log(Math.max(9.6, 2, 5 ,1.1, 2.9)); //for max value

console.log(Math.random()); //random value between 0 and 1
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1); //use for min and short value

//trik to define min and max according to you

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1)) + min )  //+1 we use that we dont get 0 value
//formula max - min says that range ki iske bich me aaye zyada na ho aur 
//+1 taki random 0 aur 1 ke bich hota hai is we add 1 then we get 1+ no. 
//min ko add karne ka mutlb 10 min hona chahie usse niche na ho
//last mathfloor jo sabse short roundoff no. dega
//we can set max according to us
//arrays array is object
//we write array in square bracket
//element can be different in array like string object number and all
const myArr = [0, 1, 2, 4, 3, 5]
const myHeros = [ "Ironman", "Antman"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//Arrays method

// myArr.push(16) //with push we can add new element
// myArr.push(4)//add more element just add no. of element
// myArr.pop() //remove last element for variable add more pop to remove more value

// myArr.unshift(9) //write any element that you want to add in starting 
// myArr.shift()  //we cannot wirte element name in parameter  //opposite of unshift it remove elemet from Startion
// console.log(myArr.includes(9)); //include use for question wheer this element is in or out
// console.log(myArr.indexOf(9));  //if it exist that it says element no. and if not it says (-1)

const newArr = myArr.join() //join convert in strings


// console.log(myArr);
// console.log(newArr);

//slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //1st include 2 include 3rd not inclues
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //1st include 2 include 3rd inclues splice use karne par origial array me se wo element hat jate hai
console.log("C ", myArr);
console.log(myn2);

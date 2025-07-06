const name = "Zaid";
const repoCount = 10;

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Zaid-ZA-com')

// console.log(gameName[0]) ; 
// console.log(gameName.__proto__); 

// console.log(gameName.length); to find word length like in ZAIDZA 6 is length
// console.log(gameName.toUpperCase()); to add word in uppercase similar with lowercase
console.log(gameName.charAt(3)); //charAt se us no. ki position me konsa alphabet hai 
console.log(gameName.indexOf('a')); // alphabet se alphabet ka no. pata lagana like here is 1 because it start with 0 1 2 3 4 5

const newString = gameName.substring(0, 3)

const anotherString = gameName.slice(-6, 2) //we can use -ve also in slice
console.log(newString);
console.log(anotherString);

const newStringOne = "  ZAid   "
console.log(newStringOne);

console.log(newStringOne.trim()); //we can trim unusual spaces

const url = "https://Zaid.com/zaid%20khan"

console.log(url.replace('%20', '-')); //we can replace any word or somthing with new one

console.log(url.includes('Zaid')) //true  //you can ask this word is in code or not
console.log(url.includes('Adnan')) //false

console.log(gameName.split('-')); //from this place word will split in arrays ex ZAID-ZA-COM after using this it become [Zaid, ZA, COM]

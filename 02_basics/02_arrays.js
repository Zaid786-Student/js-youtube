const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superma", "flash", "batman"]

// marvel_heros.push(dc_heros) //with push we can add another array  in form of element
// console.log(marvel_heros [3][1]);

//one more methot to add

// const allHero = marvel_heros.concat(dc_heros)
// console.log(allHero); //with the help of concat we merge every single element but we need to create a new variable

//spread method
//same as concat but prefer this    
const all_new_heros = [...marvel_heros, ...dc_heros] 
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6] ,7, [6,7, [4,5]]]
//with the help of flat we can make this complex in same array
const real_another_array = another_array.flat(Infinity) //in braces we have to write depth of arrow
console.log(real_another_array);


console.log(Array.isArray("Zaid")); //isarray means checking is it array
console.log(Array.from("Zaid")); //from conver karta hai array me
console.log(Array.from({name : "Zaid"})); //interesting if we cannot share how to make array from ko to wo empty dega

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //another name of from

//read abot isarray fromarray and ofarray
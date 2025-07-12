// (for of) loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}
const greetings = "Helo world1"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
    
}
//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of america")
map.set('Fr',"France")
map.set('IN',"India")    //not enter because repeted

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
const myObject = {
    'game1' : 'Mario',
    'game2' : 'pUBg'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
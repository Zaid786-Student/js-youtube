//reduce js work in shorpping card

const myNums = [1, 2, 3]
//acc means accumelator and currval means current value
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

//in form of arrow function

const myTotal = myNums.reduce( (acc, currval) => acc + currval ,0)

console.log(myTotal);

const shoppingCard = [
    {
        itemName : "js course",
        price : 299
    },
    {
        itemName : "python course",
        price : 99
    },
    {
        itemName : "englis course",
        price : 199
    },
    {
        itemName : "data science course",
        price : 1299
    },
]
const priceToPay = shoppingCard.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);

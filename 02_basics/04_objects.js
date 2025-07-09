// how to do singleton objects

// const tinderUser = new Object() //this is singleton object
const tinderUser = {} // this is not a single ton object but both are same internally empty object

tinderUser.id = "123abc"
tinderUser.name = "Zaid"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularuser = {
    email: "Sum@gmail.com",
    fullname: {
    userfullname : {
        firstname : "Zaid",
        lastname : "khan"
    }
}
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = { 5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3 ) //for combine in one element

const obj4 = { ...obj1, ...obj2, ...obj3} //prefer this its better
// console.log(obj4);


//array ke ander object wala case
const users = [
    {
        id: 1,
        email: "mohan@gmail.com"
    },
    {
        id: 1,
        email: "mohan@gmail.com"
    },
    {
        id: 1,
        email: "mohan@gmail.com"
    },
]
console.log(tinderUser);

console.log( Object.keys(tinderUser));
console.log( Object.values(tinderUser));
console.log( Object.entries(tinderUser)); //key value pairs
console.log(tinderUser.hasOwnProperty('isLoggedin')); //for rechecking the property exist or not

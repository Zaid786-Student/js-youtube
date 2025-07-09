// singleton
//contructor ki trah se banega to singleton hoga
//literal se hoga to singleton nahi hog 

//object literal

const mySym = Symbol("key1")


const JsUser = {
    name : "Zaid",
    "full name" : "Zaid Khan",
    [mySym] : "mykey1",
    age : 18,
    location : "lucknow",
    email : "Zaid@google.com",
    isLogged : false,
    lastLoginDays : ["Monday", "Saturday"]
} //curly bracket se object bante hai in object we use key ratio

//how to access object elements
// console.log(JsUser.email)
// //but best method
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym]) //how to add it into symbol

JsUser.email = "Zaid@chatgpt.com"
// Object.freeze(JsUser) //freeze se koi aur ise change nahi kar sakta
JsUser.email = "Zaid@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log('Hello JsUser');
}

JsUser.greetingTwo = function() {
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

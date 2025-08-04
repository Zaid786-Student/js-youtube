const promise1 = new Promise(function(resolve, reject) {
    //Do an async task
    //Database Call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
}) 

promise1.then(function(){
    console.log("Promise Consumed");
    
})
// promise 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async two resolved");
    
})

// promise 3
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai", email : "Chai@examplegmail.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user);
})

// promise 4
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({
                username: "Zaid",
                passward : "122334"
            })} else {
                reject('Error : Somthing went wrong')
            }
        
    },1000)
})
promise4
.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("Finally Done");
    
})

// promise 5
const promise5 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({
                username: "Javascript",
                passward : "122334"
            })} else {
                reject('Error : JS went wrong')
            }
        
    },1000)
});

async function consumePromise5() {
    try {
        const response = await promise5
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromise5()

// async function getAllUsers() {
//     try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E :", error);
        
//     }
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})
const coding = ["js","rb", "py", "java", "cpp"]

// coding.forEach ( function (val) {
//     console.log(val);
    
// } )
//in arrouw function
// coding.forEach(( item) =>  {
//     console.log(item);
    
// })

// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe) 

// coding.forEach ( (item,  index, arr) =>  {
//     console.log(item, index, arr);
    
// })

//array ke ander ibject
const myCoding = [
    {
        languageName: 'javascript',
        languageFile: "js"
    },
    {
        languageName: 'css',
        languageFile: "css"
    },
    {
        languageName: 'html',
        languageFile: "html"
    }
]

myCoding.forEach(  (item) => {
    console.log(item.languageName, item.languageFile);
    
}) 
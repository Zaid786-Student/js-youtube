//reguar syntax of switch case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 2

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");        //if we not use break the it will not stop it conclude all value after this comment break to know more
        break;
    case 4:
        console.log("April");
        break;
        

    default:
        console.log("default case match"); 
        break;
}
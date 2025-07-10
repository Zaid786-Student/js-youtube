// Immediately Invoked Function Expressions (IIFE) +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(function chai() {          //if we give name like here chai is called "NAMED IIFE"
    console.log(`DB CONNECTED`);
    
})();

//Oues :- WHY WE USE IIFE
//ANS :- GENERAL :- IMMEDIATE EXECUTE HO JAI JO FUNCTION
//ANS :- FOR INTERVIEW :- GLOBAL SCOPE KE POLLUTION SE PROBLEM HOTI HAI KAIBAR TO US GLOBAL SCOPE KE DECLARATION SE BACHNE KE LIYE USE KARTE HAI 

//IN FORM OF ARRAY FUNCTION

( (name) => {               //if we DON'T give name like here is called "SIMPLE IIFE"
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('Zaid')
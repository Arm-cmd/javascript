// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function one() {
    // named IIFE
    console.log("DB CONNECTED")
})()  ;// to stop global scope variables from polluting this 
// particular function we use IIFE by wraping it in () and then 
// immediately using it () 
// use ; to end the context of the first invoked function or it could 
// create problems

( () => { // simple IIFE
    console.log("DBZ")
}) ()
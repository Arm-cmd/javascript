// some values are intrinsicly true while some values are intrisicly false
// as it is belived by the program

//falsy

const emptyString = ""

if(emptyString){
    console.log("string is not empty")
}
else {
    console.log("string is empty")
}

// falsy values
// false , 0 , -0 , "", BigInt 0n , null , undefined , NaN

// some truthy values 
// " " , "0" , '0' , 'false' , {} empty object , [] empty array , function()[] 


const emptyObj = {} 
// Object.keys converts the object into arrays and helps us find out if the object is empty by checking the length of the array
if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator : null , undefined (works only on both)

let val ;

val = null ?? 10 // it will assign the first value apart from null or undefined it sees
val = null ?? 10 ?? 40
console.log(val)

// Ternary operator

// condition ? true : false 
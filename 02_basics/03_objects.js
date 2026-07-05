// singleton & multi-instance objects

// object.create is constructor that creates a singleto object

// object literal

const mySym = Symbol("myKey1")


const JsUser = {
    name : "Arman",
    [mySym] : "myKey1" , // imperative to use square brackets , if want to use it as a symbol
    // other wise it will be read as a string
    email : "aarearae@gamil.com",
    age : 20,
    "full name" : "Arman Thakur"

}
// Two ways to access objects 
// all name age eamil are stored as strings 
// console.log(JsUser.age) // first way 
// console.log(JsUser["email"]) // second way 
// console.log(JsUser["full name"]) // only way too access full name 
// console.log(JsUser[mySym])

JsUser.email = "areajchatgpt.com" ,
//Object.freeze(JsUser) // freezes the contents of the objects , changes will not propagate 
JsUser.email = "setgesads.com"
console.log(JsUser) ;

JsUser.greeting = function() {
    console.log(`Hello JS user , ${this.name}`)
}

console.log(JsUser.greeting());

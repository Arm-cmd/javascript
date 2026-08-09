const user = {
    username : "arman" ,
    price : 999 ,

    welcomeMessage : function() {
        console.log(`${this.username} welcome to website`)
    }

}
//user.welcomeMessage()
//console.log(this.username)
console.log(this)
// this only gives context of the function inside the node

// function one(){
//     username : "aerama"
//     console.log(this.username) in the function one() `this` does not 
// know the context 
// }
// one() 

// const one = function() {
//     username : "azf"
//     console.log(this.username)
// }
// const one = () => {
//     username : "azf"
//     console.log(this.username)
// }
// one() 


const addtwo = (num1 , num2) => {
    return num1+num2 
} // explicit return is used with curly braces

const addtwo = (num1 , num2) => (num1+num2) 
// implicit return is used with simple brackets


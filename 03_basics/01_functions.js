// function Name() {
//     console.log("f")
//     console.log("a")
//     console.log("a")
//     console.log("h")
// }

// Name() 

function addNums(number1 , number2){
    let result = number1 + number2 
    return result 
    console.log("gaega")
}
const result = addNums(4,5)
// console.log(result)

function loginUsername(username = "sam"){
    if(!username){ // using if to check the username is undefined or defined
        console.log("Please enter username")
    }
    return `${username} just logged in`
}

//console.log(loginUsername())

function calculateCartPrice(val , val2 , ...num1){
    return num1 
}
//console.log(calculateCartPrice(200 , 300 , 400))

const user = {
    username : "aegae" ,
    price : 132 
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject( {
    username : "aefae" ,
    price : 243
})

const myArr = [200,400,500]

function returnfirstvalue(getanyArray){
    return getanyArray[0]
}

console.log(returnfirstvalue(myArr))

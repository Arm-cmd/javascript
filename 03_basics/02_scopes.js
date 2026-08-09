// {} curly braces when used with if else or functions are called the scope of that functions

if(true){
let a = 10
const b = 20 
var c = 30 
} // the if statement is not returning anything so the console log will not work
// for a and b whereas for c declared with var it will
// console.log(a)
// console.log(b)
//console.log(c)

let a = 300 
if(true){
    let a = 30 
    const b = 20 
   // console.log("Tnner :" ,  a)
}

//console.log(a) // a is printed but of the global scope a(300)

function one(){
    const username = "afaswg"
    function two(){
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const username = "aetgwe"
    if(username === "aetgwe"){
    const website = "youtube"
    //console.log(username + website)
    }
//console.log(website) ;
}
//console.log(username)

// +++++++++++++++++++ Interesting +++++++++++ // 

console.log(addone(5)) // this works 
function addone(num){
    return num+1 ;
}

//addtwo(5) here we try to use a function before we declared it and stored it in a variable
const addtwo = function(num){
    return num+2 ;
}
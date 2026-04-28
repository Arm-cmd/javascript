const name = "Arman"
const num = 40 

// console.log(name + num + "value")

// console.log(`My name is ${name} and my salary is ${num}`) // string interpolation

const gameName = new String('Cricket')

// console.log(gameName.__proto__)

// console.log(gameName.length)

// console.log(gameName.charAt(2))

console.log(gameName.indexOf('k'))
// const newString = gameName.substring(0,4)

// console.log(newString)

const anotherString = gameName.slice(-7,2)
console.log(anotherString)

const stringOne = "   football   "
console.log(stringOne.trim())

const url = "https://gooogle.com/gooogle%20global/"

console.log(url.replace('%20','-'))
console.log(url.includes('google'))
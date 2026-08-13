// for of 

// [ {} , {} , {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    //console.log(num)
}

const greeting = "Hello World"
for (const greet of greeting) {
   // console.log(greet)
}

// maps

const map = new Map()
map.set("IN","India")
map.set("CN","China")
map.set("FR","France")

//console.log(map)

for (const [key , value] of map) {
    console.log(key,":-",value)
}

const myObj = {
    'obj1' : "arw" ,
    'obj2' : "te4"
}
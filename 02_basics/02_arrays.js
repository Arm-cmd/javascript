const marvel_heroes = ["Spiderman", "Tony Stank" , "Thor"]
const dc_heroes = ["Supreman" , "Batman" , "Flash"]

// marvel_heroes.push(dc_heroes) // takes the whole array as a single element 
// console.log(marvel_heroes) ;

// const allHeroes = marvel_heroes.concat(dc_heroes) // merges two arrays and returns a new array
// console.log(allHeroes) 

// spread operator 

// const all_new_heroes = [...marvel_heroes , ...dc_heroes]
// console.log(all_new_heroes)

// const another_array = [1,3,2,4,[4,,8,9],13,45,[52,65,21[634,734,122]]]
// const usable_another_array = another_array.flat(4)
// console.log(usable_another_array) ;

console.log(Array.isArray("Arman")) // asks if the passed element is an array
console.log(Array.from("Arman")) // creates array of the given input
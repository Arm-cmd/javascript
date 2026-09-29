const descriptor = Object.getOwnPropertyDescriptor(Math,"PI") ;

//console.log(descriptor) 
//  {
//   value: 3.141592653589793,  these values are hardcoded and cannot be changed
//   writable: false,            there are also checks in place in C++ , to 
//   enumerable: false,              prevent that from happening
//   configurable: false
// }  these are some hidden properties of PI

const user = {
    name: "ME" ,
    isLogged: true
}


Object.defineProperty(user,'name',{
    writable: false,
    enumerable: false
})
//console.log(Object.getOwnPropertyDescriptor(user,"name"))


for (let [key, value] of Object.entries(user)) {
    if(typeof value !== 'function'){
 console.log(`${key} : {value}`)   ;
}
}
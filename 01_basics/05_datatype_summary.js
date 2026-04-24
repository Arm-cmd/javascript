// Primitive
/**  these are call by value meaning a copy is provided to any function or program calling them 
rather than providing the reference of their memory **/
 // 7 types:  String , Number , Boolean , null , undefined , Symbol , BigInt 


 const id = Symbol('123')
 const anotherID = Symbol('123')
 console.log(id == anotherID)
 // Reference (non primitive)
 // Array , Object , Functions 
 // most non-primitive datatype return value function when typeof is used

const myObj {
    name = "hello world"
    age  = 20
 } // this will return type object function

 // stack gives a copy of the value we want to use , any changes made will be on the copied value
 // heap gives the reference to the memory space any change made will directly reflect 
 // on every place the value is used.
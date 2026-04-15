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
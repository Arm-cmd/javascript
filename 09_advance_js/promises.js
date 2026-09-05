// const promiseOne = new Promise(function(resolve,reject){
//   //Do async task
//   // DB calls , cryptography , network 

//   setTimeout(function(){
//     console.log('Async task complete')
//     resolve() ;
//   },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed") ;
// })


// new Promise(function(resoleve,reject){
//         setTimeout(function(){
//             console.log("Async await")
//         },1000)
// }).then(function(){
//     console.log("Promise Consumed")
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({user: "Arm-cmd",github: "Arm-cmd.github"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true 
//         if(!error){
//             resolve({username: "Arm-cmd" , email: "Arm-cmd.github"})
//         }
//         else {
//             reject('ERROR!')
//         }
//     },1000)
// })

// promiseFour.then((user) => {
//         console.log(user); 
//         return user.username 
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error)
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true 
//         if(!error){
//             resolve({username: "Arm-cmd" , email: "Arm-cmd.github"})
//         }
//         else {
//             reject('ERROR!')
//         }
//     },1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response  = await promiseFive 
//     console.log(response)
        
//     } catch (error) {
//         console.log('ERROR!')
//     }
// }
// consumePromiseFive() 

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() 
//         console.log(data)
//     }
//     catch(error) {
//         console.log("ERROR!")
//     }
// }

// getAllUsers() 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log("ERROR!"))
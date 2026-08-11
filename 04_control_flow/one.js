// if

const isLoggedIn = true

// if(isLoggedIn){
//     console.log("executed")
// }
// if(2!=3){
//     console.log("executed_true")
// }
// if(2!==3){
//     console.log("executed_false")
// }

// > , < , >= , <= , == , ===(used to check strictly the value and also the datatype)

const points = 200 

// if(points>100){
//     let power = "fly"
//     console.log(`User power : ${power}`)

// }
// scope of power is functional i.e inside the function , do not use var to declare as 
// it has global scope
// console.log(power)

// nested if-else

    const balance = 1000 
  // if(balance > 500) console.log("rich") // example of implicit scope


    // if(balance < 500){
    //     console.log("rich")
    // } else if(balance < 750){
    //     console.log("very rich")
    // } else if(balance < 900){
    //     confirm.log("richy rich")
    // } else {
    //     console.log("execute")
    // }

    const userLoggedIn = true 
    const debit = true 
    const loggedInfromGoogle = true 
    const loggedInfromEdge = false 
    // checking multiple parameters in one if stattement 

    if(userLoggedIn && debit){  // require every condition to be true in case of && 
        console.log("allow")
    }

    if(userLoggedIn && debit && loggedInfromGoogle||loggedInfromEdge){
        console.log("Alllowed")
    }
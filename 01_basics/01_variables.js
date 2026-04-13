const accountId = 143332
let accountEmail = "arman@gmail.com"
var password = "12345"
accountCity = "Jaipur"
let accoutnState ; // it will be saved in the memory as undefined

/* 
prefer not to use var because of issue in block scope and functional scope 
(any change across any file having same variable name changes every single variable with that name)
*/
accountEmail = "hc@hc.com"
password = "353412"
accountCity = "Bengaluru"


console.table([accountEmail,accountId,accountCity,password])


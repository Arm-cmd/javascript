for (let i = 0; i < 10; i++) {
    const element = i;
   // console.log(element)
}

// nested loops

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        
    }
}

// iterating arrays

//  const myArr = {1,2,3,4}
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
   // console.log(element)
    
}

// break and continue

for (let i = 0; i < array.length; i++) {
    if(i==5){
        console.log("Detected 5")
        break 
    }
    
    console.log(`value of index is ${i}`)
}
for (let i = 0; i < array.length; i++) {
    if(i==5){
        console.log("Detected 5")
        continue
    }
    
    console.log(`value of index is ${i}`)
}
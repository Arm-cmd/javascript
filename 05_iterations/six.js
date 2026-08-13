const coding = ["js", "py", "java", "ruby"] 

const values = coding.forEach((item) => {
  //  console.log(item);
    // firEach does not return any values
})
// forEach does not return anything
//console.log(values);

const myNums = [1 , 2 , 3, 4, 5 , 6 , 7]

//const newNums = myNums.filter( (nums) => nums>4)
   // console.log(newNums);

//    const newNums = myNums.filter( (nums) => {
//     return nums>4 ;
//    })

  // console.log(newNums)

  const newNums = [] 

  myNums.forEach((nums) => {
    if(nums>4){
        newNums.push(nums)
    }
  })

  console.log(newNums)
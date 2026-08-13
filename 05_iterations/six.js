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

  //console.log(newNums)

  const books = [
    {
      title : 'DUNE' , genre : 'Science-Fiction' , publish : '1964' ,
      edition : '1998'
    } ,
    {
      title : 'The Hobbit' , genre : 'Fantasy' , publish : '1937' ,
      edition : '1959'
    } ,
    {
      title : '1984' , genre : 'Fiction' , publish : '1984' ,
      edition : '1988'
    } ,
    {
      title : 'The Lord of The rings' , genre : 'Fantasy' , publish : '1954' ,
      edition : '2000'
    } ,
    {
      title : 'The Wheel of Time' , genre : 'Science-Fantasy' , publish : '1994' ,
      edition : '2005'
    } ,
    {
      title : 'The Hisotory of India' , genre : 'History' , publish : '1959' ,
      edition : '1979'
    } ,
    {
      title : 'Beyond Good and Evil' , genre : 'Philosophy' , publish : '1879' ,
      edition : '2010'
    } ,
    {
      title : 'The Diary of Anne Frank' , genre : 'Auto Biography' , publish : '1989' ,
      edition : '2019'
    } 
  ]

let userBooks = books.filter( (book) => book.genre==='History')
   userBooks = books.filter( (book) => book.genre==='Fantasy')
  console.log(userBooks)
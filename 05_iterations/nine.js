const nums = [1,2,3]

// reduce
// const myTotal = nums.reduce( function(acc,currval) {
//     console.log(`accumulator value : ${acc} currant value : ${currval}`);
    
//     return acc+currval ;
// } , 0)
const myTotal = nums.reduce( (acc,currval) => acc+currval , 0)
//console.log(myTotal) 

const shopping = [
    {
        item : 'laptop' , price : 1000
    } ,
    {
        item : 'mobile' , price : 500
    } ,
    {
        item : 'tablet' , price : 300
    } ,
    {
        item : 'desktop' , price : 1500
    }
]

const priceToPay = shopping.reduce( (acc,curr) => acc+curr.price , 0)


console.log(priceToPay);

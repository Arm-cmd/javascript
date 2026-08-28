# Project related to DOM 

# Project link 
[Click here]()

# Solution Code 
``` javascript 
const form  = document.querySelector('form')
// tis usecase will give empty values
//const height = parseInt(document.querySelector('#height').value)
// we wnat value to be taken on the time of submmiting the value
form.addEventListener(function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid input ${height}`
  }else if(weight == '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid input ${weight}`
  }
  else {
    const bmi = (weight / ((height*height)/10000))*toFixed(2)
    // show result
    results.innerHTML = `<span>${bmi}</span>`
  }

}) ```
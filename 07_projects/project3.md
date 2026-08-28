 Projects related to DOM 

## project link 
[Click here]()

# Solution code :
``` javascript 
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date() ;
    clock.innerHTML = date.toLocaleDateString() ;
},1000) ; ```
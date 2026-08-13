const myObject = {
    js : 'javascript' ,
    cpp : 'C++' ,
    rb : 'ruby' ,
    swift : 'swift'
}

for (const key in myObject) {
 //console.log(`key is ${key} for object ${myObject[key]}`);
    
}

const arr = ["js", "py", "java", "ruby"]

for (const key in arr) {
    //console.log(arr[key]);
    
    
}
// map is not iterable

const myCoding = [
    {
        languageName : "js" ,
        languageFileName : "javascript"
    } ,
    {
        languageName : "py" ,
        languageFileName : "python"
    } ,
    {
        languageName : "java" ,
        languageFileName : "java"
    }

]

myCoding.forEach((item , index) => {
    console.log(item.languageFileName);
    
})
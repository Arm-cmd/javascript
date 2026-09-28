class User {
    constructor(username){
        this.username = username ;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User {
    
    constructor(username,email,password){
        super(username)
        this.email = email 
        this.password = password
    }
    addCourse() {
        console.log(`A new course was added ${this.username}`) ;
    }
}
const newUser = new Teacher("teacher", "ageea@gmail.com", "123") ;
newUser.addCourse() ;

newUser.logMe() ;

console.log(newUser instanceof Teacher)
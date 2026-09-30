class user {
    constructor(username,password){
        this.username = username
        this.password = password
    }
    get email(){
        return this._email.toUpperCase() 
    }
    set email(val){
        this._email = val
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const newUser = new user("New","abc")
console.log(newUser.password)

class User {
    constructor(username, password, age) {
        this.username = String;
        this.password = String;
        this.age = Number;
        this.loggedIn = Boolean;
    }
    login(password) {
        if(this.password === password) {
            this.loggedIn = true
        }else {
            throw new Error("incorrect password error")
        }
    }
    logout() {
        this.loggedIn = false 
    }
}
let user = new User()
// console.log(user.login())

module.exports = User

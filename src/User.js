
class User {
    constructor(username, password, age) {
        username = String;
        password = String;
        age = Number;
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
        this.loggedIn = flse 
    }
}


module.exports = User

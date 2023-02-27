const User = require('./User')
const Scooter = require('./Scooter')


class ScooterApp {
    
    constructor() {
        this.stations = {
            "brooklyn": [],
            "queens": [],
            "manhattan": [],
        }
        this.registeredUsers = {}
    }
    registerUser(username, password, age) {
        let user = new User(username, password, age)
        if(!(this.registeredUsers[username])) {
            this.registeredUsers[username] = user
            user.username = username
            user.password = password
            user.age = age
            console.log(`${username} has been registered`)
        }else if(this.registeredUsers[username]){
            throw new Error("username already exists")
        }
            return user
    }
    
    loginUser(username, password) {
        if(this.registeredUsers[username] !== undefined) {
            this.registeredUsers[username].login(password)
            console.log(`${username} has been logged in`)
        }else {
            throw new Error(`Username or password is incorrect`)
        }
        return this.registeredUsers[username]

    }

    logoutUser(username) {
        //user shouldn't be able to logout if they are not logged in
        if(this.registeredUsers[username] !== undefined) {
            this.registeredUsers[username].logout()
            console.log(`${username} has been logged out`)
        }else if(this.registeredUsers[username] === undefined) {
            throw new Error(`no such user is logged in`)
        }

    }

    createScooter(station) {
        let scooter = new Scooter()
        if(this.stations[station]) {
            this.stations[station].push(scooter)
            scooter.station = station
            console.log(`created new scooter`)
        }else if(!(this.stations[station])){
            throw new Error(`no such station`)
        }
        return scooter
    }

    dockScooter(scooter, station) {
        if(this.stations[station]) {
            if(scooter.station === station) {
                throw new Error(`scooter already at station`)
            }else {
                this.stations[station].push(scooter)

                scooter.station = station
                console.log(`scooter is docked`)
            }
        }else if(!(this.stations[station])){
            throw new Error(`no such station`)
        }
    }
  
    rentScooter(scooter, user) {
        if(this.stations[scooter.station]) {
            if(scooter.user !== user) {
                throw new Error(`scooter already rented`)
            }else {
                scooter.user = user
                scooter.station = null
                console.log(`scooter is rented`)
            }
        }
    }

    print() {
        console.log(this.registeredUsers)
        console.log(this.stations)
    }

}
// let app = new ScooterApp()
// app.registerUser("allen", "123", 18)
// app.loginUser("allen", "123")
// app.logoutUser("allen")
// console.log(app.registeredUsers.allen.loggedIn)
// console.log(app.registeredUsers['allen'].loggedIn)


// let app = new ScooterApp()
// let scooter = new Scooter()
// app.registerUser('allen', '123', 18)
// app.registerUser('benny', '11111', 54)
// app.dockScooter(scooter, 'brooklyn')
// app.rentScooter(scooter, 'allen')
// // app.rentScooter(scooter, 'benny')
// app.print()

module.exports = ScooterApp

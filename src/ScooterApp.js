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

    // logoutUser(username) {
    //     if(this.registeredUsers[username] !== undefined) {
    //         this.registeredUsers[username].logout()
    //         console.log(`${username} is loged out`)
    //     }else {
    //         throw new Error(`no such user is logged in`)
    //     }
    // }
    // createScooter(station) {
    //     let scooter = new Scooter()
    //     if(this.stations[station] !== undefined) {
    //         this.stations[station].push(scooter)
    //         scooter.station = station
    //         console.log("created new scooter")
    //         return scooter
    //     }else {
    //         throw new Error("no such station")
    //     }
    // }
    // dockScooter(scooter, station) {
    //     if(this.stations[station] !== undefined) {
    //         if(scooter.station === station) {
    //             throw new Error("scooter already at station")
    //         }else {
    //             this.stations[scooter.station].splice(this.stations[scooter.station].indexOf(scooter), 1)
    //             this.stations[station].push(scooter)
    //             scooter.station = station
    //             console.log("scooter is docked")
    //         }
    //     }else {
    //         throw new Error("no such station")
    //     }
    // }

}

module.exports = ScooterApp

const User = require('./User')
const Scooter = require('./Scooter')

let scooter = new Scooter()

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
        if(this.registeredUsers[username] !== undefined) {
            this.registeredUsers[username].logout()
            console.log(`${username} has been logged out`)
        }else if(this.registeredUsers[username] === undefined) {
            throw new Error(`no such user is logged in`)
        }

    }

    createScooter(station) {
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
        if(scooter.user === user) {
            throw new Error(`scooter already rented`)
        }
        for(let station in this.stations) {
            const index = this.stations[station].indexOf(scooter);
            this.stations[station].splice(index, 1);
            break;
        }
        scooter.rent(user)
        console.log(`scooter is rented`)
    }


    //print() method should print out the current state of the app
    print() {
        console.log(this)
    }
    

}


// let app = new ScooterApp()
// let scooter = new Scooter()
// app.registerUser('allen', '123', 18)
// app.registerUser('benny', '11111', 54)
// app.dockScooter(scooter, 'brooklyn')
// app.rentScooter(scooter, 'allen')
// // app.rentScooter(scooter, 'benny')
// app.print()



module.exports = ScooterApp

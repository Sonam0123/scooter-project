const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe('Is app an object', () => {
    const app = new ScooterApp()


    test('check if app is an object', () => {
      // edit this to be a real test!
      expect(typeof app).toEqual('object');
  
    })
    // register user
    test('check if user is registered', () => {
        app.registerUser("allen", "123", 18)
        expect(app.registeredUsers["allen"].username).toEqual("allen")
    }) 
    // log in
    test('check if user can be logged in', () => {
        expect(app.loginUser("allen", "123")).toEqual(app.registeredUsers["allen"])
    })

    // log out
    test('check if user can be logged out', () => {
        app.logoutUser("allen")
        expect(app.registeredUsers["allen"].loggedIn).toEqual(false)
    })

    //create scooter

    test('check if scooter can be created based on station', () => {
        app.createScooter('queens')
        let findingStation = app.stations.queens
        for(let i = 0; i < findingStation.length; i++) {
            expect(findingStation[i].station).toEqual('queens')
        }
    })
    
    // dock scooter
    test('check if scooter can be docked', () => {
        let scooter = new Scooter()
        app.dockScooter(scooter, 'brooklyn')

        console.log(app)
        let findingStation = app.stations.brooklyn
        for(let i = 0; i < findingStation.length; i++) {
            expect(findingStation[i].station).toEqual('brooklyn')
        }
    })

    // rent scooter

    test('check if scooter can be rented', () => {
        let scooter = new Scooter()
        app.dockScooter(scooter, 'brooklyn')
        app.rentScooter(scooter, 'allen')
        console.log(scooter.user)
        expect(app.registeredUsers["allen"].username).toEqual(scooter.user)
    })





})






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
    


})




// rent scooter

// dock scooter

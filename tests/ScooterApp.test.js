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
    //test if login user returns user
    test('check if user can be logged in', () => {
        expect(() => {
            app.loginUser('allen', '123', 18).toEqual(app.registeredUsers["allen"])
        })
    })

    test('check if user logion logs user has been logged in', () => {
        expect(console.log(app.loginUser('allen', '123', 18))).toEqual(console.log(app.registeredUsers["allen"]))
    })
    

    //test if user already exists to throw error username already exists
    test('check if user already exists', () => {
        expect(() => app.registerUser('allen', '123', 18)).toThrow("username already exists")
    })

    //if usenrame or password is incorrect to throw error Username or password is incorrect
    test('check if username or password is incorrect', () => {
        expect(() => app.loginUser('allen', '1234', 18)).toThrow(`Username or password is incorrect`)
    })


    // log out
    test('check if user can be logged out', () => {
        app.loginUser('allen', '123', 18)
        app.logoutUser('allen')
        expect(() => {
            app.logoutUser('allen').toThrow('no such user is logged in')
        })
    })
    //test if user is logged in to throw error user isn't logged in
    // test('check if user is logged in', () => {
    //     const user = new User('benny', '11111', 54)
    //     user.loggedIn = false
    //     expect( app.logoutUser('benny')).toThrow(`user isn't logged in`)
    // })


    //create scooter

    test('check if scooter can be created based on station', () => {
        app.createScooter('queens')
        let findingStation = app.stations.queens
        for(let i = 0; i < findingStation.length; i++) {
            expect(findingStation[i].station).toEqual('queens')
        }
    })

    //test if station exists to throw error no such station
    test('check if station exists', () => {
        expect(() => app.createScooter('bronx')).toThrow('no such station')
    })

    
    // dock scooter
    test('check if scooter can be docked', () => {
        let scooter = new Scooter()
        app.dockScooter(scooter, 'brooklyn')

        // console.log(app)
        let findingStation = app.stations.brooklyn
        for(let i = 0; i < findingStation.length; i++) {
            expect(findingStation[i].station).toEqual('brooklyn')
        }
    })

    // test if dockScooter throws error when its already docked
    test('check if scooter is already docked', () => {
        let scooter = new Scooter()
        app.dockScooter(scooter, 'brooklyn')
        expect(() => {
            app.dockScooter(scooter, 'brooklyn')
            }).toThrow("scooter already at station")
    })

    test('check if station exists', () =>   {
        let scooter = new Scooter()
        expect(() => {
            app.dockScooter(scooter, 'bronx')
            }).toThrow("no such station")
    })



    // rent scooter

    test('check if scooter can be rented', () => {
        let scooter = new Scooter()
        app.dockScooter(scooter, 'brooklyn')
        app.rentScooter(scooter, 'allen')
        console.log(scooter)
        expect(scooter.user).toEqual('allen')
    })

    //test if user isnt null to throw error user is already renting a scooter
    test('check if user is already renting a scooter', () => {
        let scooter = new Scooter()
        app.dockScooter(scooter, 'brooklyn')
        app.rentScooter(scooter, 'allen')
        expect(() => {
            app.rentScooter(scooter, 'allen')
            }).toThrow("scoter already rented")
    })

})








const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

const app = new ScooterApp()
describe('Is app an object', () => {

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
    test('throw error if no such user is logged in', () => {
        expect(() => app.logoutUser('brady')).toThrow(`no such user is logged in`)
    })

    //if username isn't undefined registeredUsers[username].logout()
    test('check if user can be logged out', () => {
        app.registerUser('timmothy', '123', 18)
        app.loginUser('timmothy', '123')
        app.logoutUser('timmothy')
        expect(app.registeredUsers['timmothy'].loggedIn).toEqual(false)
    })

    //test if user password is incorrect to throw error Username or password is incorrect 
    test('check if user is logged in', () => {
        app.registerUser('brady', '123', 18)
        expect(() => {app.loginUser('bray', '1234', 18)}).toThrow(`Username or password is incorrect`)
    })

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
        const scooter = new Scooter("brooklyn");
        const user = new User("Sonam", "123", 23);
        const scooterList = app.stations["brooklyn"];
        scooterList.push(scooter);
        app.rentScooter(scooter, user);
        

    })



    //check if error throws for same user
    test('check if error throws for same user', () => {
        let scooter = new Scooter()
        app.dockScooter(scooter, 'brooklyn')
        app.rentScooter(scooter, 'allen')
        expect(() => app.rentScooter('allen')).toThrow('scooter already rented')
        console.log(scooter.user)
    })

    //print method should log all registered users and stations
    test('check if print method logs all registered users and stations', () => {
        expect(console.log(app.print())).toEqual(console.log(app.registeredUsers, app.stations))
    })

})








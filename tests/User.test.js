const User = require('../src/User')

// User tests here
describe('User object', () => {
    const user = new User()
    test('check if user is an object', () => {
      // edit this to be a real test!
      
      expect(typeof user).toEqual('object');
  
    })

    // test username
    test('check if user is a string', () => {
        // edit this to be a real test!
        expect(typeof user.username).toEqual('string');
    } )








    // test login
    test('check if user is logged in', () => {
        // edit this to be a real test!
        user.login(user.password)
        expect(user.loggedIn).toEqual(true);
    } )

    // test logout

    test('check if user is logged out', () => {
        user.logout()
        expect(user.loggedIn).toEqual(false)

  })

})

// test password

// test age

  

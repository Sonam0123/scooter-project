const User = require('../src/User')

// User tests here
describe('User object', () => {
    const user = new User()
    test('check if user is an object', () => {
      // edit this to be a real test!
      
      expect(typeof user).toEqual('object');
      
    })
    
    // test username
    user.username = 'joe'
    test('check if user is a string', () => {
        // edit this to be a real test!
        expect(typeof user.username).toEqual('string');
    } )

    user.password='aramis'
    // test login
    test('check if user is logged in', () => {
        // edit this to be a real test!
        user.login(user.password)
        expect(user.loggedIn).toEqual(true);
    } )
    
    //check if wrong password throws error
    test('check if wrong password throws error', () => {
        expect(() => {
            user.login('wrong password')
        }).toThrow('Username or password is incorrect')
    })

    // test logout

    test('check if user is logged out', () => {
        user.logout()
        expect(user.loggedIn).toEqual(false)

  })

})

// test password

// test age

  

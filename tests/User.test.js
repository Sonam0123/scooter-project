const User = require('../src/User')

// User tests here
describe('User object', () => {
    const user = new User()
    test('check if user is an object', () => {
      // edit this to be a real test!
      
      expect(typeof user).toEqual('object');
  
    })

    // test username
    test('Check if username is a string', () => {
        expect(typeof user.username).toEqual('String')
    })
  })


// test password

// test age

// test login

// test logout

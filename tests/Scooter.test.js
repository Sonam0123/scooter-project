const Scooter = require('../src/Scooter')
const User = require('../src/User')


describe('scooter object', () => {

  test('check if scooter is an object', () => {
    // edit this to be a real test!
    let scootie = new Scooter()
    expect(typeof scootie).toEqual('object');

  }
)
})
//Method tests
describe('scooter methods', () => {
  // tests here!
  const scooter = new Scooter();
  scooter.user = "allen"
  scooter.charge = 12
  scooter.isBroken = true
  scooter.station = "Brooklyn"

  //test scooter username

  test("scooter user name is correct", () => {
    expect(
      scooter.user
    ).toEqual('allen');

    
  });

  //rent method
  test("check if scooter can be rented", () => {
    expect(() => {
      scooter.rent(scooter.user)
    }).toThrow("scooter needs to charge or scooter needs repair.")
  });
  
  test('check if scooter is given to user', () => {
    scooter.charge = 100
    scooter.isBroken = false
    scooter.rent(scooter.user)
    expect(scooter.user).toEqual("allen")
  })

  test('check if station is null after rent', () => {
    scooter.charge = 100
    scooter.isBroken = false
    scooter.rent(scooter.user)
    expect(scooter.station).toBe(null)
  })
  


  //dock method
  test("Scooter must be returned to station", () => {
    const scooter = new Scooter()
    scooter.station = "Brooklyn"
    scooter.rent(scooter.user)
    scooter.dock("Brooklyn")
    expect(scooter.station).toEqual("Brooklyn")
    expect(scooter.user).toBe(null)
  });

  //requestRepair method
  test("Scooter must be repaired",async () => {
    await scooter.requestRepair()
    expect(scooter.isBroken).toBe(false)
  });


  //charge method
  test("charge", async () => {
    await scooter.recharge(); 
    expect(scooter.charge).toBe(100);
});

})

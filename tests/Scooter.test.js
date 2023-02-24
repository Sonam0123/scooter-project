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
  
  //test scooter username
  
  test("scooter user name is correct", () => {
    scooter.user = "allen"
    expect(
      scooter.user
    ).toEqual('allen');

    
  });

  test("renting a scooter with low charge throws an error", () => {
    scooter.charge = 19;
    expect(scooter.rent(scooter.user)).toThrowError('scooter needs to charge or scooter needs repair.');
  });

  //dock method
  test("Scooter must be returned to station", () => {
    const scooter = new Scooter("Brooklyn", "Nathaniel")
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

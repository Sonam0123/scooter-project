class Scooter {
  constructor(station) {
    this.station = String;
    this.user = null;
    this.serial = Number;
    this.nextSerial = Number;
    this.charge = Number;
    this.isBroken = Boolean;
  }
  // xq
  rent(user) {
    if(this.charge > 20 && this.isBroken === false) {
      this.station = null
      this.user = user
    }else if(this.charge < 20 && this.isBroken === true){
      throw new Error("scooter needs to charge or scooter needs repair.")
    }
  }

  dock(station) {
    this.station = station; 
    this.user = null;
  }

  async recharge() {
    console.log('Starting charge');
    
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    this.charge = 100

    console.log('Charge complete');   
}

  async requestRepair() {
    this.isBroken = true;
    console.log(`Scooter is broken. Repairing...`)
    await new Promise(resolve =>setTimeout(resolve, 2000));
      this.isBroken = false;
      console.log(`Scooter is now repaired.`)
  }

}


module.exports = Scooter
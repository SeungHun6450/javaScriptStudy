class Vehicle {
  constructor(name, wheel){
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log('myVehicle : ', myVehicle)

class Bycycle extends Vehicle {
  constructor(name, wheel){
    super(name, wheel)
  }
}
const myBycycle = new Bycycle('삼천리', 2)
const daughtersBicycle = new Bycycle('세발', 3)
console.log('myBycycle : ', myBycycle)
console.log('daughtersBicycle : ', daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license){
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)
console.log('myCar : ', myCar)
console.log('daughtersCar : ', daughtersCar)
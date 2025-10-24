"use strict";

const car = {
  producer: "Ford",
  model: "Focus 2",
  year: 2020,
  speed: 80,
  tank: 50,
  fuelConsumption: 7.3,
  drivers: ["Oleh", "Vitalik", "Taras"],
  showInfo: function () {
    return `${this.producer} ${this.model} ${this.year}, average speed - ${this.speed} km/h, fuel tank capacity - ${this.tank} l, average fuel consumption - ${this.fuelConsumption} l per 100 km`;
  },
  addDriver: function (name) {
    this.drivers.push(name);
    return `Welcome to our team of drivers, ${name}`;
  },
  calcTimeAndFuel: function (distance) {
    let driveTime = Math.round(distance / this.speed);
    let breaktime = Math.floor(driveTime / 4);
    let time = driveTime + breaktime;

    let fuel = driveTime * this.fuelConsumption;

    return `The drive will take approximately ${time} hours and ${fuel} l of fuel`;
  },
};

console.log(car.showInfo());
console.log(car.calcTimeAndFuel(200));
console.log(car.addDriver("Anton"));

console.log(car);

const time = {
  showTime: function (currTime = new Date()) {
    let hour = currTime.getHours();
    let min = currTime.getMinutes();
    let sec = currTime.getSeconds();

    return `${hour} : ${min} : ${sec}`;
  },
  changeSec: function (seconds) {
    let now = Date.now();
    let newTime = now + seconds * 100;

    return this.showTime(new Date(newTime));
  },
  changeMin: function (minutes) {
    let now = Date.now();
    let newTime = now + minutes * 100 * 60;

    return this.showTime(new Date(newTime));
  },
  changeHours: function (hours) {
    let now = Date.now();
    let newTime = now + minutes * 100 * 60 * 60;

    return this.showTime(new Date(newTime));
  },
};

console.log(time.showTime());
console.log(time.changeSec(120));
console.log(time.changeMin(120));

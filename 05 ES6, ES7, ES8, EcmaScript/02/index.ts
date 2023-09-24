//* Classes
// The old way
// function SuperHero(this: any, name: string, strength: number, speed: number, weapon: string, cape: boolean):void {
//   this.name = name;
//   this.strength = strength;
//   this.speed = speed;
//   this.weapon = weapon;
//   this.cape = cape;
//   // this.goodHero = true;
//   // this.powerUp = function(){
//   // 	this.strength += 5;
//   // }
// }

// SuperHero.prototype.goodHero = true;
// SuperHero.prototype.powerUp = function () {
//   this.strength += 5;
// };

// const hero1 = new (SuperHero as any)("Hank", 10, 5, "Fist", true);
// hero1.name = "Ed";
// hero1.powerUp();
// console.log({ hero1 }, typeof hero1);

// ES6
class SuperHero {
  // name: string;
  strength: number;
  speed: number;
  weapon: string;
  cape: boolean;
  constructor(_name: string, strength: number, speed: number, weapon: string, cape: boolean) {
    // this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.weapon = weapon;
    this.cape = cape;
  }
  powerUp() {
    this.strength += 5;
  }

  public get name() {
    console.log("Getting Name"); //* default public
    return name;
  }
  public set name(newName) {
    // console.log("Setting name"); //* default public
    this.name = newName;
  }
  static goodHero() {
    return true;
  }
}
console.log("SuperHero:", SuperHero);

const hero1: SuperHero = new SuperHero("Hank", 10, 5, "Fist", true);
// hero1.name = "Ed";
console.log({ hero1 }, typeof hero1);

const hankDetails = ["Hank", 10, 5, "Fist", true] as const;
const philDetails = ["Phil", 15, 1, "Fist2", false] as const;

const hero2 = new SuperHero(...hankDetails);
const hero3 = new SuperHero(...philDetails);
// hero2.name = "George"; // Error

hero2.powerUp();
hero2.speed = 2;

console.log({ hero2, hero3 });

class Human extends SuperHero {
  age: number;
  constructor(name: string, strength: number, speed: number, weapon: string, cape: boolean, age: number) {
    super(name, strength, speed, weapon, cape);
    this.age = age;
  }
}

const billDetails = ["Bill", 20, 20, "Fast Feet", true, 20] as const;
const bill = new Human(...billDetails);
console.log({ bill });

// class DoMath {
//   static add(x: number, y: number) {
//     return x + y;
//   }
//   static subtract(x: number, y: number) {
//     return x - y;
//   }
//   static square(x: number) {
//     return x * x;
//   }
// }

// const x = DoMath.add(2, 5);
// console.log({ x });
// console.log("DoMath.square(5):", DoMath.square(5));

//* Not New!
// const CARCOLOR = Symbol();
// console.log({ CARCOLOR });
// const CARMODEL = Symbol();
// const CARYEAR = Symbol();

// class Car {
//   constructor(color: string, model: string, year: number) {
//     // requires bracket syntax
//     this[CARCOLOR as unknown as keyof Car] = color;
//     this[CARMODEL as unknown as keyof Car] = model;
//     this[CARYEAR as unknown as keyof Car] = year;
//   }
//   get color() {
//     console.log("getting", this.color);
//     // @ts-ignore
//     return this[CARCOLOR];
//   }
//   set color(newColor) {
//     console.log("setting color", newColor);
//     this[CARCOLOR as unknown as keyof Car] = newColor;
//   }
// }

// const myCarDeets = ["red", "Volvo", 2018] as const;
// var myCar = new Car(...myCarDeets);
// // @ts-ignore
// console.log(myCar[CARCOLOR]);

//* Arrays
// for..of
const arr = [1, 2, 3, 10, 11, 12];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//* for..in
for (let key in arr) {
  console.log("for...in key:", key);
}

// const obj = {
//   name: "Rob",
//   occ: "teacher",
//   language: "JS",
// };

// for (let key in obj) {
//   console.log(key);
// }

// Array.prototype.forEach
// arr.forEach((value, i) => {
//   console.log("Value", value);
//   console.log("Index", i);
// });

//* for..in iterates over the keys of the iterator
for (let key in arr) {
  console.log("for in: key;", key);
}

//* for..of iterates over the value of the iterator
for (let value of arr) {
  console.log({ value });
}

// const str = `Robert Bunch`;
// for (let letter of str) {
//   console.log(letter);
// }

//* Array.from()
// const x = Array.from(`Robert`);
// console.log(x);

// const y = Array.from(`${3 + 5}49`);
// console.log(y);

const harry = `String1.`;
const lotr = `String2.`;
const orwell = `String3.`;

const lines = Array.from([harry, lotr, orwell], (line) => {
  return `<li>${line}</li>`;
});
console.log({ lines });

const numbers = Array.from([2, 3, 4], (num) => num + num);
console.log({ numbers });

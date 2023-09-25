//^ List of JS constructors
const a = new String();
const b = new Number();
const c = new Boolean();
const d = new Array();
const e = new Object();
const f = new Map();
const g = new WeakMap();
const h = new Set();
const i = new WeakSet();
const j = new RegExp("ab+c");
const k = new Date();
const l = new Error();
const m = new Blob();
const n = new File(["foo"], "foo.txt", { type: "text/plain" });
// const o = new FileReader(); //* WebApi
const p = new ArrayBuffer(8);
const r = new Intl.DateTimeFormat();
// console.log({ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r });

//* Example
// const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// console.log(new Intl.DateTimeFormat("en-US").format(date)); // Expected output: "12/20/2020"

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
// const arr = [1, 2, 3, 10, 11, 12];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//* for..in
// for (let key in arr) {
//   console.log("for...in key:", key);
// }

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
// for (let key in arr) {
//   console.log("for in: key;", key);
// }

// //* for..of iterates over the value of the iterator
// for (let value of arr) {
//   console.log({ value });
// }

// const str = `Robert Bunch`;
// for (let letter of str) {
//   console.log(letter);
// }

//* Array.from()
// const x = Array.from(`Robert`);
// console.log(x);

// const y = Array.from(`${3 + 5}49`);
// console.log(y);

// const harry = `String1.`;
// const lotr = `String2.`;
// const orwell = `String3.`;

// const lines = Array.from([harry, lotr, orwell], (line) => {
//   return `<li>${line}</li>`;
// });
// console.log({ lines });

// const numbers = Array.from([2, 3, 4], (num) => num + num);
// console.log({ numbers });

//* Array.of() and array.fill() /fill(value, start, end)/
// const array: number[] = Array.of(2, 3, 4, 5);
// console.log({ array });

// console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]

// const arr2 = [2, 4, 5, "a", 17, "r", 9, 9];
// arr2.fill("c", -3, -2);
// console.log({ arr2 });

//* Array.find() and array.findIndex()
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10); //* First elem or undefined if not found; Parameters: element, index, array
// console.log({ found }); // Expected output: 12

// const array2 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element: number) => element > 13; //* First index or -1 if not found; Parameters: element, index, array
// console.log(array2.findIndex(isLargeNumber)); // Expected output: 3

// const arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr: string[]) {
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (unique.indexOf(arr[i]) === -1) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }
// const arrReduced = removeDuplicates(arr);
// console.log({ arrReduced });

//* Map, Set, WeakMap, WeakSet
// const str = "string";
// const num = 3;
// const bool = true;
// const undef = undefined;
// const sym = Symbol("mySymbol");
// const myName = str; // Copy value of string
// console.log({ myName });

// // Object are stored by reference (reference points sth in memory)
// const obj = { name: "Popeye" } as { name: string; girlfriend?: string };
// const cartoon = obj;
// console.log(1, { obj, cartoon });
// cartoon.girlfriend = "Olive Oil";
// console.log(2, { obj, cartoon });

//* Map
// const myContacts = new Map();
// myContacts.set("Rob", "555-1234");
// const rob = myContacts.get("Rob");
// console.log({ rob });

// // Size property
// console.log(myContacts.size);

// for (let value of myContacts) {
//   console.log({ value });
// }

// Clear method (clear the map)
// myContacts.clear();
// console.log({ myContacts });

// entries method (get all the entries)
// console.log("myContacts.entries():", myContacts.entries());
// console.log("myContacts.keys():", myContacts.keys());
// console.log("myContacts.values():", myContacts.values());

//* WeakMap
{
  let aStrongMap = new Map();
  let friend = { name: `Jim` };
  aStrongMap.set(friend, `Best Friend`);
  console.log(aStrongMap.get(friend));
  // @ts-ignore
  friend = null;
  console.log(aStrongMap.entries());
}
{
  let aWeakMap = new WeakMap();
  let friend = { friend: `Bill` };
  aWeakMap.set(friend, `Best Friend`);
  console.log(aWeakMap.get(friend));
  // @ts-ignore
  friend = null;
  console.log(aWeakMap.get(friend));
}

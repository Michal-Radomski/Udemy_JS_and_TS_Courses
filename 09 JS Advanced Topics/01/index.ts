//* Currying
// const function1 = function () {
//   console.log("function1");
//   return function function2() {
//     console.log("function2");
//   };
// };
// function1()();

export {};
//* Functions are Objects!
// const report1 = function (val: string) {
//   console.log({ val });
// };

// const report2 = new Function("val", "console.log({val});");

// report1("expression");
// report2("constructor");

// // @ts-ignore
// report1.userName = "Steven";
// // @ts-ignore
// console.log("report1.userName:", report1.userName);

// const report3 = report1;
// console.log({ report3 });

// console.dir("report1:", report1);

//*  First Class Functions
// const sum = function (x: number, y: number) {
//   return x + y;
// };

// const run = function (fn: Function, a: number, b: number) {
//   console.log("fn(a, b):", fn(a, b));
// };

// run(sum, 10, 5);

// run(
//   function (x: number, y: number) {
//     return x * y;
//   },
//   10,
//   5
// );

//* Invoking Functions
//@ "strict": false
// //* Better method - pass argument then arguments as below
// const test = (num: number) => {
//   console.log({ num });
// };
// test(6);

// const sumIt = function (...arguments: number[]) {
//   console.log({ arguments });
//   console.log("this:", this);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log({ sum });
// };
// sumIt(1, 2, 3, 4, 5);
// sumIt();

//* Defining Objects: object literal or object contractor
// const obj = {
//   name: "Michal",
//   print: function () {
//     console.log("this:", this);
//   },
// };

// const obj2 = new Object() as { name: string; print: () => void };
// obj2.name = "Michal";
// obj2.print = function () {
//   console.log("this:", this);
// };

// console.log({ obj, obj2 }, typeof obj, typeof obj2, obj === obj2, obj.name === obj2.name);
// obj.print();
// obj2.print();

// console.log("name" in obj);
// console.log("print" in obj2);
// console.log('obj.hasOwnProperty("name"):', obj.hasOwnProperty("name"));

//* This (is determined in run time!)
// function getThis(this: any) {
//   return this;
// }

// const obj1 = { name: "obj1" } as { name: string; getThis: Function };
// const obj2 = { name: "obj2" } as { name: string; getThis: Function };

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
// console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

//* Examining this with Normal Function Invocation
//@ "strict": false
// var name = "global";
// console.log({ name });

// var runIt = function (fn: Function) {
//   var name = "runIt";
//   console.log({ name });
//   console.log("From runIt ---");
//   console.log(1, "this:", this);
//   console.log(this?.name);
//   fn();
// };

// runIt(function fun2() {
//   var name = "fun2";
//   console.log({ name });
//   console.log("From fun2 --");
//   console.log(2, "this:", this);
//   console.log(this?.name);
// });

// console.log("this:", this);

//* Normal Function Invocation Using strict mode
// ("use strict");
// var name = "global";
// console.log({ name });

// var fun = function (this: any) {
//   var name = "fun";
//   console.log({ name });
//   console.log("this:", this);
//   console.log(this?.name);
// };
// fun();

//* Method Invocation
// const name = "global";

// const obj1 = {
//   name: "obj1",
//   fun1: function () {
//     console.log("From fun1 in obj1 --");
//     console.log(1, this);
//     console.log(2, this.name);
//   },
// };
// obj1.fun1();

// const obj2 = {
//   name: "obj2",
//   fun2: obj1.fun1,
// };
// obj2.fun2();

// const fun3 = function (this: any) {
//   console.log("From fun3 --");
//   console.log(3, this);
//   console.log(4, this?.name);
// };
// // this?.fun3();
// fun3();

// var obj3 = {
//   name: "obj3",
//   fun3: fun3,
// };
// obj3.fun3();

// console.log(5, this);

// const obj4 = {
//   name: "obj4",
//   obj5: {
//     name: "obj5",
//     fun5: function () {
//       console.log("From fun5 in obj 5 --");
//       console.log(6, this);
//       console.log(7, this.name);
//     },
//   },
// };
// obj4.obj5.fun5();

// const fun6 = function () {
//   console.log(8, "fun6");
// };

// Object.defineProperties(fun6, {
//   name: {
//     value: "fun6",
//     writable: true,
//   },
// });
// fun6.name = "fun6_2";
// fun6();

// fun6.fun7 = function () {
//   console.log(9, "From fun7 in fun6 --");
//   console.log(10, this);
//   console.log(11, this.name);
// };

// fun6.fun7();

//* Understanding Prototypes
// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };
// myObject.greet(); // Greetings from Madrid

// const myDate = new Date();
// let object = myDate;
// do {
//   object = Object.getPrototypeOf(object);
//   console.log("object:", object);
// } while (object);

// console.log("typeof null, typeof undefined:", typeof null, typeof undefined);

// const obj = {};
// console.log("obj:", obj);
// console.log(obj.toString); // [Function: toString]
// console.log(obj.hasOwnProperty); // [Function: hasOwnProperty]
// console.log(obj.valueOf); // [Function: valueOf]
// console.log(obj.constructor); // [Function: Object]
// console.log((obj as any).__proto__); // [Object: null prototype] {}
// console.log("toString" in obj);
// console.log(obj.hasOwnProperty("toString"));

// const obj2 = Object.create(null);
// console.log("obj2:", obj2);
// console.log(obj2.toString); // undefined
// console.log(obj2.hasOwnProperty); // undefined
// console.log(obj2.valueOf); // undefined
// console.log(obj2.constructor); // undefined
// console.log(obj2.__proto__); // undefined
// console.log("toString" in obj2);

// const arr = [] as any[];
// console.log("arr.toString():", arr.toString(), JSON.stringify(arr));
// console.log("arr.__proto__:", (arr as any).__proto__);
// console.log("arr.__proto__.__proto__:", (arr as any).__proto__.__proto__);
// console.log("arr.__proto__.__proto__.__proto__:", (arr as any).__proto__.__proto__.__proto__);

// const obj3 = {};
// console.log("obj3.toString():", obj3.toString(), JSON.stringify(obj3));
// console.log("obj3.__proto__:", (obj3 as any).__proto__);
// console.log("obj3.__proto__.__proto__:", (obj3 as any).__proto__.__proto__);

//* Prototype of Functions
// const test = function () {
//   console.log("test");
// };
// test();
// console.log("test.__proto__:", (test as any).__proto__);
// console.log("test.__proto__.__proto__:", (test as any).__proto__.__proto__);
// console.log("test.__proto__.__proto__.__proto__:", (test as any).__proto__.__proto__.__proto__);
// console.log("typeof test:", typeof test);

// const test2 = () => {
//   console.log("test2");
// };
// test2();
// console.log("test2.__proto__:", (test2 as any).__proto__);
// console.log("test2.__proto__.__proto__:", (test2 as any).__proto__.__proto__);
// console.log("test2.__proto__.__proto__.__proto__:", (test2 as any).__proto__.__proto__.__proto__);
// console.log("typeof test2:", typeof test2);

//* Call and Apply -> to define this!
// const greetingsFunk = function (this: any, name: string) {
//   console.log("Good Morning");
//   console.log("this:", this);
//   console.log({ name });
// };
// greetingsFunk("function");
// greetingsFunk.call(this, "call");
// greetingsFunk.apply(this, ["apply"]);

// const user1 = {
//   firstName: "John",
//   lastName: "Anderson",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const user2 = {
//   firstName: "Sarah",
//   lastName: "West",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const greeting = function (this: any, term: string, punct: string) {
//   console.log(term + " " + this.firstName + punct);
// };
// greeting.apply(user1, ["Good Morning", "!"]);
// greeting.apply(user2, ["Good Afternoon", "!"]);

// console.log("user1.fullName.call(user2):", user1.fullName.call(user2));

//* Bind -> to determine value of this!
// const user1 = {
//   firstName: "John",
//   lastName: "Anderson",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const user2 = {
//   firstName: "Sarah",
//   lastName: "West",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const greeting = function (this: any, term: string, punct: string) {
//   console.log(term + " " + this.firstName + punct);
// };

// const morningGreet = greeting.bind(user1, "Good Morning");
// const afternoonGreet = greeting.bind(user1, "Good Afternoon");

// morningGreet("!");
// afternoonGreet(".");
// morningGreet.call(user2, "!"); //* Apply doesn't work here!!!

//* Functions as Constructors: The Magic of new
// const Greeting = function (this: any, name: string) {
//   this.name = name;
//   this.greet = function () {
//     console.log(`Hi ${name}!`);
//   };
// };

// const greet1 = new (Greeting as any)("Michal");
// const greet2 = new (Greeting as any)("Michal2");
// greet1.greet();
// greet2.greet();

// console.log({ greet1, greet2 }, typeof greet1, greet2 instanceof Greeting);

//* Constructor Invocation and the Value of this
// function Users(this: any, fName: string, lName: string) {
//   this.firstName = fName;
//   this.lastName = lName;
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// const user1 = new (Users as any)("James", "Johnson");
// const user2 = new (Users as any)("Mary", "Smith");
// console.log("user1.fullName():", user1.fullName());
// console.log("user2.fullName():", user2.fullName());

// console.log("user1:", user1, typeof user1, user1 instanceof Users);
// console.log("user2.__proto__.__proto__.__proto__:", (user2 as any).__proto__.__proto__.__proto__);

//* Higher Order Functions, Callbacks and the Problem with this
// const firstName = "James",
//   lastName = "West";

// const that: any = this;
// console.log({ that }, that === this);

// const user = {
//   firstName: "Mich",
//   lastName: "Rad",
//   fullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
//   fullName2: function () {
//     console.log(firstName + " " + lastName);
//   },
//   fullName3: function () {
//     console.log(that?.firstName + " " + that?.lastName);
//   },
// };

// user.fullName();
// user.fullName2();
// user.fullName3();

//* Arrow Functions -> lexical this! -> where is this!
// const user1 = {
//   firstName: "Cory",
//   lastName: "Sikahema",
// };

// const user2 = {
//   firstName: "Hailey",
//   lastName: "Smith",
// };

// const fullName = function (this: any) {
//   setTimeout(() => {
//     console.log(this?.firstName + " " + this?.lastName);
//   }, 2000);
// };

// fullName.call(user1);
// fullName.call(user2);

// console.log("globalThis:", globalThis, typeof globalThis);

//* DRY coding
// const sum = function (arr: number[]): number {
//   console.log("arr:", arr);
//   let total = 0;
//   while (arr.length > 0) {
//     total += arr.pop()!;
//   }
//   return total;
// };

// const findMultiple = function (start: number, end: number, multiple: number): number[] {
//   const results = [] as number[];

//   while (start <= end) {
//     if (start % multiple === 0) {
//       results.push(start);
//     }
//     start++;
//   }
//   return results;
// };

// console.log("sum(findMultiple(1, 100, 3)):", sum(findMultiple(1, 100, 3)));

//* Working with Objects
//* Properties
// const person = {
//   firstName: "Steven",
//   lastName: "Hancock",
//   email: "shancock@allthingsjavascript.com",
//   type: "admin",
//   active: true,
//   address: {
//     street: "100 N. Main",
//     zip: 10001,
//   },
// };

// for (let prop in person) {
//   console.log("Name: " + prop);
//   console.log("Value: " + person[prop as keyof typeof person].toString());
// }

// console.log("Object.keys(person):", Object.keys(person));
// console.log("Object.values(person):", Object.values(person));
// console.log("Object.entries(person):", Object.entries(person));

// console.log('person.propertyIsEnumerable("firstName"):', person.propertyIsEnumerable("firstName"));

//* Changing Property Attributes
// const obj = {
//   type: "rectangle",
//   width: 10,
//   height: 5,
// };
// console.log("obj:", obj);
// console.log('obj.propertyIsEnumerable("type"):', obj.propertyIsEnumerable("type"));

// for (let prop in obj) {
//   console.log(1, "Name: " + prop);
//   console.log(1, "Value: " + obj[prop as keyof typeof obj]);
// }

// Object.defineProperty(obj, "type", { enumerable: false });

// console.log('obj.propertyIsEnumerable("type"):', obj.propertyIsEnumerable("type"));

// for (let prop in obj) {
//   console.log(2, "Name: " + prop);
//   console.log(2, "Value: " + obj[prop as keyof typeof obj]);
// }

// console.log("Object.keys(obj):", Object.keys(obj)); //* "type" not listed because it is not enumerable!

// Object.defineProperty(obj, "type", { writable: false });
// Object.defineProperty(obj, "type", { configurable: false });

//* Exercise
// function Human(this: any, name: string, level: number) {
//   this.name = name;
//   this.level = level;
// }

// function SuperHero(this: any, name: string, level: number) {
//   Human.call(this, name, level);
// }

// //* instead of: class SuperHero extends Human {}
// Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Human.prototype.speak = function () {
//   return `${this.name} says hello.`;
// };

// SuperHero.prototype.fly = function () {
//   return `${this.name} is flying.`;
// };

// const superMan = new (SuperHero as any)("Clark Kent", 1);

// console.log("superMan.fly():", superMan.fly());
// console.log("superMan.speak():", superMan.speak());

// const object1 = {} as { property1: number };
// object1.property1 = 42;

// console.log("object1.hasOwnProperty('property1'):", object1.hasOwnProperty("property1")); // Expected output: true
// console.log("object1.hasOwnProperty('toString'):", object1.hasOwnProperty("toString")); // Expected output: false
// console.log("object1.hasOwnProperty('hasOwnProperty'):", object1.hasOwnProperty("hasOwnProperty")); // Expected output: false

//* Making Objects Immutable
// interface Obj {
//   firstName: string;
//   lastName: string;
//   startDate: string;
//   type?: string;
//   newProp?: boolean;
// }

// const obj: Obj = {
//   firstName: "Steven",
//   lastName: "Smith",
//   startDate: "January 10, 2015",
//   type: "admin",
// };

// // Object.defineProperty(obj, "startDate", {
// //   writable: false,
// // });
// // obj.startDate = "new start";

// // Object.seal(obj);
// // obj.firstName = "Steve"; //* Ok

// Object.freeze(obj);
// // obj.newProp = true;
// // delete obj.type;

// console.log("obj:", obj);

//* ES6 Object Features
// const multiple = 5;
// const objES5 = {
//   start: 1,
//   end: 100,
//   multiple: multiple,
//   print: function () {
//     console.log("this.start, this.end ,this.multiple:", this.start, this.end, this.multiple);
//   },
// };
// console.log({ objES5 });
// objES5.print();

//* ES6
// interface Obj {
//   firstName?: string;
//   lastName?: string;
//   fullName?: Function;
// }

// const objProto: Obj = {
//   fullName() {
//     console.log(`${this.firstName!} ${this.lastName!}`);
//   },
// };
// const objChild: Obj = { firstName: "Michal", lastName: "Rad" };
// Object.setPrototypeOf(objChild, objProto);
// //* V1
// // if (objChild.fullName) {
// //   objChild.fullName();
// // }
// //* V2
// objChild.fullName?.();

// const test = "test";
// const obj = {
//   start: 0,
//   test,
//   print() {
//     console.log("this.start, this.test:", this.start, this.test);
//   },
// };
// const obj1 = {
//   a: 5,
// };
// const obj2 = {
//   b: 10,
// };
// const obj3 = {
//   c: 15,
// };

// Object.assign(obj, obj1, obj2, obj3);
// console.log({ obj });
// obj.print();

//* Method Chaining
// const str = "The course starts in October, 2018. ";
// const str1 = str.replace("2018", "2020").toUpperCase().trim();
// console.log({ str1 });

const fruits = ["apple", "pear", "peach"];
const fruitsStr = fruits.concat("oranges", "kiwi").sort().join(" - ").toUpperCase();
console.log({ fruitsStr });

const student = {
  fName: "Steven",
  lName: "Hancock",
  score: [] as number[],
  total: 0,
  average: 0,
  addScore: function (val: number) {
    this.score.push(val);
    return this;
  },
  doTotal: function () {
    this.total = this.score.reduce(function (x, y) {
      return x + y;
    }, 0);
    return this;
  },
  doAverage: function () {
    this.average = Number((this.total / this.score.length).toFixed(1));
    return this;
  },
};

// student.addScore(100);
// student.addScore(80);
// student.addScore(95);
// student.doTotal();
// student.doAverage();
// console.log("student:", student.score, student.average, student.total);

student.addScore(100).addScore(80).addScore(95).doTotal().doAverage();
console.log("student:", student.score, student.average, student.total);

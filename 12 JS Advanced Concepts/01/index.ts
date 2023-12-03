//@ JS Foundation
//* Don't use 'with'
// with ([1, 2, 3]) {
//   console.log(toString()); // 1,2,3
// }

//* Stack Overflow
// let i = 0;
// function recurse() {
//   i++;
//   recurse();
// }

// try {
//   recurse();
// } catch (err) {
//   console.log("maxStackSize = " + i + "\nerror: " + err);
// }

// console.log("globalThis:", globalThis); // global API

//@ JS Foundation 2
//* Execution Context -> Creation Phase
// Global context + context for every function

// console.log(this === window); // In browser: true
// console.log(this===global) // In node: true
// console.log(global===globalThis) // In node: true

//* Lexical Environment -> where you write something
//* Execution Phase -> Runs the code

//* Hoisting -> avoid hoisting -> use let/ const!
// var teddy;
// sign();
// // var teddy = undefined
// // @ts-ignore
// console.log(teddy);
// function sign() {
//   console.log("Ohh la la la");
// }
// var teddy = "bear";

// var one = 1;
// var one = 2;
// console.log({ one });

//* Function invocation / call / execution
// function marry(person1: string, person2: string) {
//   // console.log("arguments:", arguments); //* Not tu use arguments!
//   console.log("Array.from(arguments):", Array.from(arguments)); //* Better
//   return `${person1} is now married to ${person2}`;
// }
// console.log(marry("Tim", "Tine"));

// function marry2(...args: string[]) {
//   console.log("args:", args); //* Can be used
//   console.log(Array.from(arguments)); //* Can be used
//   return `${args[0]} is now married to ${args[1]}`;
// }
// console.log(marry2("Tim", "Tine"));

//* Variable Environment
// function two() {
//   var isValid; // 5. isValid is undefined in this execution context.
// }

// function one() {
//   var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
//   two(); // 4. New execution context created.
// }

// var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
// one(); // 2. New execution context is created on top of the stack.
// console.log({ isValid }); // false

//* Scope Chain
// var global_variable = "GeeksForGeeks";

// // First function...
// function first_function() {
//   return global_variable;
// }

// // Second function...
// function second_function() {
//   return first_function();
// }

// console.log(second_function()); // GeeksForGeeks

// function sayMyName() {
//   var a = "a";
//   return function findName() {
//     var b = "b";
//     return function printName() {
//       var c = "c";
//       // console.log(a);
//       return "Andrei Neagoie";
//     };
//   };
// }
// console.log(sayMyName()()()); // Andrei Neagoie

// function findName() {
//   var b = "b";
//   return printName();
// }

// function printName() {
//   var c = "c";
//   return "Andrei Neagoie";
// }

// function sayMyName2() {
//   var a = "a";
//   return findName();
// }
// console.log(sayMyName2()); // Andrei Neagoie

// function weird() {
//   const height = 50;
//   return height;
// }
// console.log(weird()); // 50

// const test = function test2() {
//   console.log("test");
// };
// test();
// test2() //* // Error! because it is enclosed in its own scope.

//* Eval() -> don't use it
// console.log(eval("2 + 2")); // Expected output: 4
// console.log(eval("2 + 2") === eval("4")); // Expected output: true
// console.log(eval("2 + 2") === eval(new String("2 + 2") as any)); // Expected output: false

//* Function vs Block Scope
// function loop() {
//   for (var i = 0; i < 5; i++) {
//     console.log(1, { i });
//   }
//   console.log("final", { i });
// }
// loop();

// function loop2() {
//   for (let i = 0; i < 5; i++) {
//     console.log(3, { i });
//   }
//   // console.log({i}) // Error
// }
// loop2();

//* Global Variable are bad!

//* IIFE
// (function (value: string) {
//   const greet = "Hello"; //* Private Data
//   console.log(`${greet} ${value}`);
// })("IIFEs");

// One global variable inside can be many variables
// const script = (function () {
//   function a() {
//     return 5;
//   }
//   return { a: a };
// })();
// console.log("script.a():", script.a()); // 5

//* This
// 1. Gives methods access to their object
// const obj = {
//   name: "Billy",
//   sing: function () {
//     return "Ulalala " + this.name + "!";
//   },
//   singAgain: function () {
//     return this.sing();
//   },
// };
// console.log("obj.sing():", obj.sing()); // Ulalala Billy!
// console.log("obj.singAgain():", obj.singAgain()); // Ulalala Billy!

// // 2. Execute code for multiple object
// function importantPerson(this: any) {
//   console.log(this.name);
// }

// const obj1 = { name: "Cassy", importantPerson: importantPerson };
// const obj2 = { name: "Jacob", importantPerson: importantPerson };

// obj1.importantPerson(); // Cassy
// obj2.importantPerson(); // Jacob

//* Exercise:
// const a = function (this: any) {
//   console.log(1, this);
//   const b = function (this: any) {
//     console.log(2, this);
//     const c = {
//       hi: function () {
//         console.log(3, this);
//       },
//     };
//     c.hi();
//   };
//   b();
// };
// a();

// const obj = {
//   name: "Billy",
//   sing: function () {
//     console.log(4, this); // Object.
//     const anotherFunc = () => {
//       console.log(5, this); // Arrow function are lexically bounded -> object
//     };
//     anotherFunc();
//     const anotherFunc2 = function (this: any) {
//       console.log(6, this); // Global window here
//     };
//     anotherFunc2();

//     const that = this;
//     const anotherFunc3 = function () {
//       console.log(7, that); // Object
//     };
//     anotherFunc3();
//   },
// };
// obj.sing();

//* Call(), Apply(), Bind()
// function a() {
//   console.log("a");
// }
// a.call(null); // a
// a.apply(null); // a

// const wizard = {
//   name: "Merlin",
//   health: 100,
//   heal: function (num1: number, num2: number) {
//     this.health += num1 + num2;
//   },
// };

// const archer = {
//   name: "Robin Hood",
//   health: 50,
// };
// console.log(1, "archer:", archer); // archer: { name: 'Robin Hood', health: 50 }

// wizard.heal.call(archer, 50, 60);
// console.log(2, "archer:", archer); // archer: { name: 'Robin Hood', health: 160 }
// wizard.heal.apply(archer, [20, 30]);
// console.log(3, "archer:", archer); // archer: { name: 'Robin Hood', health: 210 }

// // Function borrowing
// const healArcher = wizard.heal.bind(archer, 50, 60);
// console.log(4, "archer:", archer); // archer: { name: 'Robin Hood', health: 210 }
// healArcher();
// console.log(5, "archer:", archer); // archer: { name: 'Robin Hood', health: 320 }

//* Exercise
// const array = [1, 2, 3];

// function getMaxNumber(arr: number[]) {
//   return Math.max.apply(null, arr);
// }
// console.log("getMaxNumber(array):", getMaxNumber(array)); // 3

//* Bind() and currying
// function multiply(a: number, b: number) {
//   return a * b;
// }

// const multipleByTwo = multiply.bind(this, 2); //* a = 2
// console.log("multipleByTwo(4):", multipleByTwo(4)); // 8

// const multipleByThree = multiply.bind(this, 3); //* a = 3
// console.log("multipleByThree(4):", multipleByThree(4)); // 12

//* Exercise
// const b = {
//   name: "jay",
//   say() {
//     console.log(1, this);
//   },
// };

// const c = {
//   name: "jay",
//   say() {
//     return function (this: any) {
//       console.log(2, this);
//     };
//   },
// };

// const d = {
//   name: "jay",
//   say() {
//     return () => console.log(3, this);
//   },
// };

// b.say(); // Object
// console.log("c.say():", c.say()); // Function
// c.say()(); // Window object
// console.log("d.say():", d.say()); // Function
// d.say()(); // Object

//* Exercise2
// const character = {
//   name: "Simon",
//   getCharacter() {
//     return this.name;
//   },
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);
// console.log("->", giveMeTheCharacterNOW()); // -> Simon

//@ Types in JS
//* Infinity
// const maxNumber = Math.pow(10, 1000); // Max positive number
// if (maxNumber === Infinity) {
//   console.log("Let's call it Infinity!"); // Expected output: "Let's call it Infinity!"
// }
// console.log("1 / maxNumber:", 1 / maxNumber); // Expected output: 0

//* JS Types
// Standard build-in objects in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// Primitive type
// console.log("typeof 5:", typeof 5); //* number
// console.log("typeof true:", typeof true); //* boolean
// console.log('typeof "To be or not to be":', typeof "To be or not to be"); //* string
// console.log("typeof undefined:", typeof undefined); //* undefined
// console.log("typeof null:", typeof null); //* object -> this is error
// console.log('typeof Symbol("Test"):', typeof Symbol("Test")); //* symbol
// const hugeString = BigInt("9007199254740991");
// console.log("hugeString:", hugeString, typeof hugeString); //* 9007199254740991n bigint

// // Non-primitive: functions and arrays and objects are objects!
// console.log("typeof {}:", typeof {}); //* object
// console.log("typeof []:", typeof []); //* object
// console.log("typeof function(){}:", typeof function () {}); //* function

// console.log("true.toString() === Boolean(true).toString():", true.toString() === Boolean(true).toString()); //* true
// console.log("typeof Infinity:", typeof Infinity); //* number

// //* Array.isArray()
// console.log("Array.isArray([1, 3, 5]):", Array.isArray([1, 3, 5])); // Expected output: true

//* Pass By Value vs Pass By Reference
// const a = 5;
// let b = a;
// b++;
// console.log({ a, b });

// const c = [1, 2, 3];
// const d = c;
// d.push(4);
// console.log({ c }); //* [1,2,3,4]
// console.log({ d }); //* [1,2,3,4]

// const obj = {
//   a: "a",
//   b: "b",
//   c: {
//     deep: "Try and copy me",
//   },
// };
// const clone = Object.assign({}, obj); //* Shallow copy
// const clone2 = { ...obj }; //* Shallow copy
// const deepClone = JSON.parse(JSON.stringify(obj)); //* Deep copy!
// obj.c.deep = "Hahaha";
// obj.a = "ABC";

// console.log({ obj }); //* { a: 'ABC', b: 'b', c: { deep: 'Hahaha' } }
// console.log({ clone }); //* { a: 'a', b: 'b', c: { deep: 'Hahaha' } }
// console.log({ clone2 }); //* { a: 'a', b: 'b', c: { deep: 'Hahaha' } }
// console.log({ deepClone }); //* { a: 'a', b: 'b', c: { deep: 'Try and copy me' } }

//* structuredClone()
//* no_1
// const mushrooms1 = {
//   amanita: ["muscaria", "virosa"],
// };

// const mushrooms2 = structuredClone(mushrooms1);
// mushrooms2.amanita.push("pantherina");
// mushrooms1.amanita.pop(); // Removes the last elem

// console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
// console.log(mushrooms1.amanita); // ["muscaria"]

//* no_2
// const buffer1 = new ArrayBuffer(16); // Create an ArrayBuffer with a size in bytes
// const object1 = {
//   buffer: buffer1,
// };
// console.log({ buffer1, object1 });

// const object2 = structuredClone(object1, { transfer: [buffer1] }); // Clone the object containing the buffer, and transfer it
// console.log("object1:", object1);
// console.log("object2", object2);

// const int32View2 = new Int32Array(object2.buffer); // Create an array from the cloned buffer
// console.log("int32View2:", int32View2);
// int32View2[0] = 42;
// console.log("int32View2:", int32View2);

// console.log("object1.buffer:", object1.buffer);
// // const int32View1 = new Int32Array(object1.buffer); //* Creating an array from the original buffer throws a TypeError

//* no_3
// const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }); // 16MB = 1024 * 1024 * 16
// const transferred = structuredClone(uInt8Array, {
//   transfer: [uInt8Array.buffer],
// });
// console.log("uInt8Array.byteLength:", uInt8Array.byteLength); // 0

//* Exercise
// const user1 = { name: "nerd", org: "dev" };
// const user2 = { name: "nerd", org: "dev" };
// console.log("JSON.stringify(user1) === JSON.stringify(user2):", JSON.stringify(user1) === JSON.stringify(user2)); //* true

//* Exercise2
// const number = 100;
// const string = "Jay";
// const obj1 = {
//   value: "a",
// };
// const obj2 = {
//   value: "b",
// };

// function change(number: number, string: string, obj1: { value: string }, obj2: { value: string }) {
//   number = number * 10;
//   string = "Pete";
//   obj1 = obj2;
//   obj2.value = "c";
// }
// change(number, string, obj1, obj2);

// console.log(number); //* 100
// console.log(string); //* Jay
// console.log(obj1.value); //* a

//* Type Coercion * Object.is()
//! https://dorey.github.io/JavaScript-Equality-Table
// // @ts-ignore
// console.log('1 == "1":', 1 == "1"); //* true
// // @ts-ignore
// console.log('1 === "1":', 1 === "1"); //* false

// console.log("-0===+0:", -0 === +0); //* true
// console.log("Object.is(-0, 0):", Object.is(-0, 0)); //* false

// const obj = {};
// console.log("Object.is(obj, {}):", Object.is(obj, {})); // Expected output: false

//* Exercise!!!
// if ([]) {
//   console.log("[] is truthy"); // [] is truthy
// }
// // @ts-ignore
// if ([] == false) {
//   console.log("[] == false"); // [] == false
// }

//@ Closures and Prototypal Inheritance
//* Functions are Objects
// const obj = {
//   two() {
//     console.log("2");
//   },
// };
// obj.two(); // 2

// const four = new Function("num", "return num");
// console.log("four(4):", four(4)); // 4

//*  First Class Citizens
// const stuff = function () {};
// stuff();

// function a(fn: Function) {
//   fn();
// }
// a(() => console.log("Test"));

// function b() {
//   return function c() {
//     console.log("Test2");
//   };
// }
// b()();

// //* Default param value
// function d(param = 6) {
//   return param * 2;
// }
// console.log("d():", d()); // 12

//* Higher Order Functions: return a function or pass function as argument
// const giveAccessTo = (name: string) => "Access Granted to " + name;

// function authenticate(person: { name: string }) {
//   return giveAccessTo(person.name);
// }
// console.log(authenticate({ name: "Michal" })); //* Access Granted to Michal

// // Generic function
// function letPerson(person: { level: string; name?: string }, fn: Function) {
//   if (person.level === "admin") {
//     return fn(person);
//   } else if (person.level === "user") {
//     return fn(person);
//   }
// }
// console.log(
//   'letPerson({level: "admin", name:"Michal"}, authenticate):',
//   letPerson({ level: "admin", name: "Michal" }, authenticate)
// ); //* Access Granted to Michal

// function sing(person: { name: string }) {
//   return "My name is " + person.name;
// }
// console.log('letPerson({ level: "user", name: "Tim" }, sing):', letPerson({ level: "user", name: "Tim" }, sing)); //* My name is Tim

//* Exercise
//* V1
// const multiplyBy = (num1: number) => {
//   return function (num2: number) {
//     // return num1 * num2;
//     console.log(`${num1} * ${num2} = ${num1 * num2}`);
//   };
// };

// const multiplyByTwo = multiplyBy(2);
// const multiplyByFour = multiplyBy(4);

// multiplyByTwo(4); //* 2 * 4 = 8
// multiplyByFour(5); //* 4 * 5 = 20

// //* V2
// const multiplyBy2 = (num1: number) => (num2: number) => console.log(`${num1} * ${num2} = ${num1 * num2}`);
// const multiplyByTwo2 = multiplyBy2(2);
// const multiplyByFour2 = multiplyBy2(4);

// multiplyByTwo2(4); //* 2 * 4 = 8
// multiplyByFour2(5); //* 4 * 5 = 20

//* Closures
// (function a() {
//   const grandpa = "grandpa";
//   return function b() {
//     const father = "father";
//     return function c() {
//       const son = "son";
//       // return `${grandpa} > ${father} > ${son}`;
//       console.log(1, `${grandpa} > ${father} > ${son}`);
//     };
//   };
// })()()();

// // Closures and higher order function
// function boo(string: string) {
//   return function (name: string) {
//     return function (name2: any) {
//       console.log(2, `Hi ${string} ${name} ${name2}`);
//     };
//   };
// }
// boo("hi2")("john")("tanya");

// const boo2 = (string: string) => (name: any) => (name2: any) => console.log(3, `Hi ${string} ${name} ${name2}`);
// boo2("hi2")("john")("tanya");

// const booString = boo2("Sing");
// const booStringName = booString("John");
// booStringName("Tanya");

//* Exercise
// (function callMeMaybe() {
//   let callMe = "Hi!";
//   setTimeout(function () {
//     console.log({ callMe, callMe2 });
//   }, 4000);
//   callMe = "Hi2!!!";
//   const callMe2 = "Hello";
// })();

//* Closures and Memory
// function heavyDuty(index: number) {
//   const bigArray = new Array(60).fill("😄");
//   console.log("Created!", "bigArray:", bigArray);
//   return bigArray[index];
// }
// console.log("heavyDuty(50):", heavyDuty(50)); //* bigArray is created 3x!
// console.log("heavyDuty(51):", heavyDuty(51)); //* bigArray is created 3x!
// console.log("heavyDuty(52):", heavyDuty(52)); //* bigArray is created 3x!

// const getHeavyDuty = heavyDuty2();
// console.log("getHeavyDuty(50):", getHeavyDuty(50)); //* bigArray is created only once!
// console.log("getHeavyDuty(51):", getHeavyDuty(51)); //* bigArray is created only once!
// console.log("getHeavyDuty(52):", getHeavyDuty(52)); //* bigArray is created only once!

// function heavyDuty2() {
//   const bigArray = new Array(60).fill("😄");
//   console.log("Created Again!", "bigArray:", bigArray);
//   return function (index: number) {
//     return bigArray[index];
//   };
// }

//* Closures and Encapsulation
// function BankAccount(accountNumber: string, accountHolderName: string, balance: number) {
//   const _accountNumber = accountNumber;
//   const _accountHolderName = accountHolderName;
//   let _balance = balance;

//   function showAccountDetails() {
//     console.log(`Account Number: ${_accountNumber}`);
//     console.log(`Account Holder Name: ${_accountHolderName}`);
//     console.log(`Balance: ${_balance}`);
//   }

//   function deposit(amount: any) {
//     _balance += amount;
//     showAccountDetails();
//   }

//   function withdraw(amount: number) {
//     if (_balance >= amount) {
//       _balance -= amount;
//       showAccountDetails();
//     } else {
//       console.log("Insufficient Balance");
//     }
//   }

//   return {
//     deposit: deposit,
//     withdraw: withdraw,
//   };
// }

// const myBankAccount = BankAccount("123456", "John Doe", 1000);
// myBankAccount.deposit(500); // Output: Account Number: 123456 Account Holder Name: John Doe Balance: 1500
// myBankAccount.withdraw(2000); // Output: Insufficient Balance

//* Exercise 1
// let view;
// function initialize() {
//   let called = 0;
//   return function () {
//     if (called > 0) {
//       return;
//     } else {
//       view = "🏔";
//       called++;
//       console.log("View has been set!", { called });
//     }
//   };
// }

// const start = initialize();
// start();
// start();
// start();
// console.log({ view }); //* Function ran only once!

//* Exercise2
// const array = [1, 2, 3, 4];
// setTimeout(function () {
//   for (var i = 0; i < array.length; i++) {
//     console.log("I am at index ", array[i]);
//   }
// }, 3000);

// for (let i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index ", array[i]);
//   }, 3000);
// }

// for (var i = 0; i < array.length; i++) {
//   (function (closureI) {
//     setTimeout(function () {
//       console.log("I am at index ", array[closureI], closureI);
//     }, 3000);
//   })(i);
// }

//* Prototypal Inheritance
//- __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
//- prototype is the object that is used to build __proto__ when you create an object with new

// const arr = [] as any;
// console.log("arr.__proto__:", arr.__proto__);
// console.log("arr.__proto__.__proto__:", arr.__proto__.__proto__);

// const func = function a() {} as any;
// console.log("func.__proto__:", func.__proto__);
// console.log("func.__proto__.__proto__:", func.__proto__.__proto__);

// const obj = {} as any;
// console.log("obj.__proto__:", obj.__proto__);
// console.log("obj.__proto__.__proto__:", obj.__proto__.__proto__);

// const dragon = {
//   name: "Tanya",
//   fire: true,
//   fight() {
//     return 5;
//   },
//   sing() {
//     if (this.fire) {
//       return `I am ${this.name}, the breather of fire`;
//     }
//   },
// };

// const lizard = {
//   name: "Kiki",
//   fight() {
//     return 1;
//   },
// } as any;

// // Don't do this, bad performance. Show with bind.
// lizard.__proto__ = dragon;
// // console.log(1, "dragon.isPrototypeOf(lizard):", dragon.isPrototypeOf(lizard)); //* true
// // console.log(2, lizard.fire);
// // console.log(3, lizard.sing());
// // const lizardFire = dragon.sing.bind(lizard);
// // console.log(4, lizardFire());

// for (let prop in lizard) {
//   console.log(1, { prop });
//   if (lizard.hasOwnProperty(prop)) {
//     console.log(2, { prop });
//   }
// }

// function a() {}
// console.log('a.hasOwnProperty("name"):', a.hasOwnProperty("name")); // true
// console.log('a.hasOwnProperty("call"):', a.hasOwnProperty("call")); // false
// console.log("a.name:", a.name); // a

// const array = [] as any[];
// console.log('(array as any).__proto__.hasOwnProperty("map"):', (array as any).__proto__.hasOwnProperty("map")); // true
// console.log("Array.prototype===(array as any).__proto__:", Array.prototype === (array as any).__proto__); // true

// const human = { mortal: true };
// const socrates = Object.create(human);
// console.log("human.isPrototypeOf(socrates):", human.isPrototypeOf(socrates)); // true
// socrates.age = 45;
// console.log("socrates:", socrates);
// console.log("socrates.mortal:", socrates.mortal);

//- Only function have the prototype property
// function multiplyBy5(num: number) {
//   return num * 5;
// }

// console.log("(multiplyBy5 as any).__proto__:", (multiplyBy5 as any).__proto__);
// console.log("Function.prototype:", Function.prototype);
// console.log("(multiplyBy5 as any).__proto__.__proto__:", (multiplyBy5 as any).__proto__.__proto__);
// console.log("Object.prototype:", Object.prototype);
// console.log("(multiplyBy5 as any).__proto__.__proto__.__proto__:", (multiplyBy5 as any).__proto__.__proto__.__proto__);
// console.log("typeof Object:", typeof Object);
// console.log("typeof {}:", typeof {});
// console.log("multiplyBy5.prototype:", multiplyBy5.prototype);
// console.log("Object.prototype:", Object.prototype);
// console.log("(Object as any).prototype.__proto__:", (Object as any).prototype.__proto__);
// console.log("String.prototype:", String.prototype);

//* Exercise 1
// class CustomDate extends Date {
//   lastYear() {
//     return this.getFullYear() - 1;
//   }
// }
// console.log("new CustomDate('1900-10-10').lastYear():", new CustomDate("1900-10-10").lastYear());

// // @ts-ignore
// Date.prototype.lastYear = function () {
//   return this.getFullYear() - 1;
// };
// // @ts-ignore
// console.log("new Date('1900-10-10').lastYear():", new Date("1900-10-10").lastYear());

//* Exercise 2 -> this is dangerous!
// (Array as any).prototype.map = function () {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(this[i] + "🗺");
//   }
//   return arr;
// };
// // @ts-ignore
// console.log("[1, 2, 3].map():", [1, 2, 3].map());

//* *Exercise: Prototypal Inheritance with this
// Function.prototype.bind = function (whoIsCallingMe) {
//   const self = this;
//   return function () {
//     return self.apply(whoIsCallingMe, arguments);
//   };
// };

//@ Object Oriented Programming
//* Factory Functions -> function creating objects
// function createElf(name: string, weapon: string) {
//   return {
//     name: name,
//     weapon: weapon,
//     attack() {
//       return "Attack with: " + weapon;
//     },
//   };
// }
// const sam = createElf("Sam", "bow");
// const peter = createElf("Peter", "bow");
// console.log("sam.attack():", sam.attack());
// console.log("peter.attack():", peter.attack());
// console.log("sam:", sam, "peter:", peter);

//* Object.create()
// const elfFunctions = {
//   attack: function (this: any) {
//     return "Attack with: " + this.weapon;
//   } as Function,
// };

// function createElf(name: string, weapon: string) {
//   // Object.create creates __proto__ link
//   const newElf = Object.create(elfFunctions);
//   console.log({ newElf });
//   console.log("newElf.__proto__ :", newElf.__proto__);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }

// const sam = createElf("Sam", "bow");
// const peter = createElf("Peter", "bow");
// console.log("sam:", sam, "sam.attack():", sam.attack());
// console.log("peter:", peter, "peter.attack():", peter.attack());

//* Constructor Functions -> keyword 'new'
// const Elf1 = new Function(
//   "name",
//   "weapon",
//   `this.name = name;
// this.weapon = weapon`
// );
// const sara = new (Elf1 as any)("Sara", "fireworks");
// console.log("sara:", sara);

// function Elf(this: any, name: string, weapon: string) {
//   console.log(1, "this:", this);
//   this.name = name;
//   this.weapon = weapon;
//   console.log(2, "this:", this);
// }
// console.log("Elf.prototype:", Elf.prototype);
// console.log("Elf:", Elf, typeof Elf);

// Elf.prototype.attack = function () {
//   return "Attack with: " + this.weapon;
// };

// const sam = new (Elf as any)("Sam", "bow");
// const peter = new (Elf as any)("Peter", "bow");
// console.log("sam:", sam, "sam.attack():", sam.attack());
// console.log("peter:", peter, "peter.attack():", peter.attack());

// console.log("peter.__proto__:", peter.__proto__);
// console.log("peter.prototype:", peter.prototype);
// console.log("(Elf as any).__proto__:", (Elf as any).__proto__);

// const a = new Number(5);
// const b = 5;
// console.log("a == b, a === b:", a == b, a === b);
// console.log("a.toString(), b.toString():", a.toString(), b.toString(), typeof a, typeof b);

//* ES6 Classes
// class Elf {
//   name: string;
//   weapon: string;
//   constructor(name: string, weapon: string) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return "Attack with: " + this.weapon;
//   }
// }

// const fiona = new Elf("Fiona", "ninja stars");
// console.log("fiona:", fiona, typeof fiona);
// console.log("fiona instanceof Elf:", fiona instanceof Elf);
// const ben = new Elf("Ben", "bow");
// console.log("fiona.attack():", fiona.attack());
// console.log("ben:", ben);

//* This
// function Person(this: any, name: string, age: number) {
//   this.name = name;
//   this.age = age;
//   console.log("this:", this);
// }

// const person1 = new (Person as any)("Xavier", 55);
// console.log(1, "person1:", person1);

// // Implicit binding
// const person = {
//   name: "Karen",
//   age: 40,
//   hi() {
//     console.log(2, "hi " + this.name);
//   },
// };
// person.hi();

// // Explicit binding
// const person3 = {
//   name: "Karen",
//   age: 40,
//   hi: function (this: any) {
//     console.log(3, "hi " + this.setTimeout);
//   }.bind(globalThis),
// };
// person3.hi();

// // Arrow functions
// const person4 = {
//   name: "Karen",
//   age: 40,
//   hi: function () {
//     const inner = () => {
//       console.log(4, "hi " + this.name);
//     };
//     return inner();
//   },
// };

// person4.hi();

//* Class Inheritance
// class Character {
//   name: string;
//   weapon: string;
//   constructor(name: string, weapon: string) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return "Attack with: " + this.weapon;
//   }
// }

// class Elf extends Character {
//   type: string;
//   constructor(name: string, weapon: string, type: string) {
//     //* console.log('what am i?', this); //* This gives an error
//     super(name, weapon);
//     console.log("What am i?", this);
//     this.type = type;
//   }
// }
// const fiona = new Elf("Fiona", "ninja stars", "house");
// console.log("fiona:", fiona, typeof fiona);
// const ogr = { ...fiona };
// console.log("ogr:", ogr, typeof ogr);

// class Ogre extends Character {
//   color: string;
//   constructor(name: string, weapon: string, color: string) {
//     super(name, weapon); //* calls superClass -> Character;
//     this.color = color;
//   }
//   makeFort() {
//     //* This is like extending our prototype: Object.prototype.makeFort = function...
//     return "Strongest fort in the world made";
//   }
// }

// const houseElf = new Elf("Dolby", "cloth", "house");
// console.log("houseElf:", houseElf);
// //* houseElf.makeFort() //* Error

// const shrek = new Ogre("Shrek", "club", "green");
// console.log("shrek:", shrek);
// console.log("shrek.makeFort():", shrek.makeFort());

// console.log("Ogre.prototype.isPrototypeOf(shrek):", Ogre.prototype.isPrototypeOf(shrek)); // true
// console.log("Character.prototype.isPrototypeOf(Ogre.prototype):", Character.prototype.isPrototypeOf(Ogre.prototype)); // true
// console.log("houseElf instanceof Elf:", houseElf instanceof Elf); // true
// console.log("houseElf instanceof Character:", houseElf instanceof Character); // true

//* Public vs Private
// class Employee {
//   #name = "Test"; // private field
//   setName(name: string) {
//     this.#name = name;
//   }
// }
// const emp = new Employee();
// //* emp.#name = "New"; // Error
// emp.setName("New"); // Ok
// console.log("emp:", emp);

// class Employee2 {
//   #name = "Test";
//   constructor(name: string) {
//     this.#setName(name); // Ok
//   }
//   #setName(name: string) {
//     // Private method
//     this.#name = name;
//   }
// }
// const emp2 = new Employee2("New"); // Ok
// // emp2.#setName("New"); // Error
// console.log("emp2:", emp2);

//* Pillars of OOP
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

//* Polymorphism
// class firstClass {
//   add() {
//     console.log(1, "First Method");
//   }
// }
// class secondClass extends firstClass {
//   add() {
//     console.log(2, 30 + 40);
//   }
// }
// class thirdClass extends secondClass {
//   add() {
//     console.log(3, "Last Method");
//   }
// }
// const ob1 = new firstClass();
// const ob2 = new secondClass();
// const ob3 = new thirdClass();
// ob1.add();
// ob2.add();
// ob3.add();

//* Exercise
// class Character {
//   name: string;
//   weapon: string;
//   constructor(name: string, weapon: string) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return "Attack with: " + this.weapon;
//   }
// }

// class Queen extends Character {
//   kind: string;
//   constructor(name: string, weapon: string, kind: string) {
//     super(name, weapon);
//     this.kind = kind;
//   }
//   attack() {
//     console.log(super.attack());
//     return `I am the ${this.name} of ${this.kind}, now bow down to me! `;
//   }
// }

// const victoria = new Queen("Victoria", "army", "hearts");
// victoria.attack();

//@ Functional Programming
//* Side Effects
// const array = [1, 2, 3];
// function mutateArray(arr: number[]) {
//   arr.pop();
// }
// function mutateArray2(arr: number[]) {
//   arr.forEach((item) => arr.push(1));
// }
// //The order of the function calls will matter.
// console.log(1, "array:", array);
// mutateArray(array); //! Side Effect
// console.log(2, "array:", array);
// mutateArray2(array); //! Side Effect
// console.log(3, "array:", array);

//* Pure Function
// const array = [1, 2, 3];
// function removeLastItem(arr: number[]) {
//   const newArray = ([] as number[]).concat(arr);
//   newArray.pop();
//   return newArray;
// }

// function multiplyBy2(arr: number[]) {
//   return arr.map((elem) => elem * 2);
// }

// const newArray1 = removeLastItem(array);
// const newArray2 = multiplyBy2(array);
// console.log({ array, newArray1, newArray2 });

//* Imperative vs Declarative
// const array = [1, 2, 3, 4, 5];

// // Imperative
// for (let i = 0; i < array.length; i++) {
//   console.log("array[i]:", array[i]);
// }
// // Declarative
// array.forEach((elem) => console.log({ elem }));

//* Immutability -> not changing the data /state
// const obj = { name: "Andrei" };
// function clone(obj: any) {
//   return { ...obj }; // This is pure -> object is cloned
// }

// function updateName(obj: { name: string }) {
//   const obj2 = clone(obj);
//   obj2.name = "Anna";
//   return obj2;
// }

// const updatedObj = updateName(obj);
// console.log({ obj, updatedObj });

//* Higher Order Functions and Closures
// HOF
// const hof = (fn: Function) => fn(5);
// hof(function a(x: number) {
//   return x;
// });
//Closure
// const closure = function () {
//   let count = 0;
//   console.log({ count });
//   return function increment() {
//     count++;
//     return count;
//   };
// };

// const getCounter = closure();
// console.log(1, "getCounter():", getCounter()); // 1 let count is modified!
// console.log(2, "getCounter():", getCounter()); // 2 let count is modified!
// console.log(3, "getCounter():", getCounter()); // 3 let count is modified!
// console.log(4, "getCounter():", getCounter()); // 4 let count is modified!

//* Currying
// const multiply = (a: number, b: number) => a * b;
// const curriedMultiply = (a: number) => (b: number) => a * b;
// console.log("curriedMultiply(5)(20):", curriedMultiply(5)(20)); // 100
// const multiplyBy5 = curriedMultiply(5);
// console.log("multiplyBy5(20):", multiplyBy5(20)); // 100

//* Partial Application
// const multiply2 = (a: number, b: number, c: number) => a * b * c;
// const curriedMultiply2 = (a: number) => (b: number) => (c: number) => a * b * c;
// console.log("curriedMultiply2(5)(20)(10):", curriedMultiply2(5)(20)(10)); // 1000

// const partialMultiplyBy5 = multiply2.bind(null, 5);
// console.log("partialMultiplyBy5(10, 20):", partialMultiplyBy5(10, 20)); // 1000

//* Memoization ~ Caching
// V1 -> bad
// function addTo80(n: number) {
//   return n + 80;
// }
// console.log(1, "addTo80(5):", addTo80(5));
// console.log(2, "addTo80(5):", addTo80(5));
// console.log(3, "addTo80(5):", addTo80(5));

// V2
// const cache = {} as { [key: string]: number };

// function memoizeAddTo80(n: number) {
//   if (n in cache) {
//     return cache[n as keyof typeof cache];
//   } else {
// console.log("Long time");
//     const answer = n + 80;
//     cache[n] = answer;
//     return answer;
//   }
// }

// console.log(1, memoizeAddTo80(6));
// console.log(2, "cache:", cache);
// console.log(3, memoizeAddTo80(6));
// console.log(4, "cache:", cache);
// console.log(5, memoizeAddTo80(8));
// console.log(6, "cache:", cache);

// V3-> Let's make that better with no global scope. This is closure in javascript so
// function memoizeAddTo80() {
//   const cache = {} as { [key: string]: number };
//   console.log("cache:", cache);
//   return function (n: number) {
//     if (n in cache) {
//       return cache[n];
//     } else {
//       console.log("Long time");
//       const answer = n + 80;
//       cache[n] = answer;
//       return answer;
//     }
//   };
// }

// const memoized = memoizeAddTo80();
// console.log(1, "memoized(6):", memoized(6));
// console.log(2, "memoized(6):", memoized(6));
// console.log(3, "memoized(8):", memoized(8));

//* Compose and Pipe -> fn1(fn2(fn3(50)));
// compose(fn1, fn2, fn3)(50) //* Right to left
// pipe(fn3, fn2, fn1)(50) //* Left to right
// const compose =
//   (f: Function, g: Function) =>
//   (a: number): number =>
//     f(g(a));

// const pipe =
//   (f: Function, g: Function) =>
//   (a: number): number =>
//     g(f(a));

// const multiplyBy3AndAbsolute = compose((num: number) => num * 3, Math.abs);
// console.log("multiplyBy3AndAbsolute(-50):", multiplyBy3AndAbsolute(-50));
// const multiplyBy3AndAbsolute2 = pipe((num: number) => num * 3, Math.abs);
// console.log("multiplyBy3AndAbsolute2(-50):", multiplyBy3AndAbsolute2(-50));

//* Exercise
interface Item {
  name: string;
  price: number;
}

interface User {
  name: string;
  active: boolean;
  cart: Item[];
  purchases: Item[];
}

const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
} as User;

const shoppingHistory = [] as User[];

const compose =
  (f: Function, g: Function) =>
  (...args: any[]) =>
    f(g(...args));

const pipe =
  (f: Function, g: Function) =>
  (...args: any[]) =>
    g(f(...args));

const purchaseItem = (...fns: Function[]) => fns.reduce(compose);
const purchaseItem2 = (...fns: Function[]) => fns.reduce(pipe);

purchaseItem(emptyUserCart, buyItem, applyTaxToItems, addItemToCart)(user, { name: "laptop", price: 50 });
purchaseItem2(addItemToCart, applyTaxToItems, buyItem, emptyUserCart)(user, { name: "laptop", price: 60 });

function addItemToCart(user: User, item: Item) {
  shoppingHistory.push(user);
  const updatedCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user: User) {
  shoppingHistory.push(user);
  const { cart } = user;
  const taxRate = 1.2;
  const updatedCart = cart.map((item: Item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user: User) {
  shoppingHistory.push(user);
  const itemsInCart = user.cart;
  return Object.assign({}, user, { purchases: itemsInCart });
}

function emptyUserCart(user: User) {
  shoppingHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}

console.log("shoppingHistory:", shoppingHistory);
console.log(
  "shoppingHistory[shoppingHistory.length-1].cart:",
  shoppingHistory[shoppingHistory.length - 1].cart,
  shoppingHistory.length
);
console.log(
  "shoppingHistory[shoppingHistory.length-1].purchases:",
  shoppingHistory[shoppingHistory.length - 1].purchases,
  shoppingHistory.length
);

//@ OOP vs FP
//* Composition vs Inheritance: Inheritance:the child class is dependent upon parent class. Composition: child class and parent class are independent.
// Inheritance -> superClass is inherited -> class extends
// Composition -> smaller pieces combined to create some data -> compose, pipe
// FP: stateless ???, pure, declarative
// OOP: stateful, side effects, imperative

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
console.log("typeof 5:", typeof 5); //* number
console.log("typeof true:", typeof true); //* boolean
console.log('typeof "To be or not to be":', typeof "To be or not to be"); //* string
console.log("typeof undefined:", typeof undefined); //* undefined
console.log("typeof null:", typeof null); //* object -> this is error
console.log('typeof Symbol("Test"):', typeof Symbol("Test")); //* symbol

const hugeString = BigInt("9007199254740991");
console.log("hugeString:", hugeString, typeof hugeString); //* 9007199254740991n bigint

// Functions and arrays and objects are objects!
console.log("typeof {}:", typeof {}); //* object
console.log("typeof []:", typeof []); //* object
console.log("typeof function(){}:", typeof function () {}); //* function

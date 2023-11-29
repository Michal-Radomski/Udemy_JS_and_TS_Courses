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
const a = function (this: any) {
  console.log(1, this);
  const b = function (this: any) {
    console.log(2, this);
    const c = {
      hi: function () {
        console.log(3, this);
      },
    };
    c.hi();
  };
  b();
};
a();

// JS is weird:
const obj = {
  name: "Billy",
  sing: function () {
    console.log(4, this); // In this case, it's a method on an object.
    const anotherFunc = () => {
      console.log(5, this); // Arrow function are lexically bounded
    };
    anotherFunc();
    const anotherFunc2 = function (this: any) {
      console.log(6, this); // Global window here
    };
    anotherFunc2();
  },
};
obj.sing();

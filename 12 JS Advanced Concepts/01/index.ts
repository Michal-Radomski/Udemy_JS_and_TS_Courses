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

//* Eval() -> don't use it
console.log(eval("2 + 2")); // Expected output: 4
console.log(eval("2 + 2") === eval("4")); // Expected output: true
console.log(eval("2 + 2") === eval(new String("2 + 2") as any)); // Expected output: false
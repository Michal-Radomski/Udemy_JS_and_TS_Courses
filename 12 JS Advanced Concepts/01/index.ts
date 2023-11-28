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

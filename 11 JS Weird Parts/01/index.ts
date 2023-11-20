//@ Execution Context and Lexical Environments
// const str = "Hello World!";

// (function (this: any) {
//   console.log({ str });
//   // console.log("this:", this);
//   // console.log("globalThis:", globalThis);
// })();

// function b() {
//   console.log("Called b!");
// }
// b(); //* Functions are hoisted

// var a;
// console.log({ a }); //* Undefined

//* Undefined
let a;
console.log({ a }, typeof a);
console.log(typeof a === "undefined"); // true

if (a === undefined) {
  console.log("a is undefined!");
} else {
  console.log("a is defined!");
}

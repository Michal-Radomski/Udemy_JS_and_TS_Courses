//@ Execution Context and Lexical Environments
//* Creation phase + execution phase
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

//* Undefined -> use null instead of undefined
// let a;
// console.log({ a }, typeof a);
// console.log(typeof a === "undefined"); // true

// if (a === undefined) {
//   console.log("a is undefined!");
// } else {
//   console.log("a is defined!");
// }

//* Execution Stack
// function b() {
//   console.log("b");
// }
// function a() {
//   console.log(1, "a");
//   b();
//   console.log(2, "a");
// }
// a();

//* Variable Environments
// function b() {
//   var myVar;
//   console.log(1, { myVar });
// }

// function a() {
//   var myVar = 2;
//   console.log(2, { myVar });
//   b();
// }

// var myVar = 1;
// console.log(3, { myVar });
// a();
// console.log(4, { myVar });

//* The Scope Chain
// function a() {
//   function b() {
//     console.log({ myVar }); // { myVar: 1 } from global object
//   }
//   // var myVar = 2;
//   b();
// }
// var myVar = 1;
// a();

//* Async Callback
// long running function
function waitThreeSeconds() {
  const ms = 3000 + new Date().getTime();
  console.log({ ms });
  while (Number(new Date()) < ms) {}
  console.log("Finished function");
}

waitThreeSeconds();
console.log("Finished execution");

//@ Critical JS Concepts
// console.log("globalThis:", globalThis);

//* Memory Heap and Call Stack
// function recursion(num: number) {
//   num = num + num;
//   console.log({ num });
//   if (num > 999999999999) {
//     console.log("num:", num);
//     return;
//   }
//   recursion(num);
// }

// recursion(1);

//* Garbage Collection + Removing Event Listeners
// let cnt = 0;
// const title = document.getElementById("title") as HTMLElement;

// function titleClick() {
//   cnt++;
//   console.log("The number of times title has been clicked: " + cnt);
//   if (cnt > 5) {
//     title.removeEventListener("click", titleClick);
//   }
// }

// title.addEventListener("click", titleClick);

//* Exercise
// const arr = Array(123000).fill(1);
// // console.log({ arr });

// const popIt = function () {
//   arr.pop();
//   if (arr.length > 0) {
//     // popIt();
//     setTimeout(popIt, 0);
//   }
// };

// popIt();

//@ Critical Fundamentals
//* Execution Context
// // @ts-ignore
// console.log({ num }); // undefined
// var num = 10; //* let and const -> error
// numFunction();
// function numFunction() {
//   console.log("in numFunction");
// }
// console.log({ num });

//* Global Object
// console.log("globalThis:", globalThis);

//* Hoisting -> not recommended!
// sum();
// function sum() {
//   console.log(num1 + num2); //* undefined + undefined = NaN
// }
// var num1 = 10,
//   num2 = 5;
// sum(); //* 15

// multiply(6, 2);
// function multiply(a: number, b: number) {
//   console.log(a * b); //* 12
//   // return a * b;
// }

//* Function declaration vs function expression
// console.log(sum10);
// console.log("sum10(5):", sum10(5));
// // Function Declaration
// function sum10(num: number) {
//   return num + 10;
// }

// // Function Expression -> not hoisted!
// var sum100 = function (num: number) {
//   return num + 100;
// };
// // console.log(sum100);
// console.log("sum100(5):", sum100(5));

// // Arrow function
// const sum1000 = (num: number) => {
//   return num + 1000;
// };
// console.log("sum1000(5):", sum1000(5));

//* Exercise
// var sum = function (this: any) {
//   var num = 10;
//   console.log({ num });
//   // console.log("this:", this);
//   // console.log("globalThis:", globalThis);
//   const getNewNum = () => {
//     var newNum = 100;
//     console.log({ newNum });
//     // console.log("this:", this);
//     // console.log("globalThis:", globalThis);
//     return newNum;
//   };
//   console.log(num);
//   var newNum = getNewNum();
//   console.log(newNum);
//   console.log("num + newNum:", num + newNum);
// };

// sum();

//* Lexical Environment -> where variable is placed!

//* Scope + Scope Chain
// var a = 10;

// var add5 = function (num: number) {
//   var b = 5;
//   console.log("num + b:", num + b);
//   var add10 = function (num2: number) {
//     console.log("num2 + a:", num2 + a);
//   };
//   add10(3);

//   var add15 = function (num3: number) {
//     var c = 15;
//     console.log("num3 + c:", num3 + c);
//   };
//   add15(3);
// };
// add5(3);

//* Block Scope: let and const
// let a = 10;
// const add5 = function (num: number) {
//   let b = 5;
//   console.log("num + b:", num + b);

//   const add10 = function (num2: number) {
//     console.log("num2 + a:", num2 + a);
//   };
//   add10(3);

//   const add15 = function (num3: number) {
//     let c = 15;
//     console.log("num3 + c:", num3 + c);
//   };
//   add15(3);
// };
// add5(3);

// const sumIt = function (num1: number) {
//   let num2 = 20;
//   if (num1 > num2) {
//     let num3 = 10;
//     console.log("num1 + num3:", num1 + num3);
//   }
//   console.log("num1 + num2:", num1 + num2);
// };
// sumIt(100);

//* Exercise
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log({ i });
//   }, 1000 * i);
// }
// var = 3
// { i: 3 }
// { i: 3 }
// { i: 3 }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log({ i });
//   }, 1000 * i);
// }
// let = 1,2,3
// { i: 0 }
// { i: 1 }
// { i: 2 }

// const num = 3.14;
// // num = 3.1415; //* Error

// const scores = [100, 90, 85, 70, 0, 0, 60];
// // scores = [100, 90, 85, 70, 0]; //* Error
// scores[4] = 90;
// scores.push(65);
// console.log("scores:", scores);

//* Exercise
// const playingWithLoops = function () {
//   let total = 0;
//   for (let i = 0; i < 100; i++) {
//     total += i;
//     // console.log(1, total);
//     // console.log({ i });
//   }
//   for (let j = 0; j < 1000; j++) {
//     total += j;
//     // console.log(2, total);
//     // console.log({ j });
//   }
//   console.log({ total });
// };
// playingWithLoops(); //* { total: 504450 }

// const fun = function () {
//   let num = 10;
//   console.log(0, { num });
//   if (num) {
//     num = 1000;
//     console.log(1, { num });
//   }
//   num = 100;
//   console.log(2, { num });
// };
// fun();

// const sumIt = function () {
//   let num = 10;
//   const sum2 = function () {
//     return num * 2;
//   };
//   return sum2();
// };
// console.log("sumIt():", sumIt()); //* 20

// // What is wrong with the following function and how can you fix it?
// const sumIt2 = function () {
//   let num = 100;
//   return num * 2;
// };
// console.log("sumIt2():", sumIt2()); //* 200

//* JS data types
// Types: boolean, string, number, null, undefined, symbol, bigInt
// const a = undefined; //* absence of definition -> by system!
// const b = null; //* absence of value -> by developer //* typeof null -> object - this is error!!!
// console.log({ a }, typeof a, { b }, typeof b);

// const c = BigInt(100);
// console.log({ c }, typeof c);

//* Objects
// const obj = {
//   name: "Steven",
//   address: {
//     street: "main",
//     number: 445,
//   },
// };
// const test = function () {
//   //* function is an object!
//   console.log("test");
// };
// const test2 = () => {
//   //* function is an object!
//   console.log("test");
// };
// const arr = [1, 2, 3, 4];
// const date = new Date();
// const map = new Map();
// // object function function object object object
// console.log(typeof obj, typeof test, typeof test2, typeof arr, typeof date, typeof map);

// // @ts-ignore
// console.log("test.__proto__:", test.__proto__); //* {}
// // @ts-ignore
// console.log("test2.__proto__:", test2.__proto__); //* {}

//* Type Coercion
// String Coercion
// console.log("String(123):", String(123)); // explicit
// console.log('123 + "":', 123 + ""); // implicit

// const arr = ["an objectives", "another objective", "one more objective"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i + 1 + "_" + arr[i]);
// }

// // Boolean Coercion
// console.log("Boolean(54):", Boolean(54)); //Explicit
// console.log("Boolean({}):", Boolean({})); //Explicit
// console.log("Boolean(!!{}):", Boolean(!!{})); //* true

// //Implicit
// let val;
// if (!val) {
//   val = 10;
//   console.log(1, { val });
// }
// console.log(2, { val });

// // Numeric Coercion
// console.log('Number("1"):', Number("1")); // Explicit;
// // The unary plus (+)
// console.log("+'123':", +"123"); // Implicit
// // The unary negation (-)
// const x = 3;
// const y = -x;
// console.log({ x, y }); //* x=3, y=-3
// // @ts-ignore
// console.log('"15" * 15:', "15" * 15);

//* Making Use of Truthy and Falsy
// let newVar;
// // newVar = "Steve";
// // newVar = null;
// newVar = 0;
// console.log("!!'Steve', !!null, !!0:", !!"Steve", !!null, !!0); //* true false false

//* Loose equality and strict equality -> always use strict equality
// // @ts-ignore
// console.log('1=="1":', 1 == "1"); //* true
// // @ts-ignore
// console.log("false==0:", false == 0); //* true
// // @ts-ignore
// console.log("true==1:", true == 1); //* true
// console.log("undefined == null:", undefined == null); //* true
// console.log("undefined === null:", undefined === null); //* false

//* Exercise
// const useTruthy = function () {
//   // let val = 0;
//   let val = -10;
//   if (val || val === 0) {
//     val += 5;
//     console.log({ val });
//   }
// };
// useTruthy();

// const useConcat = function () {
//   const codes = [0, 5, "10", "15"];
//   const strings = ["first item", "second item", "third item", "fourth item"];
//   for (let i = 0; i < codes.length; i++) {
//     console.log(`${Number(codes[i]) + 5}_${strings[i]}`);
//   }
// };
// useConcat();

//* BigInt
// console.log(Number.MIN_SAFE_INTEGER); //* -9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); //* 9007199254740991
// let x = 999999999999999;
// let y = 9999999999999999;
// console.log({ x, y }); //* { x: 999999999999999, y: 10000000000000000 }
// const z = BigInt("9999999999999999");
// console.log({ z }); //* 9999999999999999n
// console.log(Number.EPSILON); //*2.220446049250313e-16 (2^-52)
// console.log(1 + Number.EPSILON); //* 1.0000000000000002
// // @ts-ignore
// console.log("5==5n:", 5 == 5n); //* true
// // @ts-ignore
// console.log("5===5':", 5 === 5n); //* false

//* Passing Primitives and Objects: Value or Reference?
// let num1 = 10;
// let num2 = num1;
// num1++;
// console.log({ num1, num2 }); //* { num1: 11, num2: 10 }

// const obj1 = {
//   number: 10,
// };
// const obj2 = obj1;
// obj1.number++;
// console.log({ obj1, obj2 }); //* { obj1: { number: 11 }, obj2: { number: 11 } }

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr1.push(4);
// console.log({ arr1, arr2 }); //* { arr1: [ 1, 2, 3, 4 ], arr2: [ 1, 2, 3, 4 ] }

//* Cloning JS Objects
// const obj = {
//   isHuman: true,
//   name: "Steven",
//   number: 0,
//   settings: {
//     role: "user",
//   },
// };

// const obj1 = Object.assign({}, obj); //* Shallow Copy!
// const obj2 = { ...obj }; //* Shallow Copy!
// const obj3 = JSON.parse(JSON.stringify(obj)); //* Deep Copy!
// obj.number = 10;
// obj.settings.role = "admin";
// obj.isHuman = false;
// console.log({ obj, obj1, obj2, obj3 });
// //* obj: { name: 'Steven', number: 10, settings: { role: 'admin' }, isHuman: false },
// //* obj1: { name: 'Steven', number: 0, settings: { role: 'admin' }, isHuman: true },
// //* obj2: { name: 'Steven', number: 0, settings: { role: 'admin' }, isHuman: true },
// //* obj3: { name: 'Steven', number: 0, settings: { role: 'user' }, isHuman: true }

//* Exercise
// const scores = [90, 75, 80, 40];
// const updateScores = function (arr: number[], newScores: number[]) {
//   const newScoresArray = arr;
//   newScoresArray.push(...newScores);
//   return newScoresArray;
// };

// const finalScores = updateScores(scores, [50, 65, 100]);
// console.log("scores.length:", scores.length); //* 7
// console.log("finalScores.length:", finalScores.length); //* 7

// const scores = [90, 75, 80, 40];
// const updateScores = function (arr: number[], newScores: number[]) {
//   const newScoresArray = [...arr];
//   newScoresArray.push(...newScores);
//   return newScoresArray;
// };

// const finalScores = updateScores(scores, [50, 65, 100]);
// console.log("scores.length:", scores.length); //* 4
// console.log("finalScores.length:", finalScores.length); //* 7

//* Strict Mode
// "use strict";
// const test = function (j1: number) {
//   const x = j1;
//   console.log({ x });
// };
// test(90); //* 90

//@ Tricky Fundamentals
//* Callback
// const message = function () {
//   console.log("This message is shown after 3 seconds");
// };
// setTimeout(message, 3000);

//* Keyword this
// const getThis = function () {
//   console.log({ globalThis });
// };
// getThis();
//* JS Browser code! -> this is window object
// function getThis() {
//   console.log(this);
// }
// window.getThis();

//* Keyword this with objects
// interface CustomDate extends Date {
//   showThis: () => void;
// }

// const date = new Date() as CustomDate;
// date.showThis = function () {
//   console.log("this:", this);
// };
// date.showThis();

// const obj = {
//   name: "Steven",
//   greeting() {
//     console.log(`Hello ${this.name}!`);
//   },
// };
// obj.greeting(); // Hello Steven!

// const obj2 = {
//   name: "Lynette",
//   greeting: obj.greeting,
// };
// obj2.greeting(); // Hello Lynette!

//* Exercise
// const func1 = function (this: any) {
//   console.log(1, this); // undefined
//   const func2 = function (this: any) {
//     console.log(2, this); // undefined
//     const obj = {
//       name: "Steven",
//       func3() {
//         console.log(3, this); // { name: 'Steven', func3: [Function: func3] }
//         const func4 = () => {
//           console.log(4, this); // { name: 'Steven', func3: [Function: func3] }
//         };
//         func4();
//       },
//     };
//     obj.func3();
//   };

//   func2();
// };
// func1();

//* Common Issues with the Keyword this
// const obj = {
//   name: "Steven",
//   func3() {
//     console.log(3, this); // { name: 'Steven', func3: [Function: func3] }
//     const func4 = () => {
//       console.log(4, this); // { name: 'Steven', func3: [Function: func3] }
//     };
//     func4();
//   },
// };
// obj.func3();

// const displayName = function (this: any) {
//   console.log(this.name);
// };

// const obj = {
//   name: "Steve",
//   displayName: displayName,
// };
// // obj.displayName(); // Steve

// console.log(obj.displayName());
// // const showName = obj.displayName;
// // console.log(showName()); // Error

// Callback Example 1
// const obj = {
//   name: "Steve",
//   displayName() {
//     // console.log(this.name);
//     console.log(this);
//   },
// };
// // obj.displayName();

// const doFunction = function (callback: Function) {
//   if (typeof callback === "function") {
//     callback();
//   }
// };

// doFunction(obj.displayName);

// Callback Example 2
// const obj = {
//   name: "Steve",
//   displayName() {
//     // console.log(this.name);  // undefined
//     console.log(this);
//   },
// };
// setTimeout(obj.displayName, 2000);

//* Call and Apply -> to define this!
// function test() {
//   console.log("test");
// }

// test(); // test
// test.call(this); // test
// test.apply(this); // test

// const obj = {
//   name: "Steve",
//   displayName(greet: string, punct: string) {
//     console.log(`${greet} ${this.name}${punct}`);
//   },
// };

// const obj2 = {
//   name: "Lynette",
// };

// // Borrowing method from obj to obj2
// obj.displayName.call(obj2, "Hi", "!"); // Hi Lynette!
// obj.displayName.apply(obj2, ["Hello", "."]); // Hello Lynette.

//* Bind -> to determine value of this! -> returns a function
// function test() {
//   console.log("test");
// }
// const newFun = test.bind(this); // test
// newFun();

const obj = {
  name: "Steve",
  displayName(greet: string, punct: string) {
    console.log(`${greet} ${this.name}${punct}`);
  },
};

const obj2 = {
  name: "Lynette",
};

const display = obj.displayName.bind(obj2, "Hi", "!");
display(); // Hi Lynette!

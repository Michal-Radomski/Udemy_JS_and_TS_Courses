//# Refreshment: Encapsulation - using closure
// function BankAccount(accountNumber: string, accountHolderName: string, balance: number) {
//   const _accountNumber = accountNumber;
//   const _accountHolderName = accountHolderName;
//   let _balance = balance;

//   function showAccountDetails() {
//     console.log(`Account Number: ${_accountNumber}`);
//     console.log(`Account Holder Name: ${_accountHolderName}`);
//     console.log(`Balance: ${_balance}`);
//   }

//   function deposit(amount: number) {
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
// myBankAccount.deposit(2500); //* Account Number: 123456 Account Holder Name: John Doe Balance: 3500
// myBankAccount.withdraw(2000); //* Account Number: 123456 Account Holder Name: John Doe Balance: 1500

//# Refreshment: Encapsulation - using classes
// class BankAccount {
//   private _accountNumber: string;
//   private _accountHolderName: string;
//   private _balance: number;
//   constructor(accountNumber: string, accountHolderName: string, balance: number) {
//     this._accountNumber = accountNumber;
//     this._accountHolderName = accountHolderName;
//     this._balance = balance;
//   }

//   showAccountDetails() {
//     console.log(`Account Number: ${this._accountNumber}`);
//     console.log(`Account Holder Name: ${this._accountHolderName}`);
//     console.log(`Balance: ${this._balance}`);
//   }

//   deposit(amount: number) {
//     this._balance += amount;
//     this.showAccountDetails();
//   }

//   withdraw(amount: number) {
//     if (this._balance >= amount) {
//       this._balance -= amount;
//       this.showAccountDetails();
//     } else {
//       console.log("Insufficient Balance");
//     }
//   }
// }

// const myBankAccount = new BankAccount("123456", "John Doe", 1000);
// myBankAccount.deposit(2500); //* Account Number: 123456 Account Holder Name: John Doe Balance: 3500
// myBankAccount.withdraw(2000); //* Account Number: 123456 Account Holder Name: John Doe Balance: 1500

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

//* Call and Apply -> to define this! -> invoke function right now!
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

//* Bind -> to determine value of this! -> returns a function!
// function test() {
//   console.log("test");
// }
// const newFun = test.bind(this); // test
// newFun();

// const obj = {
//   name: "Steve",
//   displayName(greet: string, punct: string) {
//     console.log(`${greet} ${this.name}${punct}`);
//   },
// };

// const obj2 = {
//   name: "Lynette",
// };

// // V1
// const display = obj.displayName.bind(obj2, "Hi", "!");
// display(); // Hi Lynette!
// // V2
// const display2 = obj.displayName.bind(obj2);
// display2("Hi", "!"); // Hi Lynette!

//* Taking Control of the Keyword this
// Example 1: Passing a reference to a method
// const displayName = function (this: any) {
//   console.log(this.name);
// };

// const obj = {
//   name: "Steve",
//   displayName,
// };

// const showName = obj.displayName;
// console.log(showName.apply(obj));

// Example 2: Callback with setTimeout
// const obj = {
//   name: "Steve",
//   displayName() {
//     console.log(this.name);
//   },
// };
// // obj.displayName(); // Steve

// setTimeout(obj.displayName, 2000); // undefined
// setTimeout(obj.displayName.bind(obj), 2000); // Steve
// setTimeout(function () {
//   obj.displayName(); // Steve
// }, 2000);

// Example 3: Original problem we used to show how keyword this worked.
// const obj = {
//   name: "Steven",
//   func3() {
//     console.log(3, this); // { name: 'Steven', func3: [Function: func3] }
//     const func4 = function (this: any) {
//       console.log(4, this); // { name: 'Steven', func3: [Function: func3] }
//     }.bind(this);
//     func4.apply(this); // { name: 'Steven', func3: [Function: func3] }
//     func4.call(this); // { name: 'Steven', func3: [Function: func3] }
//     func4();
//   },
// };
// obj.func3();

//* Exercise
// const obj = {
//   name: "Steve",
//   displayName() {
//     console.log(this?.name);
//   },
// };

// const doFunction = function (callback: Function) {
//   if (typeof callback === "function") {
//     callback();
//   }
// };
// doFunction(obj.displayName.bind(obj)); // Steve;

//* Arrow Functions
//  const sum = function(num1: number, num2: number) {
//   return num1 + num2;
// };
// const sum = (num1: number, num2: number) => num1 + num2;

// const sum = (num1: number, num2: number) => {
//   // console.log(num1, num2);
//   console.log("num1+ num2:", num1 + num2);
//   return num1 + num2;
// };
// sum(2, 4);

//* Solving this Binding with Arrow Functions -> where to use arrow functions
// lexical this: where is this!
// const obj = {
//   name: "Steven",
//   func3() {
//     console.log(3, this.name); //* Steven
//     const func4 = () => {
//       console.log(4, this.name); //* Steven
//     };
//     func4();
//   },
// };
// obj.func3();

//* Arrow Functions are NOT for Every Occasion -> where NOT to use arrow functions
// Don't use arrow functions for methods!
// const obj = {
//   firstName: "Steven",
//   lastName: "Hancock",
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   // @ts-ignore
//   fullName2: () => `${this.firstName} ${this.lastName}`,
// };
// console.log("obj.fullName():", obj.fullName()); // Steven Hancock
// console.log("obj.fullName2():", obj.fullName2()); // undefined undefined

//@ Critical Principles and Techniques for Functions
//* Functions are First Class Citizens because they are treated as values!
// A function can be assigned to a variable.
// const fun10 = function () {
//   return 10;
// };
// const fun10a = fun10;
// console.log("fun10a === fun10:", fun10a === fun10);
// console.log("fun10():", fun10());
// console.log("fun10a():", fun10a());

// A function can be assigned to a property of an Object.
// const obj = {
//   fun() {
//     console.log("fun");
//   },
// };
// obj.fun();

// A function can be stored in an array.
// const arr = [10, () => 10];
// console.log("arr[1]():", (arr[1] as Function)());

// A function can be part of an expression.
// console.log(
//   30 +
//     (function () {
//       return 10;
//     })()
// );
// console.log("30 + (() => 10)():", 30 + (() => 10)());

// A function can be passed to a function - think callbacks
// setTimeout(() => console.log("time is up"), 1000);

// A function can be returned from a function.
// const getFun = function () {
//   return function () {
//     console.log("I was returned");
//   };
// };
// getFun()();
// const newFun = getFun();
// newFun();
// getFun(); //* No console.log!

//* Higher Order Functions -> take function as parameter or returns a function (e.g. callback)
// setTimeout(() => console.log("logging"), 1000);
// setTimeout(() => console.log(2 + 2), 2000);

// const names = ["Steven", "Adam", "Jose", "Brianna", "Dora"];
// const nums = [100, 95, 45, 10, 25, 5, 70];

// names.sort();
// nums.sort(function (a, b) {
//   return a - b;
// });
// console.log({ names, nums });

// const str1 = "This is a string.";
// const processString = function (str: string, callback: Function) {
//   let newStr = str.toUpperCase();
//   if (typeof callback === "function") {
//     return callback(newStr);
//   }
//   return newStr;
// };

// const str2 = processString(str1, function (val: string) {
//   return val.split(" ");
// });
// console.log({ str2 });

//* Exercise - Higher Order Function
// const createGreeting = function (term: string, name: string, fn?: (arg0: string) => string) {
//   const greeting = `${term} ${name}`;
//   if (typeof fn === "function") {
//     return fn(greeting);
//   }
//   return greeting;
// };

// const greeting = createGreeting("Good Morning", "Annika", (greet: string) => `${greet}!!!!`);
// const greeting1 = createGreeting("Good Morning", "Annika", (greet: string) => greet.toUpperCase());
// const greeting2 = createGreeting("Good Morning", "Annika");
// console.log({ greeting, greeting1, greeting2 });

//* Closure
// function init() {
//   var name = "Mozilla";
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(1, { name });
//   }
//   displayName();
// }
// init();

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(2, { name });
//   }
//   return displayName;
// }
// const myFunc = makeFunc();
// myFunc();

// function makeAdder(x: number) {
//   return function (y: number) {
//     return x + y;
//   };
// }
// const add5 = makeAdder(5);
// console.log("add5(2):", add5(2)); // 7

// const add10 = makeAdder(10);
// console.log("add10(2):", add10(2)); // 12

// const delayedGreeting = function (name: string) {
//   const greet = "Good morning",
//     punct = "!";

//   setTimeout(function () {
//     console.log(`${greet} ${name}${punct}`);
//   }, 3000);
// };
// delayedGreeting("Steve");

//* Using Closure with Returned Functions
// const getFunction = function (num1: number) {
//   const logOut = function (msg: string) {
//     console.log(msg);
//   };
//   const addPunct = function (str: string) {
//     return str + "!";
//   };
//   const multiply = function (n1: number, n2: number) {
//     return n1 * n2;
//   };
//   return function (n2: number) {
//     logOut(addPunct(String(multiply(num1, n2))));
//   };
// };

// const multiplyBy5AndDisplay = getFunction(5);
// const multiplyBy10AndDisplay = getFunction(10);

// multiplyBy5AndDisplay(1);
// getFunction(5)(1);

// multiplyBy10AndDisplay(1);
// getFunction(10)(1);

//* Important Features of Closures
// const getFunction = function (index: number) {
//   const hugeArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

//   const logOut = function (msg: string) {
//     console.log(msg);
//   };

//   const addPunct = function (str: string) {
//     return str + "!";
//   };

//   const multiply = function (n1: number, n2: number) {
//     return n1 * n2;
//   };

//   const updateArray = function (newNum: number) {
//     if (newNum > 100) {
//       hugeArray.push(newNum);
//     }
//   };

//   const createFun = function (n2: number) {
//     logOut(addPunct(String(multiply(hugeArray[index], n2))));
//   };

//   return {
//     updateArray: updateArray,
//     createFun: createFun,
//   };
// };

// const obj = getFunction(1);
// // console.log({ obj });
// obj.createFun(1);
// obj.createFun(2);

// const multiplyBy5AndDisplay = getFunction(5);
// const multiplyBy10AndDisplay = getFunction(10);
// multiplyBy5AndDisplay.createFun(1);
// multiplyBy10AndDisplay.createFun(2);

//* Exercise
// const learners = ["Oswald", "Tara", "Lana", "Nelson", "Sabrina"];

// Output: 5x undefined -> i = 5
// for (var i = 0; i < learners.length; i++) {
//   // console.log({ i });
//   setTimeout(function () {
//     console.log(learners[i]);
//   }, 2000);
// }

// My Solution
// setTimeout(function () {
//   for (var i = 0; i < learners.length; i++) {
//     console.log(learners[i]);
//   }
// }, 2000);

// Using Closure
// for (var i = 0; i < learners.length; i++) {
//   function showLearner() {
//     let learner = learners[i];
//     setTimeout(function () {
//       console.log(learner);
//     }, 2000);
//   }
//   showLearner();
// }

// for (var i = 0; i < learners.length; i++) {
//   function showLearner() {
//     let idx = i;
//     setTimeout(function () {
//       console.log(learners[idx]);
//     }, 2000);
//   }
//   showLearner();
// }

// Using let
// for (let i = 0; i < learners.length; i++) {
//   setTimeout(function () {
//     console.log(learners[i]);
//   }, 2000);
// }

//* Immediately Invoked Function Expressions (IIFEs)
// Use Cases: Private Data and Avoid global variables and variable collision
// (function print(name: string): void {
//   console.log({ name });
// })("Michal");

// (function (): number {
//   const res = 5 + 5;
//   console.log({ res });
//   return res;
// })();

// const sum: number = (function (): number {
//   const res = 5 + 5;
//   console.log({ res });
//   return res;
// })();
// console.log("sum:", sum, typeof sum);

// const sum10: number = (function (num): number {
//   const num1 = 10;
//   const res = num + num1;
//   console.log({ res });
//   return res;
// })(5);

//* Exercise
// (function () {
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//     now = new Date(),
//     message = "Today is " + days[now.getDay()] + ", " + now.getDate() + "!";
//   console.log("message:", message);
// })();

//@ Critical Fundamentals for Objects
//* Computed property names
// let i = 0;
// const a = {
//   [`foo${++i}`]: i,
//   [`foo${++i}`]: i,
//   [`foo${++i}`]: i,
// };

// console.log({ a });
// console.log("a.foo1:", a.foo1); // 1
// console.log("a.foo2:", a.foo2); // 2
// console.log("a.foo3:", a.foo3); // 3

// const items = ["A", "B", "C"];
// const obj = {
//   [items as unknown as string]: "Hello",
// };
// console.log(obj); // A,B,C: "Hello"
// console.log(obj["A,B,C" as keyof typeof obj]); // "Hello"

//* The Nature of Objects
// const param = "size";
// const config = {
//   [param]: 12,
//   [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
// };
// console.log("config:", config); // {size: 12, mobileSize: 4}

// const dataName = "final";
// const dataVal = 80;

// const obj = {
//   newValue: "",
//   newValue2: "",
//   fName: "Steve",
//   lName: "Hancock",
//   score: 90,
//   pass: true,
//   quizzes: ["q1", "q2", "q3"],
//   created: new Date(),
//   address: {
//     street: "45 main",
//     city: "Lehi",
//   },
//   fullName() {
//     return `${this.fName} ${this.lName}`;
//   },
//   [dataName]: dataVal,
//   dateName: dataVal,
// };

// obj.newValue = "newValue";
// obj["newValue2"] = "newValue2";
// obj[dataName] = 123;

// Object.defineProperty(obj, "bDay", {
//   value: "May 25",
//   writable: false,
//   configurable: false,
//   // enumerable: false,
//   enumerable: true,
// });

// console.log("obj.fullName():", obj.fullName());
// console.log("obj:", obj);
// console.log("obj.created:", obj.created, typeof obj.created);
// console.log("obj.pass:", obj.pass);
// console.log('obj["pass"]:', obj["pass"]);
// console.log("[dataName]:", [dataName]);

// @ts-ignore
// console.log("obj.__proto__:", obj.__proto__); //* This shouldn't be used!
// console.log("Object.getPrototypeOf(obj):", Object.getPrototypeOf(obj));

// const date = new Date();
// console.log({ date });
// console.dir(date);
// console.log("date.getDate():", date.getDate());

//* Prototype Chains
// const arr = [1, 2, 3, 4, 5];
// console.log(
//   "Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr))):",
//   Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr)))
// );

// interface Obj {
//   fName?: string;
//   lName?: string;
//   fullName?(): Function;
// }

// const obj = {
//   fName: "Steven",
//   lName: "Hancock",
// } as Obj;

// const obj2 = {
//   fullName() {
//     return `${this.fName} ${this.lName}`;
//   },
// } as Obj | any;

// const obj3 = Object.create(obj2) as Obj;
// obj3.fName = "Lynette";
// obj3.lName = "Jorgensen";
// console.log({ obj3 });

//* Object.valueOf()
// const obj = { foo: 1 };
// console.log("obj.valueOf() === obj:", obj.valueOf() === obj); // true
// console.log("obj.valueOf():", obj.valueOf());

//* Object Properties have Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
// const obj2 = {
//   fName: "Jorge",
//   age: 45,
// };

// console.log("obj2.toString(), obj2.valueOf():", obj2.toString(), obj2.valueOf());

// const obj = {
//   fName: "Jorge",
//   age: 45,
//   //* Overwritten methods!
//   toString() {
//     return this.fName;
//   },
//   valueOf() {
//     return this.age;
//   },
// };

// console.log("obj.toString(), obj.valueOf():", obj.toString(), obj.valueOf());
// console.log("10+obj.valueOf():", 10 + obj.valueOf());

//@ Object Oriented Programming
//* Function Factory
// const createRoom = function (name: string, capacity: number) {
//   return {
//     name,
//     capacity,
//     available: true,
//     schedule: [] as { dtm: Date; len: number }[],
//     reserve(dtm: Date, len: number) {
//       this.schedule.push({ dtm, len });
//     },
//   };
// };

// const boardRoom = createRoom("Board Room", 20);
// const trainingRoomA = createRoom("Training Room A", 35);
// boardRoom.reserve(new Date("2023-11-11T15:00"), 60);

// console.log("boardRoom, trainingRoomA:", boardRoom, trainingRoomA);

//* Object.create()
// interface Obj {
//   greet: Function;
//   name?: string;
// }

// const objProto = {
//   greet() {
//     console.log(`Hi ${this.name}!`);
//   },
// } as Obj;

// const obj = Object.create(objProto);
// obj.name = "Michal";
// console.log({ obj });
// obj.greet(); //* Hi Michal!

//* Prototypes with Factory Function
// interface ObjProto {
//   name?: string;
//   capacity?: number;
//   available?: boolean;
//   schedule?: {
//     dtm: Date;
//     len: number;
//   }[];
//   reserve?: Function;
// }

// const objProto = {
//   reserve(dtm: Date, len: number) {
//     this.schedule!.push({ dtm, len });
//   },
// } as ObjProto;

// const createRoom = function (name: string, capacity: number): ObjProto {
//   const obj = Object.create(objProto);

//* V1
// obj.name = name;
// obj.capacity = capacity;
// obj.available = true;
// obj.schedule = [];
// return obj;

//* V2
//   return Object.assign(obj, {
//     name,
//     capacity,
//     available: true,
//     schedule: [],
//   });
// };

// const boardRoom = createRoom("Board Room", 20);
// const trainingRoomA = createRoom("Training Room A", 35);
// boardRoom.reserve!(new Date(), 60);

// console.log("boardRoom, trainingRoomA:", boardRoom, trainingRoomA);

//* Exercise
// interface PostProto {
//   text?: string;
//   dept?: string;
//   date?: number;
//   getAge?: Function;
// }

// const postProto = {
//   getAge() {
//     return Date.now() - (this?.date as number);
//   },
// } as PostProto;

// const createPost = function (text: string, dept: string) {
//   const obj = Object.create(postProto);

//   return Object.assign(obj, {
//     text,
//     dept,
//     date: new Date(),
//   });
// };

// const post = createPost("Lorem ipsum", "HR");
// setTimeout(() => {
//   console.log("post.getAge():", post.getAge());
// }, 3000);

//* Constructor Function
const MeetingRoom = function (this: any, name: string, capacity: number) {
  this.name = name;
  this.capacity = capacity;
  this.available = true;
  this.schedule = [];
};

//* V1
// MeetingRoom.prototype.reserve = function (dtm: Date, len: number) {
//   this.schedule.push({ dtm, len });
// };
// MeetingRoom.prototype.company = "ABC Coop";

//* V2
MeetingRoom.prototype = {
  reserve(dtm: Date, len: number) {
    this.schedule.push({ dtm, len });
  },
  company: "ABC",
};

const boardRoom = new (MeetingRoom as any)("Board Room", 20);
const trainingRoomA = new (MeetingRoom as any)("Training Room A", 35);
console.log({ boardRoom, trainingRoomA });

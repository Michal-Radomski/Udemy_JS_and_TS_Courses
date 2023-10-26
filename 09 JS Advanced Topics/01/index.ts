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

//* Call and Apply
// const greetingsFunk = function (this: any, name: string) {
//   console.log("Good Morning");
//   console.log("this:", this);
//   console.log({ name });
// };
// greetingsFunk("function");
// greetingsFunk.call(this, "call");
// greetingsFunk.apply(this, ["apply"]);

const user1 = {
  firstName: "John",
  lastName: "Anderson",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const user2 = {
  firstName: "Sarah",
  lastName: "West",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const greeting = function (this: any, term: string, punct: string) {
  console.log(term + " " + this.firstName + punct);
};
greeting.apply(user1, ["Good Morning", "!"]);
greeting.apply(user2, ["Good Afternoon", "!"]);

console.log("user1.fullName.call(user2):", user1.fullName.call(user2));

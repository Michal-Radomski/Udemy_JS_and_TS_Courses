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

//* This

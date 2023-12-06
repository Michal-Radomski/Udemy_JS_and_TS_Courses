//@ Async JS
//* ES8 (ES2017) - Async/ Await
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(1, "data:", data));

// (async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(2, "data:", data);
// })();

//* ES9 (ES2018)
// const animals = { tiger: 23, lion: 5, monkey: 2 };
// const { tiger, ...rest } = animals;
// console.log({ tiger, rest });

//* Job Queue: Job queue has a higher priority than callback queue!
//* Callback Queue - Task Queue
// setTimeout(() => {
//   console.log("1", "Is the loneliest number");
// }, 0);
// setTimeout(() => {
//   console.log("2", "Can be as bad as one");
// }, 10);

//* Job Queue - Microtask Queue
// Promise.resolve("Hi").then((data) => console.log("3", "data:", data));

//* 3
// console.log("4", "Is a crowd");

//* Parallel, Sequence and Race
// const promisify = (item: string, delay: number): Promise<string> =>
//   new Promise((resolve) => setTimeout(() => resolve(item), delay));

// const a = (): Promise<string> => promisify("a", 100);
// const b = (): Promise<string> => promisify("b", 5000);
// const c = (): Promise<string> => promisify("c", 3000);

// async function parallel(): Promise<string> {
//   const promises = [a(), b(), c()];
//   const [output1, output2, output3] = await Promise.all(promises);
//   return `Parallel is done: ${output1} ${output2} ${output3}`;
// }

// async function race(): Promise<string> {
//   const promises = [a(), b(), c()];
//   const output1 = await Promise.race(promises);
//   return `Race is done: ${output1}`;
// }

// async function sequence(): Promise<string> {
//   const output1 = await a();
//   const output2 = await b();
//   const output3 = await c();
//   return `Sequence is done ${output1} ${output2} ${output3}`;
// }

// sequence()
//   .then(console.log)
//   .catch((err) => console.log({ err }));
// parallel()
//   .then(console.log)
//   .catch((err) => console.log({ err }));
// race()
//   .then(console.log)
//   .catch((err) => console.log({ err }));

//* ES2020: Promise.allSettled()
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((_resolve, reject) => setTimeout(reject, 100, "foo"));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) => results.forEach((result) => console.log("result.status:", result.status)));

//* ES2021: Promise.any()
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

// const promises = [promise1, promise2, promise3];
// Promise.any(promises).then((value) => console.log({ value })); // Expected output: "quick"

//* Threads, Concurrency and Parallelism
// import { spawn } from "node:child_process";

// const lsProcess = spawn("ls");
// lsProcess.stdout.on("data", (data) => {
//   console.log(`stdout:\n${data}`);
// });
// lsProcess.stderr.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });
// lsProcess.on("exit", (code) => {
//   console.log(`Process ended with ${code}`);
// });

//@ Error Handling
//* Errors In JavaScript -> Execution of the current function will stop
// throw 'Error';   // String type
// throw 42;         // Number type
// throw true;       // Boolean type
// throw Error // Throws a previously defined value (e.g. within a catch block)
// throw new Error("Error") // Will create an instance of an Error in JavaScript and stop the execution of your script.

// function a() {
//   const b = new Error("What?");
//   return b;
// }
// console.log("a().stack:", a().stack);

// const message = "Error";
// const error1 = new Error(message);
// const error2 = new SyntaxError(message);
// const error3 = new ReferenceError(message);
// console.log({ error1, error2, error3 });

//* Try Catch Block - Sync Code
// function fail() {
//   try {
//     console.log("This works");
//     throw new Error("Oopsie");
//   } catch (err) {
//     console.log("error", { err });
//   } finally {
//     console.log("Still good");
//     return "Returning from fail";
//   }
//   //* console.log("Never going to get here"); //* If finally: not reachable!
// }
// fail();

//* Async Error Handling 1 -> always catch with then!
// Promise.resolve("AsyncFail")
//   .then((response) => {
//     console.log(1, { response });
//     throw new Error("#1 fail");
//   })
//   .then((response) => {
//     console.log(2, { response }); //* Doesn't work!
//   })
//   .catch((err) => {
//     console.error(3, "error", "err.message:", err.message);
//   })
//   .then((response) => {
//     console.log(4, "Hi am I still needed?", { response });
//     return "done";
//   })
//   .catch((err) => {
//     console.error(5, { err });
//     return "failed";
//   });

//* Async Error Handling 2 -> try catch block * async await
// (async function () {
//   try {
//     await Promise.reject("Oopsie");
//     await Promise.reject("Oopsie2");
//   } catch (err) {
//     console.error("Error", { err });
//   }
//   console.log("This is still good!");
// })();

//* Exercise
// (function () {
//   try {
//     throw new Error();
//   } catch (err) {
//     var err = 5;
//     var boo = 10;
//     console.log(1, { err });
//   }
//   console.log(2, { err }); //* { err: undefined }
//   console.log(3, boo);
// })();

//* Extending Errors
// class AuthenticationError extends Error {
//   constructor(message: string) {
//     super(message);
//     this.name = "ValidationError";
//     this.message = message;
//   }
// }

// class PermissionError extends Error {
//   favouriteSnack: string;
//   constructor(message: string) {
//     super(message);
//     this.name = "PermissionError";
//     this.message = message;
//     this.favouriteSnack = "grapes";
//   }
// }

// class DatabaseError extends Error {
//   constructor(message: string) {
//     super(message);
//     this.name = "DatabaseError";
//     this.message = message;
//   }
// }

// throw new AuthenticationError("A permission error");
// throw new PermissionError("A permission error");
// throw new DatabaseError("A permission error");

//@ Modules in JS
//* Global scope - bad approach!
// const harry = "potter";
// const voldemort = "He who must not be named";
// function fight(char1: string, char2: string) {
//   const attack1 = Math.floor(Math.random() * char1.length);
//   const attack2 = Math.floor(Math.random() * char2.length);
//   console.log({ attack1, attack2 });
//   return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
// }
// console.log("fight(harry, voldemort):", fight(harry, voldemort));

//* Module Pattern -> IIFE -> only one variable in global scope: fightModule!
// const test = "test";

// const fightModule = (function (test: string) {
//   console.log({ test });
//   const harry = "potter";
//   const voldemort = "He who must not be named";
//   function fight(char1: string, char2: string) {
//     const attack1 = Math.floor(Math.random() * char1.length);
//     const attack2 = Math.floor(Math.random() * char2.length);
//     console.log({ attack1, attack2 });
//     return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
//   }
//   console.log("fight(harry, voldemort):", fight(harry, voldemort));
//   return { fight: fight };
// })(test);
// console.log("fightModule.fight:", fightModule.fight);
// console.log("fightModule:", fightModule, typeof fightModule);

//* CommonJS, AMD, UMD
// 1. CommonJS
// module.exports = {
//   fight:fight
// }
// const fight = require("module_fight").fight

// 1a. Browserify module
// 2. AMD -> requireJS
// 3. UMD

//* ES6 Modules
// export: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// In HTML file add: type="module"

//@ Data Structures in JS
//* Arrays (in JS arrays are dynamic)
// const strings = ["a", "b", "c", "d"]; //* 32 bits system: 4*4 = 16 bytes of storage
// const numbers = [1, 2, 3, 4, 5];
// console.log({ strings, numbers });

// strings.push("e"); // O(1)
// strings.pop(); // O(1)

// strings.unshift("x"); // O(n)
// strings.shift(); // O(n)
// console.log({ strings });

// strings.splice(2, 0, "Test");
// console.log({ strings }); // O(n/2) -> O(n)

//* Implementing An Array
// class CustomArray {
//   length: number;
//   data: { [key: string]: string };
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index: number) {
//     return this.data[index as keyof typeof this.data];
//   }

//   push(item: string) {
//     this.data[this.length as keyof typeof this.data] = item;
//     this.length++;
//     return this.data;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   deleteAtIndex(index: number) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }

//   shiftItems(index: number) {
//     //* O(n)
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     console.log("this.data[this.length - 1]:", this.data[this.length - 1]);
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const customArray = new CustomArray();
// console.log(1, "customArray:", customArray);
// customArray.push("Hi");
// customArray.push("you");
// customArray.push("!");
// customArray.pop();
// customArray.deleteAtIndex(0);
// customArray.push("are");
// customArray.push("nice");
// customArray.shiftItems(0);
// console.log(2, "customArray:", customArray);

//* Exercise - reverse an array
// function reverse(str: string) {
//   if (!str || typeof str != "string" || str.length < 2) return str;

//   const backwards = [];
//   const totalItems = str.length - 1;
//   // console.log({ totalItems });
//   for (let i = totalItems; i >= 0; i--) {
//     backwards.push(str[i]);
//   }
//   return backwards.join("");
// }

// function reverse2(str: string) {
//   // Check for valid input
//   return str.split("").reverse().join("");
// }

// const reverse3 = (str: string) => [...str].reverse().join("");

// console.log('reverse("Timbits Hi"):', reverse("Timbits Hi"));
// console.log('reverse2("Timbits Hi"):', reverse2("Timbits Hi"));
// console.log('reverse3("Timbits Hi"):', reverse3("Timbits Hi"));

//* Exercise - merge arrays
// function mergeSortedArrays(array1: number[], array2: number[]) {
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;

//   // Check if array.length >= 1
//   if (array1.length === 0) {
//     return array2;
//   }
//   if (array2.length === 0) {
//     return array1;
//   }

//   while (array1Item || array2Item) {
//     // console.log({ array1Item, array2Item });
//     if (array2Item === undefined || array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j++;
//     }
//   }
//   return mergedArray;
// }

// console.log("mergeSortedArrays([0, 3, 4, 31,45], [3, 4, 6, 30]):", mergeSortedArrays([0, 3, 4, 31, 45], [3, 4, 6, 30]));

//@ Hash Tables (in JS -> Objects)
//* Hash Function
// const MD5 = function (d: string) {
//   var r = M(V(Y(X(d), 8 * d.length)));
//   return r.toLowerCase();
// };
// function M(d: string) {
//   for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)
//     (_ = d.charCodeAt(r)), (f += m.charAt((_ >>> 4) & 15) + m.charAt(15 & _));
//   return f;
// }
// function X(d: string) {
//   for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
//   for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
//   return _;
// }
// function V(d: string | any[]) {
//   for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode((d[m >> 5] >>> m % 32) & 255);
//   return _;
// }
// function Y(d: string | any[], _: number) {
//   // @ts-ignore
//   (d[_ >> 5] |= 128 << _ % 32), (d[14 + (((_ + 64) >>> 9) << 4)] = _);
//   for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
//     var h = m,
//       t = f,
//       g = r,
//       e = i;
//     (f = md5_ii(
//       (f = md5_ii(
//         (f = md5_ii(
//           (f = md5_ii(
//             (f = md5_hh(
//               (f = md5_hh(
//                 (f = md5_hh(
//                   (f = md5_hh(
//                     (f = md5_gg(
//                       (f = md5_gg(
//                         (f = md5_gg(
//                           (f = md5_gg(
//                             (f = md5_ff(
//                               (f = md5_ff(
//                                 (f = md5_ff(
//                                   (f = md5_ff(
//                                     f,
//                                     (r = md5_ff(
//                                       r,
//                                       (i = md5_ff(
//                                         i,
//                                         (m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936)),
//                                         f,
//                                         r,
//                                         d[n + 1],
//                                         12,
//                                         -389564586
//                                       )),
//                                       m,
//                                       f,
//                                       d[n + 2],
//                                       17,
//                                       606105819
//                                     )),
//                                     i,
//                                     m,
//                                     d[n + 3],
//                                     22,
//                                     -1044525330
//                                   )),
//                                   (r = md5_ff(
//                                     r,
//                                     (i = md5_ff(
//                                       i,
//                                       (m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897)),
//                                       f,
//                                       r,
//                                       d[n + 5],
//                                       12,
//                                       1200080426
//                                     )),
//                                     m,
//                                     f,
//                                     d[n + 6],
//                                     17,
//                                     -1473231341
//                                   )),
//                                   i,
//                                   m,
//                                   d[n + 7],
//                                   22,
//                                   -45705983
//                                 )),
//                                 (r = md5_ff(
//                                   r,
//                                   (i = md5_ff(
//                                     i,
//                                     (m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416)),
//                                     f,
//                                     r,
//                                     d[n + 9],
//                                     12,
//                                     -1958414417
//                                   )),
//                                   m,
//                                   f,
//                                   d[n + 10],
//                                   17,
//                                   -42063
//                                 )),
//                                 i,
//                                 m,
//                                 d[n + 11],
//                                 22,
//                                 -1990404162
//                               )),
//                               (r = md5_ff(
//                                 r,
//                                 (i = md5_ff(
//                                   i,
//                                   (m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682)),
//                                   f,
//                                   r,
//                                   d[n + 13],
//                                   12,
//                                   -40341101
//                                 )),
//                                 m,
//                                 f,
//                                 d[n + 14],
//                                 17,
//                                 -1502002290
//                               )),
//                               i,
//                               m,
//                               d[n + 15],
//                               22,
//                               1236535329
//                             )),
//                             (r = md5_gg(
//                               r,
//                               (i = md5_gg(
//                                 i,
//                                 (m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510)),
//                                 f,
//                                 r,
//                                 d[n + 6],
//                                 9,
//                                 -1069501632
//                               )),
//                               m,
//                               f,
//                               d[n + 11],
//                               14,
//                               643717713
//                             )),
//                             i,
//                             m,
//                             d[n + 0],
//                             20,
//                             -373897302
//                           )),
//                           (r = md5_gg(
//                             r,
//                             (i = md5_gg(i, (m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691)), f, r, d[n + 10], 9, 38016083)),
//                             m,
//                             f,
//                             d[n + 15],
//                             14,
//                             -660478335
//                           )),
//                           i,
//                           m,
//                           d[n + 4],
//                           20,
//                           -405537848
//                         )),
//                         (r = md5_gg(
//                           r,
//                           (i = md5_gg(i, (m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438)), f, r, d[n + 14], 9, -1019803690)),
//                           m,
//                           f,
//                           d[n + 3],
//                           14,
//                           -187363961
//                         )),
//                         i,
//                         m,
//                         d[n + 8],
//                         20,
//                         1163531501
//                       )),
//                       (r = md5_gg(
//                         r,
//                         (i = md5_gg(i, (m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467)), f, r, d[n + 2], 9, -51403784)),
//                         m,
//                         f,
//                         d[n + 7],
//                         14,
//                         1735328473
//                       )),
//                       i,
//                       m,
//                       d[n + 12],
//                       20,
//                       -1926607734
//                     )),
//                     (r = md5_hh(
//                       r,
//                       (i = md5_hh(i, (m = md5_hh(m, f, r, i, d[n + 5], 4, -378558)), f, r, d[n + 8], 11, -2022574463)),
//                       m,
//                       f,
//                       d[n + 11],
//                       16,
//                       1839030562
//                     )),
//                     i,
//                     m,
//                     d[n + 14],
//                     23,
//                     -35309556
//                   )),
//                   (r = md5_hh(
//                     r,
//                     (i = md5_hh(i, (m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060)), f, r, d[n + 4], 11, 1272893353)),
//                     m,
//                     f,
//                     d[n + 7],
//                     16,
//                     -155497632
//                   )),
//                   i,
//                   m,
//                   d[n + 10],
//                   23,
//                   -1094730640
//                 )),
//                 (r = md5_hh(
//                   r,
//                   (i = md5_hh(i, (m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174)), f, r, d[n + 0], 11, -358537222)),
//                   m,
//                   f,
//                   d[n + 3],
//                   16,
//                   -722521979
//                 )),
//                 i,
//                 m,
//                 d[n + 6],
//                 23,
//                 76029189
//               )),
//               (r = md5_hh(
//                 r,
//                 (i = md5_hh(i, (m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487)), f, r, d[n + 12], 11, -421815835)),
//                 m,
//                 f,
//                 d[n + 15],
//                 16,
//                 530742520
//               )),
//               i,
//               m,
//               d[n + 2],
//               23,
//               -995338651
//             )),
//             (r = md5_ii(
//               r,
//               (i = md5_ii(i, (m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844)), f, r, d[n + 7], 10, 1126891415)),
//               m,
//               f,
//               d[n + 14],
//               15,
//               -1416354905
//             )),
//             i,
//             m,
//             d[n + 5],
//             21,
//             -57434055
//           )),
//           (r = md5_ii(
//             r,
//             (i = md5_ii(i, (m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571)), f, r, d[n + 3], 10, -1894986606)),
//             m,
//             f,
//             d[n + 10],
//             15,
//             -1051523
//           )),
//           i,
//           m,
//           d[n + 1],
//           21,
//           -2054922799
//         )),
//         (r = md5_ii(
//           r,
//           (i = md5_ii(i, (m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359)), f, r, d[n + 15], 10, -30611744)),
//           m,
//           f,
//           d[n + 6],
//           15,
//           -1560198380
//         )),
//         i,
//         m,
//         d[n + 13],
//         21,
//         1309151649
//       )),
//       (r = md5_ii(
//         r,
//         (i = md5_ii(i, (m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070)), f, r, d[n + 11], 10, -1120210379)),
//         m,
//         f,
//         d[n + 2],
//         15,
//         718787259
//       )),
//       i,
//       m,
//       d[n + 9],
//       21,
//       -343485551
//     )),
//       (m = safe_add(m, h)),
//       (f = safe_add(f, t)),
//       (r = safe_add(r, g)),
//       (i = safe_add(i, e));
//   }
//   return Array(m, f, r, i);
// }
// function md5_cmn(d: number, _: any, m: any, f: any, r: any, i: any) {
//   return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
// }
// function md5_ff(d: number, _: number, m: number, f: number, r: any, i: number, n: number) {
//   return md5_cmn((_ & m) | (~_ & f), d, _, r, i, n);
// }
// function md5_gg(d: number, _: number, m: number, f: number, r: any, i: number, n: number) {
//   return md5_cmn((_ & f) | (m & ~f), d, _, r, i, n);
// }
// function md5_hh(d: number, _: number, m: number, f: number, r: any, i: number, n: number) {
//   return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
// }
// function md5_ii(d: number, _: number, m: number, f: number, r: any, i: number, n: number) {
//   return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
// }
// function safe_add(d: number, _: number) {
//   var m = (65535 & d) + (65535 & _);
//   return (((d >> 16) + (_ >> 16) + (m >> 16)) << 16) | (65535 & m);
// }
// function bit_rol(d: number, _: number) {
//   return (d << _) | (d >>> (32 - _));
// }

// const value = "Test";
// const result = MD5(value);
// console.log({ result }); //* result: '0cbc6611f5540bd0809a388dc95a615b'

//* Exercise
// class HashTable {
//   data: [string, number][][];
//   constructor(size: number) {
//     this.data = new Array(size);
//   }

//   // underscore '_' -> private method/ property
//   _hash(key: string) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//       // console.log(key[i], "hash:", hash);
//     }
//     return hash;
//   }

//   set(key: string, value: number) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key: string) {
//     const address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }

//   keys() {
//     const keysArray = [];
//     // console.log("this.data.length:", this.data.length);
//     // console.log("this.data:", this.data);
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const customHashTable = new HashTable(50);
// // console.log("customHashTable:", customHashTable);
// customHashTable.set("grapes", 10000);
// customHashTable.set("grapes", 10000);
// console.log('customHashTable.get("grapes"):', customHashTable.get("grapes"));
// customHashTable.set("apples", 9);
// console.log('customHashTable.get("apples"):', customHashTable.get("apples"));
// // console.log("customHashTable:", customHashTable);
// console.log("customHashTable.data[23][0]:", customHashTable.data[23][0]);
// console.log("customHashTable.keys():", customHashTable.keys());

//* Exercise
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4] -> it should return 2
//Given an array = [2,1,1,2,3,5,1,2,4] -> it should return 1
//Given an array = [2,3,4,5] -> it should return undefined

// function firstRecurringCharacter(input: number[]) {
//   let set = new Set();
//   for (const num of input) {
//     if (set.has(num)) {
//       return num;
//     }
//     set.add(num);
//   }
//   return undefined;
// }
// console.log("firstRecurringCharacter([1, 5, 5, 1, 3, 4, 6]):", firstRecurringCharacter([1, 5, 5, 1, 3, 4, 6]));
// console.log("firstRecurringCharacter([2,5,1,2,3,5,1,2,4]):", firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log("firstRecurringCharacter([2,1,1,2,3,5,1,2,4]):", firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log("firstRecurringCharacter([2,5,5,2,3,5,1,2,4]):", firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

function firstRecurringCharacter2(input: number[]) {
  const map = {} as { [key: number]: number };
  for (let i = 0; i < input.length; i++) {
    // console.log("map[input[i]]:", map[input[i]]);
    if (map[input[i] as keyof typeof map] !== undefined) {
      return input[i];
    } else {
      map[input[i] as keyof typeof map] = i;
    }
  }
  return undefined;
}

console.log("firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]):", firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]));
console.log("firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]):", firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log("firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]):", firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log("firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]):", firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));

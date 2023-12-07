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
// https://en.wikipedia.org/wiki/Hash_table

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

// function firstRecurringCharacter2(input: number[]) {
//   const map = {} as { [key: number]: number };
//   for (let i = 0; i < input.length; i++) {
//     // console.log("map[input[i]]:", map[input[i]]);
//     if (map[input[i] as keyof typeof map] !== undefined) {
//       return input[i];
//     } else {
//       map[input[i] as keyof typeof map] = i;
//     }
//   }
//   return undefined;
// }

// console.log("firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]):", firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]));
// console.log("firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]):", firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log("firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]):", firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log("firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]):", firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));

//@ Appendix - JS Basics + Intermediate
//* Scope
// const test = "test";
// function f1() {
//   const test = "f1";
//   console.log(1, { test });
// }
// function f2() {
//   const test = "f2";
//   console.log(2, { test });
// }
// function f3() {
//   const test = "f3";
//   console.log(3, { test });
// }
// console.log(0, { test });
// f1();
// f2();
// f3();
// console.log(4, { test });

//* Switch
// const expr: string = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound."); // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

//* Dynamic property name in object
// const test = "test_value";
// const obj = {
//   [test]: "hello",
//   [1 + 2]: "world",
// };
// console.log("obj:", obj);

// const obj1 = { value: 10 };
// const obj2 = obj1;
// console.log("obj1 === obj2:", obj1 === obj2);

//* ES7
// console.log('"Hello".includes("e"):', "Hello".includes("e")); // true
// const square = (x: number) => x ** 2;
// console.log("square(4):", square(4)); // 4^2 = 16
// const cube = (x: number) => x ** 3;
// console.log("cube(4):", cube(4)); // 4^3 = 64

//* ES8
// console.log("2".padStart(3, "*")); // '**2'
// console.log("2".padEnd(3, "*")); // '2**'

// const obj = {
//   user1: "Santa",
//   user2: "Rudolf",
//   user3: "Mr.Grinch",
// };
// Object.keys(obj).forEach((key, index) => {
//   console.log(index, key, obj[key as keyof typeof obj]);
// });

//* ES9 -> async/await

//* ES10 (ES2019)
// flatMap
// const arr1 = [1, 2, 3, 4];
// const arr1_1 = arr1.map((x) => [x * 2]);
// console.log("arr1_1:", arr1_1); // [[2], [4], [6], [8]]
// const arr1_2 = arr1.flatMap((x) => [x * 2]);
// console.log("arr1_2:", arr1_2); // [2, 4, 6, 8]

// const greeting = [
//   ["Hello", "young", "grasshopper!"],
//   ["you", "are"],
//   ["learning", "fast!"],
// ];
// console.log(greeting.flatMap((x) => x.join(" "))); // [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// console.log(greeting.flatMap((x) => x.join(" ")).join(" ")); // Hello young grasshopper! you are learning fast!

// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// console.log(trapped.flat(Infinity)); // [3]

// const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";
// console.log(userEmail3.trimEnd().trimStart()); // Hello young grasshopper! you are learning fast!
// console.log(userEmail3.trim()); //Hello young grasshopper! you are learning fast!

//* Loops
// const basket = ["apples", "oranges", "grapes", "bananas"];

// let basketIndex = 0;
// while (basketIndex < basket.length) {
//   console.log({ basketIndex }, basket[basketIndex]);
//   basketIndex++;
// }

// for (let i = 0; i < basket.length; i++) {
//   console.log({ i }, basket[i]);
// }

// basket.forEach((fruit, index) => console.log({ index }, fruit));

// for (const item of basket) {
//   console.log("basket.indexOf(item):", basket.indexOf(item), item);
// }

// // Can't be used with objects
// for (const index of basket.keys()) {
//   console.log({ index }, basket[index]);
// }

// for (const item in basket) {
//   console.log({ item }, basket[item]);
// }

// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 15,
//   bananas: 20,
// };
// for (const item in detailedBasket) {
//   console.log({ item }, detailedBasket[item as keyof typeof detailedBasket]);
// }

//* ES2020
// console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991 = 2^53 - 1

// console.log("Number.MIN_VALUE", Number.MIN_VALUE); // 2^(-1074) -> 5e-324
// console.log("Number.MAX_VALUE", Number.MAX_VALUE); // 2^1024 - 2^971 -> 1.7976931348623157e+308

// const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// console.log(hugeBin, typeof hugeBin); // 9007199254740991n bigint

// const alsoHuge = BigInt(9007199254740991); // 9007199254740991n bigint

// const hugeString = BigInt("9007199254740991"); // 9007199254740991n bigint

// const hugeHex = BigInt("0x1fffffffffffff"); // 9007199254740991n bigint

// const hugeOctal = BigInt("0o377777777777777777"); // 9007199254740991n bigint

// console.log(
//   { alsoHuge, hugeString, hugeHex, hugeOctal },
//   typeof alsoHuge,
//   typeof hugeString,
//   typeof hugeHex,
//   typeof hugeOctal
// );

// Nullish coalescing operator (??) -> checks if null or undefined
// const foo = null ?? "default string";
// console.log({ foo }); // Expected output: "default string"

// const baz = 0 ?? 42;
// console.log({ baz }); // Expected output: 0

// // globalThis -> works outside a browser
// console.log("globalThis:", globalThis);

//* ES2021
// const str = "string string string";
// console.log('str.replaceAll("i", "III"):', str.replaceAll("i", "III")); // strIIIng strIIIng strIIIng

//* ES2022
// const arr = [100, 200, 300, 400, 500];
// console.log("arr.at(0):", arr.at(0)); // 100
// console.log("arr.at(-1):", arr.at(-1)); // 500
// console.log("arr.at(-2):", arr.at(-2)); // 400

//* ES2023 -> Methods are correct!
// findLast() + findLastIndex()
const array1 = [5, 12, 50, 130, 44];
// @ts-ignore
const found = array1.findLast((element) => element > 45);
console.log({ found }); // Expected output: 130

const isLargeNumber = (element: number) => element > 45;
// @ts-ignore
console.log("array1.findLastIndex(isLargeNumber):", array1.findLastIndex(isLargeNumber)); // 3 ,Index of element with value: 130

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];
function isNotEnough(item: { quantity: number }) {
  return item.quantity < 2;
}
// @ts-ignore
console.log("inventory.findLast(isNotEnough):", inventory.findLast(isNotEnough)); // { name: "fish", quantity: 1 }

// toReversed()
const items = [1, 2, 3];
console.log({ items }); // [1, 2, 3]

// @ts-ignore
const reversedItems = items.toReversed();
console.log({ reversedItems }); // [3, 2, 1]
console.log({ items }); // [1, 2, 3]

// toSorted()
const values = [1, 10, 21, 2];
// @ts-ignore
const sortedValues = values.toSorted((a, b) => a - b);
console.log({ sortedValues }); // [1, 2, 10, 21]
console.log({ values }); // [1, 10, 21, 2]

// toSpliced()
const months = ["Jan", "Mar", "Apr", "May"];
// Inserting an element at index 1
// @ts-ignore
const months2 = months.toSpliced(1, 0, "Feb");
console.log({ months2 }); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
// @ts-ignore
const months3 = months2.toSpliced(2, 2);
console.log({ months3 }); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
// @ts-ignore
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log({ months4 }); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log({ months }); // ["Jan", "Mar", "Apr", "May"]

// with() -> Creating a new array with a single element changed
const arr = [1, 2, 3, 4, 5];
// @ts-ignore
console.log("arr.with(2, 6):", arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log({ arr }); // [1, 2, 3, 4, 5]

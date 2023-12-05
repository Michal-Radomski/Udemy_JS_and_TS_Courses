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
class CustomArray {
  length: number;
  data: { [key: string]: string };
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number) {
    return this.data[index as keyof typeof this.data];
  }

  push(item: string) {
    this.data[this.length as keyof typeof this.data] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index: number) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const customArray = new CustomArray();
console.log(1, "customArray:", customArray);
customArray.push("Hi");
customArray.push("you");
customArray.push("!");
customArray.pop();
customArray.deleteAtIndex(0);
customArray.push("are");
customArray.push("nice");
customArray.shiftItems(0);
console.log(2, "customArray:", customArray);

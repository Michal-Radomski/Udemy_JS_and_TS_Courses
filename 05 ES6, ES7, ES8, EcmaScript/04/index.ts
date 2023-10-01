//* Proxy
// const target = {
//   notProxied: "original value",
//   proxied: "original value",
// };

// const handler = {
//   get(target: any, prop: string, receiver: any) {
//     if (prop === "proxied") {
//       return "replaced value";
//     }
//     return Reflect.get(target, prop, receiver);
//   },
// };

// const proxy = new Proxy(target, handler);
// console.log({ proxy });

//* Proxy
// const handler = {
//   get: (target: { [x: string]: any }, propName: string | number) => {
//     console.log({ target });
//     console.log({ propName });
//     return target[propName];
//   },
//   set: (target: { [x: string]: any }, propName: string, newValue: any) => {
//     console.log({ target });
//     console.log({ propName });
//     console.log({ newValue });
//     // if (propName === "age") {
//     //   if (typeof newValue !== "number") {
//     //     throw new TypeError("Age must be a valid number");
//     //   } else {
//     //     target[propName] = newValue;
//     //   }
//     // } else {
//     //   target[propName] = newValue;
//     // }
//     return (target[propName] = newValue);
//   },
//   has: (target: any, propName: any) => {
//     console.log("Checking if has...");
//     console.log({ target, propName });
//     return true;
//   },
// };

// const newObj = new Proxy({} as any, handler as any);
// newObj.name = "Rob";
// newObj.job = "Instructor";
// console.log("Name: ", newObj.name);
// console.log("Job: ", newObj.job);
// console.log("Age: ", newObj.age);
// newObj.age = 36;
// console.log("Age: ", newObj.age);
// // newObj.age = "Ha ha";
// console.log("Age: ", newObj.age);

// // if ("name" in newObj) {
// //   console.log("I found it!");
// // }

// console.log({ newObj });

//* Make a proxy out of a constructor/class object
// class Car {
//   make: string;
//   model: string;
//   constructor(make: string, model: string) {
//     this.make = make;
//     this.model = model;
//   }
//   printInfo() {
//     console.log(this.make, this.model);
//   }
// }

// const handler = {
//   get: (_target: any, propName: any) => {
//     console.log(`Someone is trying to get ${propName} property.`);
//   },
// };

// const aCar = new Car(`toyota`, `camry`);
// const carProxy = new Proxy(aCar, handler);
// console.log("carProxy.make:", carProxy.make);

//* Apply trap
// function sum(x: number, y: number) {
//   return x + y;
// }

// const handler = {
//   apply: (target: (arg0: any, arg1: any) => number, _thisArg: any, argsList: any[]) => {
//     console.log("Someone called a function");
//     return target(argsList[0], argsList[1]) * 100; //* Sum x 100!
//     // return target(argsList[0], argsList[1]); //* Nothing happens!
//   },
// };

// const sumProxy = new Proxy(sum, handler);

// console.log("sum(2, 9):", sum(2, 9));
// console.log("sumProxy(2, 9):", sumProxy(2, 9));

//* Proxy Exercise 1
// const handler = {
//   set: (target: { [x: string]: any }, propName: string, newValue: null) => {
//     if (propName === `employees`) {
//       switch (typeof newValue) {
//         case `string`:
//           return (target[propName] = newValue);
//         case `object`:
//           if (Array.isArray(newValue)) {
//             return (target[propName] = newValue);
//           }
//         default:
//           throw new TypeError(`Invalid datatype. Only arrays, strings, and null are valid.`);
//       }
//     } else {
//       return (target[propName] = newValue);
//     }
//   },
// };

// const manager = {
//   office: `Dubai`,
//   dept: `Sales`,
//   employees: 0,
// } as {
//   office: string;
//   dept: string;
//   employees: number | string[];
// };

// const managerProxy = new Proxy(manager, handler as any);

// managerProxy.office = `London`; // Updates
// managerProxy.employees = [`Jim`, `Patrick`, `Marie`]; // Updates
// // try {
// //   managerProxy.employees = 3; // Does not update
// // } catch (err) {
// //   console.log(err);
// // }
// // managerProxy.employees = { name: `Jim` }; // Does not update
// console.log({ managerProxy });

// 2. APPLY (node only)

// You have a heavy lifting function. Every time it's called, you need to keep track in a log, but the server logs don't provide quite what you need. Write a proxy that will append to a file, the name of the function, the params sent through, and the date.

//* Proxy Exercise 2
// import fs from "fs";

// function importantFunction() {
//   console.log("Important stuff here. No need to change.");
// }

// const importantHandler = {
//   apply: (target: { (arg0: any): void; (arg0: any): void; name: any }, _thisArg: any, argsList: any) => {
//     // console.log()
//     fs.appendFile("proxyLog.txt", `${target.name}, ${argsList}, ${new Date()}\n\n`, (err) => {
//       if (err) throw err;
//     });
//     target([...argsList]);
//   },
// };

// const importantProxy = new Proxy(importantFunction, importantHandler);
// importantProxy(`a Param`);

//* Proxy Exercise 3
// const users = [
//   {
//     username: `bob`,
//     accessLevel: 1,
//     accessCode: 1234,
//   },
//   {
//     username: `Mary`,
//     accessLevel: 2,
//     accessCode: 2345,
//   },
//   {
//     username: `Harold`,
//     accessLevel: 2,
//     accessCode: 9999,
//   },
// ];

// const userHandler = {
//   get: (target: { [x: string]: any }, propName: string | number) => {
//     if (target[propName].accessLevel === 1) {
//       return {
//         username: "Access Denied",
//         accessLevel: "Access Denied",
//         accessCode: "Access Denied",
//       };
//     } else {
//       return target[propName];
//     }
//   },
// };

// const userProxy = new Proxy(users, userHandler as any);

// console.log("userProxy[0].username:", userProxy[0].username); // Access Denied
// console.log("userProxy[0].accessCode:", userProxy[0].accessCode); // Access Denied
// console.log("userProxy[1].accessCode:", userProxy[1].accessCode); // 2345
// console.log("userProxy[2].username:", userProxy[2].username); // Harold

//* Reflect Object
// console.log({ Reflect });
//* Reflect.get
// const x = {
//   a: 1,
//   b: 2,
// };
// console.log('Reflect.get(x, "a"):', Reflect.get(x, "a"));
// const arr = ["joe", "akash", "mary"];
// console.log(Reflect.get(arr, 2));

// const monster1 = {
//   secret: "easily scared",
//   eyeCount: 4,
// };

// const handler1 = {
//   get: function (target: { secret: string; eyeCount: number }, prop: string) {
//     if (prop === "secret") {
//       return `${target.secret.substr(0, 6)} ... shhhh!`;
//     } else {
//       return Reflect.get(target, prop);
//     }
//   },
// };

// const proxy1 = new Proxy(monster1, handler1);

// console.log("proxy1.eyeCount:", proxy1.eyeCount); // Expected output: 4
// console.log("proxy1.secret:", proxy1.secret); // Expected output: "easily ... shhhh!"

//* Reflect.get
// const hgttg = {
//   meaningOfLife: 42,
// };

// console.log(hgttg.hasOwnProperty("meaningOfLife"));
// console.log(hgttg.hasOwnProperty("meaningOfLifeTest"));
// console.log("meaningOfLife" in hgttg);
// console.log(Reflect.has(hgttg, "meaningOfLife"));

//* Reflect.apply
// function sum(...array: any[]) {
//   // console.log({ arguments });
//   return array.reduce((number, total) => {
//     return number + total;
//   });
// }
// sum.apply = function () {
//   throw new Error("I broke apply, just for fun!!");
// };

// console.log("sum([1, 2, 3]):", sum([1, 2, 3]));
// console.log("Function.apply.call(sum, null, [1, 2, 3]):", Function.apply.call(sum, null, [1, 2, 3]));
// console.log("Reflect.apply(sum, null, [1, 2, 3]):", Reflect.apply(sum, null, [1, 2, 3]));

//* Reflect.defineProperty -> Reflect.defineProperty REPLACES Object.defineProperty!
const bandit = {} as { attack: number; run(): void };
const diffLevel = 2;

if (diffLevel <= 2) {
  Object.defineProperty(bandit, "attack", {
    value: 15,
    writable: false,
  });
  Reflect.defineProperty(bandit, "run", {
    value: () => {
      console.log("Bandit has fled!");
    },
    writable: false,
  });
} else {
  Object.defineProperty(bandit, "attack", {
    value: 25,
    writable: false,
  });
}

console.log(bandit.attack);
bandit.run();

//* Reflect.getOwnPropertyDescriptor
console.log('Object.getOwnPropertyDescriptor(bandit, "attack"):', Object.getOwnPropertyDescriptor(bandit, "attack"));
console.log('Reflect.getOwnPropertyDescriptor(bandit, "attack"):', Reflect.getOwnPropertyDescriptor(bandit, "attack"));

//* Other methods: Reflect.deleteProperty() replaces Object.deleteProperty(), Reflect.getPrototypeOf(), Reflect.setPrototypeOf(,) Reflect.isExtensible()

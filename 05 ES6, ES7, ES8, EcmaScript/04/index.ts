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
{
}

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

// let aCar = new Car(`toyota`, `camry`);
// let carProxy = new Proxy(aCar, handler);
// console.log("carProxy.make:", carProxy.make);

//* Apply trap
function sum(x: number, y: number) {
  return x + y;
}

const handler = {
  apply: (target: (arg0: any, arg1: any) => number, _thisArg: any, argsList: any[]) => {
    return target(argsList[0], argsList[1]) * 100;
  },
};

const sumProxy = new Proxy(sum, handler);

console.log(sum(2, 9));
console.log(sumProxy(2, 9));

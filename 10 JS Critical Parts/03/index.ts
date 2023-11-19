//@ JS Modules
//* Module Pattern: Basic form (using literal notation)
// const MyApp = {} as any;
// MyApp.MyModule = (function () {
//   const privateVariable = 1;
//   const publicVariable = 2;
//   const publicFunction = function () {
//     return 3;
//   };
//   return {
//     publicVariable: publicVariable,
//     publicFunction: publicFunction,
//   };
// })();
// console.log(MyApp.MyModule.privateVariable); // undefined
// console.log(MyApp.MyModule.publicVariable); // 2
// console.log(MyApp.MyModule.publicFunction()); // 3

//* Module Pattern: Basic form (using an object)
// const MyApp = {} as any;
// MyApp.MyModule = (function () {
//   const module = {} as any;
//   const privateVariable = 1;
//   module.publicVariable = 2;
//   module.publicFunction = function () {
//     return 3;
//   };
//   return module;
// })();
// console.log(MyApp.MyModule.privateVariable); // undefined
// console.log(MyApp.MyModule.publicVariable); // 2
// console.log(MyApp.MyModule.publicFunction()); // 3

//* Revealing Module Pattern
// const createSupplier = (function () {
//   // Private
//   const name = "General Motors";
//   const field = "automobile";
//   const getSupplierName = () => name;
//   const getSupplierField = () => field;

//   // Public
//   return {
//     name,
//     field,
//     getName: () => getSupplierName(),
//     getField: () => getSupplierField(),
//   };
// })();

// console.log("createSupplier.name:", createSupplier.name);
// console.log("createSupplier.field:", createSupplier.field);
// console.log("createSupplier.getName():", createSupplier.getName());

//* CommonJS Modules -> separate files
//* CommonJS in Browsers -> using a bundler (webpack)
//* AMD and UMD Modules -> separate files

//* Native Modules -> Module level scope, this is undefined
// import yellName from "./utilsTS";

// console.log("This is index.ts");
// console.log("yellName('Steven Hancock'):", yellName("Steven Hancock"));

//@ Data Structures
//* The Big O Notation
// O(n) -> Linear
const factor = function (num: number) {
  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
};
console.log("factor(5):", factor(5));

// O(1) -> Static
const aBigint = function (num: number) {
  return BigInt(num * Number.MAX_SAFE_INTEGER);
};
console.log("aBigint(1):", aBigint(1));

// O(n^2) -> Square
const multiplyMatrix = function (n: number) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      // console.log(i + " * " + j + " = " + i * j);
      console.log(`${i}*${j} = ${i * j}`);
    }
  }
};
multiplyMatrix(5);

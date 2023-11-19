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
import yellName from "./utilsTS";

console.log("This is app.js.");
console.log("yellName('Steven Hancock'):", yellName("Steven Hancock"));

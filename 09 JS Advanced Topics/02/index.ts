//* ECMAScript Native Modules
// console.log("this:", this, globalThis);

// const formatName = function (name: string) {
//   return name.replace(/(\w+), (\w+)/, "$2 $1");
// };

// const name = formatName("Hancock, Steven");
// console.log({ name });

// const upperCaseName = function (name: string) {
//   return name.toUpperCase();
// };

// export default function yellName(name: string) {
//   return upperCaseName(name);
// }
// // export { yellName, formatName };

// console.log(yellName("Steven Hancock"));

//* OOP in JS
interface Obj {
  greeting?: string;
  greet?: Function;
}

const objProto = {
  // greet: function () {
  //   console.log(this.greeting + " World");
  // },
  greet() {
    console.log(this.greeting + " World");
  },
} as Obj;

// V1
const Greeting = function (this: any, term: string) {
  this.greeting = term;
};
Greeting.prototype = objProto;
const obj1a = new (Greeting as any)("Hi");
const obj1b = new (Greeting as any)("hi");

// V2
const obj2 = Object.create(objProto);
obj2.greeting = "Hello";

// V3
const obj3 = {
  greeting: "Hi",
} as Obj;
Object.setPrototypeOf(obj3, objProto);

obj1a.greet();
obj1b.greet();
obj2.greet();
obj3.greet?.();

//@ Execution Context and Lexical Environments
//* Creation phase + execution phase
// const str = "Hello World!";

// (function (this: any) {
//   console.log({ str });
//   // console.log("this:", this);
//   // console.log("globalThis:", globalThis);
// })();

// function b() {
//   console.log("Called b!");
// }
// b(); //* Functions are hoisted

// var a;
// console.log({ a }); //* Undefined

//* Undefined -> use null instead of undefined
// let a;
// console.log({ a }, typeof a);
// console.log(typeof a === "undefined"); // true

// if (a === undefined) {
//   console.log("a is undefined!");
// } else {
//   console.log("a is defined!");
// }

//* Execution Stack
// function b() {
//   console.log("b");
// }
// function a() {
//   console.log(1, "a");
//   b();
//   console.log(2, "a");
// }
// a();

//* Variable Environments
// function b() {
//   var myVar;
//   console.log(1, { myVar });
// }

// function a() {
//   var myVar = 2;
//   console.log(2, { myVar });
//   b();
// }

// var myVar = 1;
// console.log(3, { myVar });
// a();
// console.log(4, { myVar });

//* The Scope Chain
// function a() {
//   function b() {
//     console.log({ myVar }); // { myVar: 1 } from global object
//   }
//   // var myVar = 2;
//   b();
// }
// var myVar = 1;
// a();

//* Async Callback
// long running function
// function waitThreeSeconds() {
//   const ms = 3000 + new Date().getTime();
//   console.log({ ms });
//   while (Number(new Date()) < ms) {}
//   console.log("Finished function");
// }

// waitThreeSeconds();
// console.log("Finished execution");

//@ Types and Operators
//* Coercion
// const value1 = "5";
// const value2 = 9;
// const sum = value1 + value2;
// console.log({ sum }, typeof sum); // string

// // To string
// console.log(String(123)); // explicit
// console.log(123 + ""); // implicit
// console.log(String(true)); // 'true'
// console.log(String(false)); // 'false'

// // To boolean
// console.log(Boolean(2)); // true
// console.log(!!2); // true

// // To number
// console.log(Number("123")); // explicit
// console.log(+"123"); // implicit
// // @ts-ignore
// console.log(123 !== "456"); // implicit -> true
// // @ts-ignore
// console.log(4 > "5"); // implicit -> false
// // @ts-ignore
// console.log(5 / null); // implicit -> Infinity

// console.log(Number(false)); // 0

//* Comparison Operators
// @ts-ignore
// console.log(3 < 2 < 1); //* true

// console.log(Number(true)); // 1
// console.log(Number(undefined)); // NaN
// console.log(Number(null)); // 0

// console.log(NaN, typeof NaN); // number
// console.log(Number(NaN)); // NaN
// console.log(String(NaN)); // "NaN"
// console.log(Boolean(NaN)); // false

//* Object.is()
// console.log(Object.is(25, 25)); // true
// console.log(Object.is("foo", "foo")); // true
// console.log(Object.is("foo", "bar")); // false
// console.log(Object.is(null, null)); // true
// console.log(Object.is(undefined, undefined)); // true

// // @ts-ignore
// console.log("" == 0); // true -> don't use!
// // @ts-ignore
// console.log("" === 0); // false -> use this!

//* Existence and Booleans
// let a;
// let a = 0;
// if (a) {
//   console.log({ a });
// } else {
//   console.log("a is undefined");
// }

// let b = 0;
// console.log(b || b === 0); // true

// let c;
// console.log(`Hello ${c}`); // Hello undefined

//* Default Values
// function greet(name?: string) {
//   name = name || "<Your name here>";
//   console.log("Hello " + name);
// }

// greet("Tony");
// greet();

//@ Objects and Functions
//* Objects and the Dot
// interface Address {
//   street: string;
//   city: string;
//   state: string;
// }
// interface Person {
//   firstname: string;
//   lastname: string;
//   address: Address;
// }
// const person = new Object() as Person;
// person["firstname"] = "Tony";
// person["lastname"] = "Alicea";

// const firstNameProperty = "firstname";
// console.log("person:", person);
// console.log("person[firstNameProperty as keyof Person]:", person[firstNameProperty as keyof Person]);
// console.log("person[firstNameProperty as keyof typeof person]:", person[firstNameProperty as keyof typeof person]);

// console.log("person.firstname:", person.firstname);
// console.log("person.lastname:", person.lastname);

// person.address = new Object() as Address;
// person.address.street = "111 Main St.";
// person.address.city = "New York";
// person.address.state = "NY";

// console.log("person.address.street:", person.address.street);
// console.log("person.address.city:", person.address.city);
// console.log('person["address"]["state"]:', person["address"]["state"]);
// console.log('person["address"].state:', person["address"].state);

//* Objects and Object Literals
// interface Address {
//   street: string;
//   city?: string;
//   state?: string;
// }
// interface Person {
//   firstname: string;
//   lastname: string;
//   address?: Address;
//   address2?: Address;
// }

// const Tony: Person = {
//   firstname: "Tony",
//   lastname: "Alicea",
//   address: {
//     street: "111 Main St.",
//     city: "New York",
//     state: "NY",
//   },
// };

// function greet(person: Person) {
//   console.log("Hi " + person.firstname);
// }
// greet(Tony);

// greet({
//   firstname: "Mary",
//   lastname: "Doe",
// });

// Tony.address2 = {
//   street: "333 Second St.",
// };

// console.log("Tony:", Tony);

//* Faking Namespaces
// interface Language {
//   greet?: string;
//   greetings?: { basic: string };
// }

// var greet = "Hello!";
// var greet = "Hola!";
// console.log({ greet }); // Hola

// // const english = {} as Language;
// // english!.greetings!.basic = "Hello"; //* Cannot set properties of undefined (setting 'basic') -> greetings is undefined!

// const english = {
//   greetings: {
//     basic: "Hello!",
//   },
// } as Language;

// const spanish = {} as Language;
// spanish.greet = "Hola!";

// console.log("english:", english);
// console.log("spanish:", spanish);

//* JSON
// const objectLiteral = {
//   firstname: "Mary",
//   isAProgrammer: true,
// };
// console.log(JSON.stringify(objectLiteral)); //* {"firstname":"Mary","isAProgrammer":true->string}

// const jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');
// console.log(jsonValue); //* { firstname: 'Mary', isAProgrammer: true->boolean }

//* Functions Are Objects
// function greet() {
//   console.log("hi");
// }
// greet();
// greet.language = "english";
// console.log("greet.language:", greet.language);
// console.log("greet:", greet);
// // @ts-ignore
// console.log("greet.__proto__:", greet.__proto__);

//* Function Statements and Function Expressions
// statement: if ...
// expression: results a value

// Function declaration
// greet();
// function greet() {
//   console.log(1, "hi");
// }

// // Function expression
// const anonymousGreet = function () {
//   console.log(2, "hi");
// };
// anonymousGreet();

// function log(a: Function) {
//   a();
// }
// log(function () {
//   console.log(3, "hi");
// });

// function log2(elem: any) {
//   console.log("elem:", elem);
// }
// log2({ msg: "Test message", time: Date.now() });

//* By Value vs By Reference
//* Primitive values
// let a = 3;
// let b;

// b = a;
// a = 2;

// console.log({ a });
// console.log({ b });

//* By reference (all objects (including functions))
// let c = { greeting: "hi" };
// let d;

// d = c;
// c.greeting = "hello"; // Mutate

// console.log(1, { c });
// console.log(2, { d });

// // By reference (even as parameters)
// function changeGreeting(obj: { greeting: string }) {
//   obj.greeting = "Hola"; // Mutate
// }

// changeGreeting(d);
// console.log(3, { c });
// console.log(4, { d });

// // Equals operator sets up new memory space (new address)
// c = { greeting: "Howdy" };
// console.log(5, { c });
// console.log(6, { d });

//* Objects, Functions, and 'this'
// function a(this: any) {
//   console.log(1, this); // Global object
//   (globalThis as any).newvariable = "hello";
// }

// let b = function (this: any) {
//   console.log(2, this);
// };

// a();
// b();
// console.log(3, (globalThis as any).newvariable); // Not good!
// // console.log("globalThis:", globalThis);

// const c = {
//   name: "The c object", // Property
//   // Method
//   log: function () {
//     const self = this; //* sometimes: const that = this
//     console.log(4, "self===this:", self === this);

//     self.name = "Updated c object";
//     console.log(5, { self });

//     const setname = function (newname: string) {
//       self.name = newname;
//     };
//     setname("Updated again! The c object");
//     console.log(6, { self });
//   },
// };
// c.log();
// console.log(7, "c.name:", c.name);

//* This, that
// function UsesThis(this: any, name: string) {
//   this.myName = name;
//   function returnMe(this: any) {
//     return this; // Scope is lost because of the inner function
//   }
//   return {
//     returnMe: returnMe,
//   };
// }

// function UsesThat(this: any, name: string) {
//   const that = this;
//   this.myName = name;
//   function returnMe() {
//     return that; // Scope is baked in with 'that' to the "class"
//   }
//   return {
//     returnMe: returnMe,
//   };
// }

// const usesThat = new (UsesThat as any)("Dave");
// const usesThis = new (UsesThis as any)("John");
// console.log(
//   "UsesThat thinks it's called " +
//     usesThat.returnMe().myName +
//     "\r\n" +
//     "UsesThis thinks it's called " +
//     usesThis.returnMe().myName
// );

//* Arrays
// const arr = [
//   1,
//   false,
//   { name: "Tony", address: "111 Main St." },
//   function (name: string) {
//     const greeting = "Hello";
//     console.log(`${greeting} ${name}`);
//   },
//   "hello",
// ];

// console.log("arr:", arr);
// (arr[3] as Function)((arr[2] as { name: string }).name);

//* "Arguments" and spread
// function greet(firstname?: string, lastname?: string = "testLastName", language?: string) {
//   language = language || "en";

//   if (arguments.length === 0) {
//     console.log("Missing parameters!");
//     return;
//   }

//   console.log({ firstname });
//   console.log({ lastname });
//   console.log({ language });
//   console.log({ arguments });
//   console.log("arguments[0]:", arguments[0]);
//   console.log("---");
// }

// greet();
// greet("John");
// greet("John", "Doe");
// greet("John", "Doe", "es");

//* Function Overloading
// function greet(firstname: string, lastname: string, language?: string) {
//   language = language || "en";
//   if (language === "en") {
//     console.log("Hello " + firstname + " " + lastname);
//   }
//   if (language === "es") {
//     console.log("Hola " + firstname + " " + lastname);
//   }
// }

// function greetEnglish(firstname: string, lastname: string) {
//   greet(firstname, lastname, "en");
// }
// function greetSpanish(firstname: string, lastname: string) {
//   greet(firstname, lastname, "es");
// }

// greetEnglish("John", "Doe");
// greetSpanish("John", "Doe");

//* Automatic Semicolon Insertion
// function getPerson(name: string) {
//   return {
//     firstname: name,
//   };
// }
// console.log(getPerson("Tony"));

//* Whitespace
// const // First name
//   firstname = "Mich",
//   // Last name
//   lastname = "Rad",
//   // Spoken language
//   language = "eng";

// const person = {
//   // First name
//   firstname: "John",
//   // Last name
//   lastname: "Doe",
//   // Spoken language
//   language: "pl",
// };

// console.log("person:", person);
// console.log({ firstname, lastname, language });

//* Immediately Invoked Functions Expressions (IIFEs)
// Function statement
// function greet(name: string) {
//   console.log(1, "Hello " + name);
// }
// greet("John");

// // Function expression
// const greetFunc = function (name: string) {
//   console.log(2, "Hello " + name);
// };
// greetFunc("John");

// // Immediately Invoked Function Expression (IIFE)
// const greeting = (function (name: string) {
//   return "Hello " + name;
// })("John");
// console.log(3, "greeting:", greeting, typeof greeting);

// // IIFE -> inside (...) is expression!
// const firstname = "John";
// // Function expression
// (function (name: string) {
//   const greeting = "Inside IIFE: Hello";
//   console.log(4, greeting + " " + name);
// })(firstname);

//* IIFE and Safe Code
// var greeting = "Hola";
// (function (globalThis, name) {
//   const greeting = "Hello";
//   globalThis.greeting = "Hello";
//   console.log(1, greeting + " " + name);
// })(globalThis, "John"); // IIFE
// console.log(2, "greeting:", greeting);
// console.log(3, "globalThis.greeting:", globalThis.greeting);

//* Closures
// function greet(whatToSay: string) {
//   return function (name: string) {
//     console.log(`${whatToSay} ${name}`);
//   };
// }
// const sayHi = greet("Hi");
// sayHi("Tony");
// greet("Hello")("Michal");

// function buildFunctions() {
//   const arr = [] as Function[];
//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log({ i });
//     });
//   }
//   return arr;
// }
// const fs = buildFunctions();
// fs[0](); //* 3!
// fs[1](); //* 3!
// fs[2](); //* 3!

// function buildFunctions2() {
//   const arr = [] as Function[];
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function (j) {
//         return function () {
//           console.log({ j });
//         };
//       })(i)
//     );
//   }
//   return arr;
// }
// const fs2 = buildFunctions2();
// fs2[0](); //* 0!
// fs2[1](); //* 1!
// fs2[2](); //* 2!

//* Function Factory
// function makeGreeting(language: string): (firstname: string, lastname: string) => void {
//   return function (firstname: string, lastname: string): void {
//     if (language === "en") {
//       console.log("Hello " + firstname + " " + lastname);
//     }
//     if (language === "es") {
//       console.log("Hola " + firstname + " " + lastname);
//     }
//   };
// }

// const greetEnglish = makeGreeting("en");
// const greetSpanish = makeGreeting("es");

// greetEnglish("John", "Doe");
// greetSpanish("John", "Doe");

// makeGreeting("en")("John", "Doe");

//* Closures and Callbacks
// function sayHiLater() {
//   const greeting = "Hi!";
//   setTimeout(function () {
//     console.log(greeting);
//   }, 3000);
// }
// sayHiLater();

// function tellMeWhenDone(callback: () => void) {
//   const a = 1000;
//   const b = 2000;
//   console.log("a+b:", a + b); // Some work
//   callback(); // The 'callback', it runs the function I give it!
// }

// tellMeWhenDone(function () {
//   console.log("I am done!");
// });

// tellMeWhenDone(function () {
//   console.log("All done...");
// });

//* Call(), Apply(), and Bind()
// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   getFullName: function () {
//     const fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   },
// };

// const logName = function (this: any, lang1: string, lang2: string) {
//   console.log("this.firstname:", this.firstname);
//   console.log(1, "Logged: " + this.getFullName());
//   console.log(2, "Arguments: " + lang1 + " " + lang2);
//   console.log(3, "-----------");
// };

// const logPersonName = logName.bind(person); // Returns a function
// logPersonName("en", "pl");

// logName.call(person, "en", "es"); // Invokes a function
// logName.apply(person, ["en", "pt"]); // Invokes a function

// (function (this: any, lang1: string, lang2: string) {
//   console.log("this.lastname:", this.lastname);
//   console.log(4, "Logged: " + this.getFullName());
//   console.log(5, "Arguments: " + lang1 + " " + lang2);
//   console.log(6, "-----------");
// }).apply(person, ["es", "de"]);

// // Function borrowing
// const person2 = {
//   firstname: "Jane",
//   lastname: "Doe",
// };
// console.log(71, "person.getFullName.apply(person2):", person.getFullName.apply(person2));
// console.log(72, "person.getFullName.call(person2):", person.getFullName.call(person2));

// // Function currying
// function multiply(a: number, b: number) {
//   return a * b;
// }

// //* function multiply( b: number) {
// //*   const a = 2/3
// //*   return a * b;
// //* }

// const multipleByTwo = multiply.bind(this, 2); //* Variable a = 2, can be null!
// console.log(8, "multipleByTwo(4):", multipleByTwo(4)); // 8

// const multipleByThree = multiply.bind(null, 3); //* Variable a = 3, can be this!
// console.log(9, "multipleByThree(4):", multipleByThree(4)); //12

//* Functional Programming
// import _ from "underscore";
// import __ from "lodash";

// function mapForEach(arr: number[], fn: Function) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(fn(arr[i]));
//   }
//   return newArr;
// }

// const arr1: number[] = [1, 2, 3];
// console.log("arr1:", arr1);

// const arr2: number[] = mapForEach(arr1, function (item: number): number {
//   return item * 2;
// });
// console.log("arr2:", arr2);

// const arr3: boolean[] = mapForEach(arr1, function (item: number): boolean {
//   return item > 2;
// });
// console.log("arr3:", arr3);

// const checkPastLimit = function (limiter: number, item: number): boolean {
//   return item > limiter;
// };
// const arr4: boolean[] = mapForEach(arr1, checkPastLimit.bind(this, 1));
// console.log("arr4:", arr4);

// const checkPastLimitSimplified = function (this: any, limiter: number) {
//   return function (limiter: number, item: number): boolean {
//     return item > limiter;
//   }.bind(this, limiter);
// };

// const arr5: boolean[] = mapForEach(arr1, checkPastLimitSimplified(1));
// console.log("arr5:", arr5);

// //* Underscore
// const arr6: number[] = _.map(arr1, function (item: number): number {
//   return item * 3;
// });
// console.log("arr6:", arr6);

// const arr7: number[] = _.filter([2, 3, 4, 5, 6, 7], function (item: number): boolean {
//   return item % 2 === 0;
// });
// console.log("arr7:", arr7);

// //* Lodash
// const arr8: number[] = __.map(arr1, function (item: number): number {
//   return item * 3;
// });
// console.log("arr8:", arr8);

// const arr9: number[] = __.filter([2, 3, 4, 5, 6, 7], function (item: number): boolean {
//   return item % 2 === 0;
// });
// console.log("arr9:", arr9);

//@ OOP JS and Prototypal Inheritance
// const person = {
//   firstname: "Default",
//   lastname: "Default",
//   getFullName: function () {
//     return this.firstname + " " + this.lastname;
//   },
// } as any;

// const john = {
//   firstname: "John",
//   lastname: "Doe",
// } as any;

// // Don't do this EVER! for demo purposes only!!!
// john.__proto__ = person;
// console.log(1, "john.getFullName():", john.getFullName());
// console.log(2, "john.firstname:", john.firstname);

// const jane = {
//   firstname: "Jane",
// } as any;

// jane.__proto__ = person;
// console.log(3, "jane.getFullName():", jane.getFullName());

// person.getFormalFullName = function () {
//   return this.lastname + ", " + this.firstname;
// };

// console.log(4, "john.getFormalFullName():", john.getFormalFullName());
// console.log(5, "jane.getFormalFullName():", jane.getFormalFullName());

// console.log("person.__proto__:", person.__proto__);
// console.log("jane.__proto__:", jane.__proto__);
// console.log("jane.__proto__.__proto__:", jane.__proto__.__proto__);
// console.log("john.__proto__:", john.__proto__);
// console.log("john.__proto__.__proto__:", john.__proto__.__proto__);
// console.log("john.__proto__===jane.__proto__:", john.__proto__ === jane.__proto__);
// console.log("john.__proto__.__proto__ === jane.__proto__.__proto__:", john.__proto__.__proto__ === jane.__proto__.__proto__);
// console.log("typeof john.__proto__:", typeof john.__proto__);
// console.log("typeof john.__proto__.__proto__:", typeof john.__proto__.__proto__);

//* Reflection and Extend
// import _ from "underscore";

// const person = {
//   firstname: "Default",
//   lastname: "Default",
//   getFullName: function () {
//     return this.firstname + " " + this.lastname;
//   },
// };

// const john = {
//   firstname: "John",
//   lastname: "Doe",
// } as any;

// // Don't do this EVER! for demo purposes only!!!
// john.__proto__ = person;

// for (let prop in john) {
//   console.log(1, prop + ": " + john[prop]);
//   if (john.hasOwnProperty(prop)) {
//     console.log(2, prop + ": " + john[prop]);
//   }
// }

// const jane = {
//   address: "111 Main St.",
//   getFormalFullName: function () {
//     return this.lastname + ", " + this.firstname;
//   },
// } as any;

// const jim = {
//   getFirstName: function () {
//     // @ts-ignore
//     return firstname;
//   },
// } as any;

// _.extend(john, jane, jim);
// console.log({ john });

//@ Void operator
// const output = void 1;
// console.log(output); // Expected output: undefined

// void console.log("expression evaluated"); // Expected output: "expression evaluated"

// void (function iife() {
//   console.log("iife is executed"); // Expected output: "iife is executed"
// })();

//@ Building Objects
//* The 'new' keyword
// function Person2(this: any) {
//   console.log("this:", this);
//   (this.firstname = "John"), (this.lastname = "Doe");
// }
// const john2 = new (Person2 as any)();
// console.log({ john2 });

// function Person(this: any, firstname: string, lastname: string) {
//   console.log("this:", this);
//   this.firstname = firstname; //* object's firstname = firstname parameter
//   this.lastname = lastname; //* object's lastname = lastname parameter
//   console.log("This function is invoked.");
// }

// const john = new (Person as any)("John", "Doe"); //* new creates an empty object {}
// console.log("john:", john);

// const jane = new (Person as any)("Jane", "Doe");
// console.log("jane:", jane);

//* Prototype
//* Properties in function constructor, methods in prototype
//* Convention: function constructor starts with capital letter!
// function Person(this: any, firstname: string, lastname: string) {
//   // console.log("this:", this);
//   this.firstname = firstname;
//   this.lastname = lastname;
//   // console.log("This function is invoked.");
// }

// Person.prototype.getFullName = function () {
//   return this.firstname + " " + this.lastname;
// };

// const john = new (Person as any)("John", "Doe");
// console.log({ john });

// const jane = new (Person as any)("Jane", "Doe");
// console.log({ jane });

// Person.prototype.getFormalFullName = function () {
//   return this.lastname + ", " + this.firstname; // After object creation you can add functions1
// };

// console.log("john.getFormalFullName():", john.getFormalFullName());
// console.log("jane.getFormalFullName():", jane.getFormalFullName());

// console.log("Person.prototype:", Person.prototype); //* {}
// console.log("(Person as any).__proto__:", (Person as any).__proto__); //* {}

//* Built-In Function Constructors -> this can be dangerous!
// String.prototype.isLengthGreaterThan = function (limit: number) {
//   return this.length > limit;
// };
// console.log('("John" as any).isLengthGreaterThan(3):', ("John" as any).isLengthGreaterThan(3)); //* true

// (Number as any).prototype.isPositive = function () {
//   return this > 0;
// };
// const num = new Number(3);
// console.log("(num as any).isPositive():", (num as any).isPositive()); //* true

// const a = new Number(3); // don't do it
// const b = Number("3");
// console.log("{a, b}, typeof a, typeof b:", { a, b }, typeof a, typeof b);

//* Object.create() and Pure Prototypal Inheritance
// polyfill
// if (!Object.create) {
//   Object.create = function (o) {
//     if (arguments.length > 1) {
//       throw new Error("Object.create implementation" + " only accepts the first parameter.");
//     }
//     function F() {}
//     F.prototype = o;
//     return new (F as any)();
//   };
// }
// console.log("Object.create:", Object.create);

// const person = {
//   firstname: "Default",
//   lastname: "Default",
//   greet: function () {
//     return "Hi " + this.firstname;
//   },
// };

// const john = Object.create(person);
// console.log({ john }); //* {}
// john.firstname = "John";
// john.lastname = "Doe";
// console.log({ john });
// console.log("john.greet():", john.greet());

//* ES6 and Classes
// class Person {
//   firstname: string;
//   lastname: string;
//   constructor(firstname: string, lastname: string) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     return `Hi ${this.firstname}`;
//   }
// }

// const john = new Person("John", "Doe");
// console.log("john.greet():", john.greet(), typeof john); //* Hi John object

// class InformalPerson extends Person {
//   constructor(firstname: string, lastname: string) {
//     super(firstname, lastname);
//   }
//   greet() {
//     return `Yo ${this.firstname}`;
//   }
// }

// const jane = new InformalPerson("Jane", "Doe");
// console.log("jane.greet():", jane.greet(), typeof jane); //* Yo Jane object

//@ Odds and Ends
//* Initialization
// const people = [
//   // the 'john' object
//   {
//     firstname: "John",
//     lastname: "Doe",
//     addresses: ["111 Main St.", "222 Third St."],
//   },
//   // the 'jane' object
//   {
//     firstname: "Jane",
//     lastname: "Doe",
//     addresses: ["333 Main St.", "444 Fifth St."],
//     greet: function () {
//       return "Hello!";
//     },
//   },
// ];

// console.log("people", people);

//* Typeof, instanceof
// const a = 3;
// console.log(1, typeof a);

// const b = "Hello";
// console.log(2, typeof b);

// const c = {};
// console.log(3, typeof c);

// const d = [] as any[];
// console.log(4, typeof d); // Weird!
// console.log(5, Object.prototype.toString.call(d)); // Better!

// function Person(this: any, name: string) {
//   this.name = name;
// }
// const e = new (Person as any)("Jane");
// console.log(6, typeof e);
// console.log(7, e instanceof Person);

// console.log(8, typeof undefined); // Makes sense
// console.log(9, typeof null); //* A bug since, like, forever...

// const z = function () {
//   console.log("Z");
// };
// console.log(10, typeof z);

//@ Strict Mode
// function logNewPerson() {
//   "use strict"; //* Top of the file or top of the function - this is extra feature
//   let person2;
//   person2 = {};
//   console.log(1, "person2:", person2);
// }

// let person;
// person = {};
// console.log(2, "person:", person);
// logNewPerson();

//@ Examining Framework: jQuery
// export {};
// const { JSDOM } = require("jsdom");
// const { window } = new JSDOM("");
// const $ = require("jquery")(window);

// // console.log({ $ });
// // console.log("$.get.toString():", $.get.toString());

// $.get("https://httpbin.org/get", (data: any) => {
//   console.log("data:", "data:", data);
// });

//@ Promises, Async, and Await
// const runThis = (otherFunction: Function) => {
//   console.log("Running");
//   setTimeout(() => {
//     otherFunction();
//   }, 500);
// };

// runThis(() => {
//   console.log("Function 1");
// });

// runThis(() => {
//   console.log("Function 2");
// });

// const function3 = () => {
//   console.log("Function 3");
// };
// runThis(function3);

// fetch("https://httpbin.org/get")
//   .then((data) => data.json())
//   .then((res) => console.log("res:", res))
//   .catch((err) => console.log("err:", err));

(async function getData() {
  const res = await fetch("https://httpbin.org/get");
  const data = await res.json();
  console.log("data:", data);
})();

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

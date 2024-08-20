//^ Object vs object vs {}
console.log("Object as object:", Object as object);
console.log("{} as object:", {} as object); //*  like: { [key: string]: string }
console.log("typeof Object:", typeof Object);

//^ List of JS constructors
const a = new String();
const b = new Number();
const c = new Boolean();
const d = new Array();
const e = new Object();
const f = new Map();
const g = new WeakMap();
const h = new Set();
const i = new WeakSet();
const j = new RegExp("ab+c");
const k = new Date();
const l = new Error();
const m = new Blob();
const n = new File(["foo"], "foo.txt", { type: "text/plain" });
// const o = new FileReader(); //* WebApi
const p = new ArrayBuffer(8);
const r = new Intl.DateTimeFormat();
const s = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});
const t = new Request("https://www.mozilla.org/favicon.ico");
// const u = new XMLHttpRequest(); //* WebApi
const v = new Event("look", { bubbles: true, cancelable: false });
const w = new CustomEvent("animalFound", { detail: { name: "cat" } });
const x = new AbortController();
const target = { notProxied: "original value", proxied: "original value" };
const handler = {
  get(target: any, prop: string, receiver: any) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(target, prop, receiver);
  },
};
const y = new Proxy(target, handler);
const z = new TypeError();

const a_2 = new URL("/", "https://developer.mozilla.org");
const b_2 = new URLSearchParams("foo=1&bar=2");

const buffer = new ArrayBuffer(16);
const c_2 = new DataView(buffer);

const d_2 = new SharedArrayBuffer(8);
// console.log({ d_2 }, d_2.byteLength);

const e_2 = new Int32Array(2);
// console.log({ e_2 }, e_2.length);

const f_2 = new SyntaxError("Syntax Error");
// console.log({ f_2 });

const g_2 = new ReferenceError("Reference Error");
console.log({ g_2 });

// const h_2 = new Worker("worker.js");
// console.log({h_2})

const i_2 = new TextEncoder();
console.log({ i_2 });

const j_2 = new AggregateError([new Error("some error")], "Hello");
console.log({ j_2 });

// const k_2 = new Document();
// console.log("k_2:", k_2);

// const request = new Request("https://example.com/api/data");
// const l_2 = new FetchEvent("fetch", { request }); //* in the browsers!
// console.log("l_2:", l_2);

// console.log({ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r, s, t, u, v, w, x, y, z, a_2, b_2, c_2, d_2, e_2, f_2, g_2, h_2, i_2, j_2, k_2, l_2 });

//* Other constructors
const myStream = new ReadableStream({
  start(controller) {
    // Enqueue some data
    controller.enqueue("Hello");
    controller.enqueue("World");

    // Close the stream
    controller.close();
  },
});

// const options = {
//   body: "You successfully subscribed to our Notification service!",
// };
// const notification = new Notification("Successfully subscribed!", options);
// console.log({ notification });

// Read the stream
const reader = myStream.getReader();
reader
  .read()
  .then((result) => {
    console.log(result.value); // Output: Hello
    return reader.read();
  })
  .then((result) => {
    console.log(result.value); // Output: World
    console.log(result.done); // Output: true
  });

console.log("myStream:", myStream);
console.log("reader:", reader);

//* Float16Array() constructor - works in browsers only!
// const float16Array = new Float16Array(3);
// console.log("float16Array:", float16Array); // Float16Array(3) [0, 0, 0]

//* PushEvent * NotificationEvent
// const dataInit = {
//   data: "Some sample text",
// };
// const myPushEvent = new PushEvent("push", dataInit);
// myPushEvent.data?.text(); // should return 'Some sample text'
// console.log({ myPushEvent });

// const notif = new Notification("Hello");
// const myNotificationEvent = new NotificationEvent("notificationclose", { notification: notif });
// console.log({ notif, myNotificationEvent });

const formData = new FormData();
// Add fields to the FormData object
formData.append("name", "Jane Doe");
formData.append("email", "jane@example.com");
formData.append("age", "28");
for (const pair of formData.entries()) {
  console.log("pair[0], pair[1]:", pair[0], pair[1]);
}

{
  //* PushEvent
  class PushMessageData {
    private data: string;

    constructor(data: string) {
      this.data = data;
    }

    text(): string {
      return this.data;
    }

    json(): any {
      return JSON.parse(this.data);
    }
  }

  class PushEvent extends Event {
    readonly data: PushMessageData;

    constructor(type: string, eventInitDict?: PushEventInit) {
      super(type, eventInitDict);
      this.data = new PushMessageData(eventInitDict?.data || "");
    }
  }

  interface PushEventInit extends EventInit {
    data?: string;
  }

  // Usage example:
  const pushEvent = new PushEvent("push", {
    data: JSON.stringify({ message: "New message received!" }),
  });

  console.log(pushEvent.data.text()); // '{"message":"New message received!"}'
  console.log(pushEvent.data.json().message); // 'New message received!'

  //* NOtification Event
  interface NotificationOptions {
    body?: string;
    icon?: string;
    tag?: string;
    data?: any;
    // Add other notification options as needed
  }

  class Notification {
    readonly title: string;
    readonly options: NotificationOptions;

    constructor(title: string, options?: NotificationOptions) {
      this.title = title;
      this.options = options || {};
    }
  }

  class NotificationEvent extends Event {
    readonly notification: Notification;
    readonly action: string;

    constructor(type: string, eventInitDict: NotificationEventInit) {
      super(type, eventInitDict);
      this.notification = eventInitDict.notification;
      this.action = eventInitDict.action || "";
    }
  }

  interface NotificationEventInit extends EventInit {
    notification: Notification;
    action?: string;
  }

  // Usage example:
  const notification = new Notification("New Message", {
    body: "You have a new message from Alice",
    icon: "message-icon.png",
    tag: "message",
    data: { messageId: 12345 },
  });

  const notificationEvent = new NotificationEvent("notificationclick", {
    notification: notification,
    action: "reply",
  });

  console.log(notificationEvent.notification.title); // 'New Message'
  console.log(notificationEvent.notification.options.body); // 'You have a new message from Alice'
  console.log(notificationEvent.action); // 'reply'
}

//* btoa() - Binary to ASCII, atob() - ASCII to Binary
const encodedData = btoa("Hello, world"); // encode a string
const decodedData = atob(encodedData); // decode a string
console.log({ encodedData, decodedData });

//* Example
// const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// console.log(new Intl.DateTimeFormat("en-US").format(date)); // Expected output: "12/20/2020"

//* Classes
// The old way
// function SuperHero(this: any, name: string, strength: number, speed: number, weapon: string, cape: boolean):void {
//   this.name = name;
//   this.strength = strength;
//   this.speed = speed;
//   this.weapon = weapon;
//   this.cape = cape;
//   // this.goodHero = true;
//   // this.powerUp = function(){
//   // 	this.strength += 5;
//   // }
// }

// SuperHero.prototype.goodHero = true;
// SuperHero.prototype.powerUp = function () {
//   this.strength += 5;
// };

// const hero1 = new (SuperHero as any)("Hank", 10, 5, "Fist", true);
// hero1.name = "Ed";
// hero1.powerUp();
// console.log({ hero1 }, typeof hero1);

// ES6
class SuperHero {
  // name: string;
  strength: number;
  speed: number;
  weapon: string;
  cape: boolean;
  constructor(_name: string, strength: number, speed: number, weapon: string, cape: boolean) {
    // this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.weapon = weapon;
    this.cape = cape;
  }
  powerUp() {
    this.strength += 5;
  }

  public get name() {
    console.log("Getting Name"); //* default public
    return name;
  }
  public set name(newName) {
    // console.log("Setting name"); //* default public
    this.name = newName;
  }
  static goodHero() {
    return true;
  }
}
console.log("SuperHero:", SuperHero);

const hero1: SuperHero = new SuperHero("Hank", 10, 5, "Fist", true);
// hero1.name = "Ed";
console.log({ hero1 }, typeof hero1);

const hankDetails = ["Hank", 10, 5, "Fist", true] as const;
const philDetails = ["Phil", 15, 1, "Fist2", false] as const;

const hero2 = new SuperHero(...hankDetails);
const hero3 = new SuperHero(...philDetails);
// hero2.name = "George"; // Error

hero2.powerUp();
hero2.speed = 2;

console.log({ hero2, hero3 });

class Human extends SuperHero {
  age: number;
  constructor(name: string, strength: number, speed: number, weapon: string, cape: boolean, age: number) {
    super(name, strength, speed, weapon, cape);
    this.age = age;
  }
}

const billDetails = ["Bill", 20, 20, "Fast Feet", true, 20] as const;
const bill = new Human(...billDetails);
console.log({ bill });

// class DoMath {
//   static add(x: number, y: number) {
//     return x + y;
//   }
//   static subtract(x: number, y: number) {
//     return x - y;
//   }
//   static square(x: number) {
//     return x * x;
//   }
// }

// const x = DoMath.add(2, 5);
// console.log({ x });
// console.log("DoMath.square(5):", DoMath.square(5));

//* Not New!
// const CARCOLOR = Symbol();
// console.log({ CARCOLOR });
// const CARMODEL = Symbol();
// const CARYEAR = Symbol();

// class Car {
//   constructor(color: string, model: string, year: number) {
//     // requires bracket syntax
//     this[CARCOLOR as unknown as keyof Car] = color;
//     this[CARMODEL as unknown as keyof Car] = model;
//     this[CARYEAR as unknown as keyof Car] = year;
//   }
//   get color() {
//     console.log("getting", this.color);
//     // @ts-ignore
//     return this[CARCOLOR];
//   }
//   set color(newColor) {
//     console.log("setting color", newColor);
//     this[CARCOLOR as unknown as keyof Car] = newColor;
//   }
// }

// const myCarDeets = ["red", "Volvo", 2018] as const;
// var myCar = new Car(...myCarDeets);
// // @ts-ignore
// console.log(myCar[CARCOLOR]);

//* Arrays
// for..of
// const arr = [1, 2, 3, 10, 11, 12];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//* for..in
// for (let key in arr) {
//   console.log("for...in key:", key);
// }

// const obj = {
//   name: "Rob",
//   occ: "teacher",
//   language: "JS",
// };

// for (let key in obj) {
//   console.log(key);
// }

// Array.prototype.forEach
// arr.forEach((value, i) => {
//   console.log("Value", value);
//   console.log("Index", i);
// });

//* for..in iterates over the keys of the iterator
// for (let key in arr) {
//   console.log("for in: key;", key);
// }

// //* for..of iterates over the value of the iterator
// for (let value of arr) {
//   console.log({ value });
// }

// const str = `Robert Bunch`;
// for (let letter of str) {
//   console.log(letter);
// }

//* Array.from()
// const x = Array.from(`Robert`);
// console.log(x);

// const y = Array.from(`${3 + 5}49`);
// console.log(y);

// const harry = `String1.`;
// const lotr = `String2.`;
// const orwell = `String3.`;

// const lines = Array.from([harry, lotr, orwell], (line) => {
//   return `<li>${line}</li>`;
// });
// console.log({ lines });

// const numbers = Array.from([2, 3, 4], (num) => num + num);
// console.log({ numbers });

//* Array.of() and array.fill() /fill(value, start, end)/
// const array: number[] = Array.of(2, 3, 4, 5);
// console.log({ array });

// console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]

// const arr2 = [2, 4, 5, "a", 17, "r", 9, 9];
// arr2.fill("c", -3, -2);
// console.log({ arr2 });

//* Array.find() and array.findIndex()
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10); //* First elem or undefined if not found; Parameters: element, index, array
// console.log({ found }); // Expected output: 12

// const array2 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element: number) => element > 13; //* First index or -1 if not found; Parameters: element, index, array
// console.log(array2.findIndex(isLargeNumber)); // Expected output: 3

// const arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr: string[]) {
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (unique.indexOf(arr[i]) === -1) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }
// const arrReduced = removeDuplicates(arr);
// console.log({ arrReduced });

//* Map, Set, WeakMap, WeakSet
// const str = "string";
// const num = 3;
// const bool = true;
// const undef = undefined;
// const sym = Symbol("mySymbol");
// const myName = str; // Copy value of string
// console.log({ myName });

// // Object are stored by reference (reference points sth in memory)
// const obj = { name: "Popeye" } as { name: string; girlfriend?: string };
// const cartoon = obj;
// console.log(1, { obj, cartoon });
// cartoon.girlfriend = "Olive Oil";
// console.log(2, { obj, cartoon });

//* Map
// const myContacts = new Map();
// myContacts.set("Rob", "555-1234");
// const rob = myContacts.get("Rob");
// console.log({ rob });

// // Size property
// console.log(myContacts.size);

// for (let value of myContacts) {
//   console.log({ value });
// }

// Clear method (clear the map)
// myContacts.clear();
// console.log({ myContacts });

// entries method (get all the entries)
// console.log("myContacts.entries():", myContacts.entries());
// console.log("myContacts.keys():", myContacts.keys());
// console.log("myContacts.values():", myContacts.values());

//* WeakMap
// {
//   let aStrongMap = new Map();
//   let friend = { name: `Jim` };
//   aStrongMap.set(friend, `Best Friend`);
//   console.log(aStrongMap.get(friend));
//   // @ts-ignore
//   friend = null;
//   console.log(aStrongMap.entries());
// }
// {
//   let aWeakMap = new WeakMap();
//   let friend = { friend: `Bill` };
//   aWeakMap.set(friend, `Best Friend`);
//   console.log(aWeakMap.get(friend));
//   // @ts-ignore
//   friend = null;
//   console.log(aWeakMap.get(friend));
// }

//* Set -> All elements are unique!
// const employeeId = new Set(["a12", "e7", "c2", "a12"]);
// console.log({ employeeId });
// employeeId.forEach((emp) => {
//   console.log(emp);
// });
// const employeeSet = new Set();
// // console.log(1, { employeeSet });
// //
// const obj = {
//   name: `Jane`,
//   position: `CTO`,
//   tenure: `12 years`,
// };
// employeeSet.add(obj);
// employeeSet.add(obj);

// employeeSet.add({
//   name: `Jane`,
//   position: `CTO`,
//   tenure: `12 years`,
// });

// employeeSet.add({
//   name: `Jane`,
//   position: `CTO`,
//   tenure: `12 years`,
// });

// console.log(2, { employeeSet });
// // console.log("employeeSet.entries():", employeeSet.entries());

//* WeakSet
// const userData = {
//   numberOfUsers: 2,
//   status: 200,
//   users: [
//     {
//       name: `Rob`,
//       number: `1-515-555-1234`,
//     },
//     {
//       name: `Jim`,
//       number: `1-515-555-9876`,
//     },
//   ],
// };
// const aWeakMap = new WeakMap();

// function updateUsers(userData: { numberOfUsers?: number; status?: number; users: object[] }) {
//   userData.users.forEach((user: object) => {
//     aWeakMap.set(user, `Stuff`);
//   });
// }
// updateUsers(userData);
// console.log("aWeakMap.get(userData.users[0]):", aWeakMap.get(userData.users[0]));

//* Symbol -> to avoid name collision!
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("foo");

console.log({ symbol1, symbol2, symbol3 });
console.log("typeof symbol1:", typeof symbol1); // Expected output: "symbol"
// @ts-ignore
console.log("symbol2 === 42:", symbol2 === 42); // Expected output: false
console.log("symbol3.toString():", symbol3.toString()); // Expected output: "Symbol(foo)"
console.log("Symbol('foo') === Symbol('foo'):", Symbol("foo") === Symbol("foo")); // Expected output: false

// console.log("Number(2) === Number(2):", Number(2) === Number(2));
// console.log("new Number(2) === new Number(2):", new Number(2) === new Number(2));
// console.log("undefined === undefined:", undefined === undefined);
// console.log("Symbol() === Symbol():", Symbol() === Symbol());

const CARCOLOR: unique symbol = Symbol();
const CAR_MAKE: unique symbol = Symbol();
const CARMODEL: unique symbol = Symbol();

class Car {
  constructor(color: string, make: string, model: string) {
    (this as any)[CARCOLOR] = color;
    (this as any)[CAR_MAKE] = make;
    (this as any)[CARMODEL] = model;
  }
  get color() {
    return (this as any)[CARCOLOR];
  }
  set color(newColor) {
    (this as any)[CARCOLOR] = newColor;
  }
}

const myCar = new Car(`Red`, `Chevy`, `Tahoe`);
console.log({ myCar });
myCar.color = `blue`;
console.log({ myCar });

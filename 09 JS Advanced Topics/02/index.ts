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

//* OOP in JS (V5 - class -> later!!!)
// interface Obj {
//   greeting?: string;
//   greet?: Function;
// }

// //* V1 - Object
// const objProto = {
//   // greet: function () {
//   //   console.log(this.greeting + " World");
//   // },
//   greet() {
//     console.log(this.greeting + " World");
//   },
// } as Obj;

// //* V2 - constructor function
// const Greeting = function (this: any, term: string) {
//   this.greeting = term;
// };
// Greeting.prototype = objProto;
// const obj1a = new (Greeting as any)("Hi");
// const obj1b = new (Greeting as any)("hi");

// //* V3 - Object.create()
// const obj2 = Object.create(objProto);
// obj2.greeting = "Hello";

// //* V4- Object.setPrototypeOf()
// const obj3 = {
//   greeting: "Hi",
// } as Obj;
// Object.setPrototypeOf(obj3, objProto);

// obj1a.greet();
// obj1b.greet();
// obj2.greet();
// obj3.greet?.();

//* Constructor property
// interface Obj {
//   greeting?: string;
//   greet?: Function;
// }
// const objProto = {
//   greet: function () {
//     console.log(this.greeting + " World");
//   },
// } as Obj;

// const Greeting = function (this: any, term: string) {
//   this.greeting = term;
// };

// Greeting.prototype = objProto;
// //* Set the constructor!!!
// Greeting.prototype.constructor = Greeting;

// const obj = new (Greeting as any)("Hi");
// obj.greet();
// console.log("obj.constructor:", obj.constructor.toString());
// console.log("obj instanceof Greeting:", obj instanceof Greeting);
// console.log("obj.constructor === Greeting:", obj.constructor === Greeting);

//* Classes
// class Greeting {
//   morningGreet: string;
//   eveningGreet: string;
//   dayTime: string;
//   greeting?: string;
//   constructor(mGreet: string, nGreet: string) {
//     this.morningGreet = mGreet;
//     this.eveningGreet = nGreet;
//     this.dayTime = "morning";
//   }
//   greet() {
//     if (this.dayTime === "morning") {
//       return this.morningGreet;
//     } else if (this.dayTime === "evening") {
//       return this.eveningGreet;
//     } else {
//       return this.greeting;
//     }
//   }
// }

// class CommonGreeting extends Greeting {
//   constructor(mGreet: string, nGreet: string) {
//     super(mGreet, nGreet);
//     this.greeting = "Howdy";
//     this.dayTime = "day";
//   }
// }

// const aGreet = new CommonGreeting("Morning", "Evening");
// console.log('aGreet.greet() + " neighbor.":', aGreet.greet() + " neighbor.");

// aGreet.dayTime = "morning";
// console.log('aGreet.greet() + " neighbor.":', aGreet.greet() + " neighbor.");

//* Using Classes in JS - creating object
// const MeetingRoom = function (this: any, name: string, capacity: number) {
//   this.name = name;
//   this.capacity = capacity;
//   this.available = true;
//   this.schedule = [];
// };
// MeetingRoom.prototype.reserve = function (dtm: string, len: string) {
//   this.schedule.push({ dtm, len });
// };
// MeetingRoom.prototype.company = "ABC Coop";
// // console.log("MeetingRoom.toString():", MeetingRoom.toString());
// const boardRoom = new (MeetingRoom as any)("Board Room", 20);
// console.log("boardRoom:", boardRoom);
// console.log("boardRoom.company:", boardRoom.company);
// console.log("boardRoom.__proto__:", boardRoom.__proto__);

// class MeetingRoomClass {
//   name: string;
//   capacity: number;
//   available: boolean;
//   schedule: any[];
//   company?: string;
//   constructor(name: string, capacity: number) {
//     this.name = name;
//     this.capacity = capacity;
//     this.available = true;
//     this.schedule = [];
//   }
//   reserve(dtm: string, len: string) {
//     this.schedule.push({ dtm, len });
//   }
// }
// MeetingRoomClass.prototype.company = "ABC Coop";

// const boardRoomClass = new MeetingRoomClass("Board Room", 20);
// // const trainingRoomAClass = new MeetingRoomClass("Training Room A", 35);
// console.log("boardRoomClass:", boardRoomClass);
// console.log("boardRoomClass.company:", boardRoomClass.company);
// console.log("Object.getPrototypeOf(boardRoomClass):", Object.getPrototypeOf(boardRoomClass));

//* Subclasses: Setting Up Inheritance Chains
// class Room {
//   name: string;
//   capacity: number;
//   available: boolean;
//   schedule: any[];
//   company!: string;
//   constructor(name: string, capacity = 1) {
//     this.name = name;
//     this.capacity = capacity;
//     this.available = true;
//     this.schedule = [];
//   }
//   reserve(dtm: Date, len: string) {
//     this.schedule.push({ dtm, len });
//   }
//   getInfo() {
//     return `Name: ${this.name}${this.capacity > 1 ? " - Capacity: " + this.capacity : ""} - Available: ${this.available}`;
//   }
// }

// Room.prototype.company = "ABC Coop";

// class MeetingRoom extends Room {
//   [x: string]: any; //* Is this correct?
// }

// class MeetingRoom2 extends Room {
//   floor: number;
//   constructor(name: string, capacity: number, floor: number) {
//     super(name, capacity); //* super before this.floor!
//     this.floor = floor;
//   }
// }

// class BreakRoom extends Room {
//   kitchen: boolean;
//   tables: number;
//   constructor(name: string, capacity: number, kitchen: boolean, tables: number) {
//     super(name, capacity);
//     this.kitchen = kitchen;
//     this.tables = tables;
//   }
// }

// class MeetingPod extends Room {
//   phone: boolean;
//   constructor(name: string, phone: boolean) {
//     super(name);
//     this.phone = phone;
//   }
//   reserve(dtm: Date) {
//     this.schedule.push({ dtm, len: 30 });
//   }
// }

// const boardRoom = new MeetingRoom("Board Room", 20);
// const trainingRoomA = new MeetingRoom2("Training Room A", 35, 11);
// const lunchRoomA = new BreakRoom("Lunch Room A", 200, true, 10);

// const pod201 = new MeetingPod("Pod 201", true);
// pod201.reserve(new Date());

// console.log("boardRoom:", boardRoom);
// console.log("trainingRoomA:", trainingRoomA);
// console.log("lunchRoomA:", lunchRoomA);
// console.log("pod201:", pod201);
// console.log("pod201.company:", pod201.company);

// console.log("boardRoom.getInfo():", boardRoom.getInfo());
// console.log("pod201.getInfo():", pod201.getInfo());

// console.log("boardRoom.__proto__:", boardRoom.__proto__);
// console.log("boardRoom.__proto__.__proto__:", boardRoom.__proto__.__proto__);
// console.log("boardRoom.__proto__.__proto__.__proto__:", boardRoom.__proto__.__proto__.__proto__);
// console.log("boardRoom.__proto__.__proto__.__proto__.__proto__:", boardRoom.__proto__.__proto__.__proto__.__proto__);
// console.log(
//   "boardRoom.__proto__.__proto__.__proto__.__proto__?.__proto__:",
//   boardRoom.__proto__.__proto__.__proto__.__proto__?.__proto__
// );

//* Making Data Private
class MeetingRoom {
  #name; //* JS private method!
  #capacity; //* JS private method!
  available = true;
  schedule: any[] = [];
  company!: string;
  constructor(name: string, capacity: number) {
    this.#name = name;
    this.#capacity = capacity;
  }

  reserve(dtm: Date, len: number) {
    this.schedule.push({ dtm, len });
  }
  get capacity() {
    return this.#capacity;
  }
  get name() {
    return this.#name;
  }
  set capacity(num) {
    if (num < this.#capacity) this.#capacity = num;
  }
}

MeetingRoom.prototype.company = "ABC Coop";

const boardRoom = new MeetingRoom("Board Room", 20);
const trainingRoomA = new MeetingRoom("Training Room A", 35);
console.log("boardRoom:", boardRoom);
console.log("trainingRoomA:", trainingRoomA);
console.log("trainingRoomA.name:", trainingRoomA.name);
console.log("trainingRoomA.company:", trainingRoomA.company);

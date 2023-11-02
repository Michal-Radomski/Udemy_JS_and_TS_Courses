//* Array-like collections
// const obj = { 1: "one", 2: "two", 3: "three", 4: "four" };

//! Object in not iterable
// for (let val of obj) {
//   console.log(val);
// }

// console.log('typeof (obj as any)[Symbol.iterator] === "function":', typeof (obj as any)[Symbol.iterator] === "function");
// console.log("Array.isArray(obj):", Array.isArray(obj));

//* Converting to Array
// const map = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ]);

// const mapArray = [...map];
// console.log({ mapArray }, Array.isArray(mapArray));

// const mapArray2 = Array.from(map);
// console.log({ mapArray2 }, Array.isArray(mapArray2));

// // const objArray = Array.from(obj as any); //! []
// const objArray = Object.entries(obj);
// console.log({ objArray }, Array.isArray(objArray));

// const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
// const arr = [...str];
// const arr2 = Array.from(str);
// console.log(str.length, { arr, arr2 }, arr.length, arr2.length);

// let str2 = "";
// let number_i = 0;

// for (let val of str) {
//   if (val === "i") {
//     str2 += val.toUpperCase();
//     number_i++;
//   } else {
//     str2 += val;
//   }
// }
// console.log({ str2, number_i });
// console.log("str[0]:", str[0]);

// const wordArr = str.split(" ", 8);
// console.log({ wordArr });

// const regexArr = str.split(/[,.] | --/, 2);
// console.log({ regexArr });

// const sumIt = function (...[]) {
//   // console.log({ arguments });
//   const nums = Array.from(arguments);
//   console.log({ nums });
// };
// sumIt(...([1, 2, 3, 4] as const));

// const sumIt = function (...nums: number[]) {
//   console.log({ nums }, Array.isArray(nums));
//   const sum = nums.reduce((a, b) => a + b);
//   console.log({ sum });
// };
// sumIt(1, 2, 3);

// const arr = [3, 15, 25, 6, 8, 12];
// const idx = 4;
// console.log("arr[idx]:", arr[idx]);
// console.log("arr[idx-2]:", arr[idx - 2]);

// const obj = { q1: 55, q2: 85, q3: 90, q4: 0 };

// const arr1 = Object.keys(obj);
// const arr2 = Object.values(obj);
// const arr3 = Object.entries(obj);
// console.log({ arr1, arr2, arr3 });

// console.log(
//   "Array.from([1, 2, 3], (x) => x + x):",
//   Array.from([1, 2, 3], (x) => x + x)
// ); // Expected output: Array [2, 4, 6]

// const isArrayLike = (coll: any) => coll !== null && typeof coll[Symbol.iterator] === "function";

// let obj = {
//   1: "one",
//   2: "two",
//   3: "three",
// };
// const str = "string";

// console.log("isArrayLike(obj):", isArrayLike(obj));
// console.log("isArrayLike(str):", isArrayLike(str));

// console.log("typeof str[Symbol.iterator]:", typeof str[Symbol.iterator]);

//* Methods that Mutate Array
// const arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
// arr.reverse();
// console.log({ arr });

// let arr1 = ["Steven", "Mary", "Simone", "ari", "McKay", "James"];
// let arr2 = [15, -10, 500, 43, -25, 0, 323, 112];
// // arr1.sort() //* alphabetical order!;
// // arr2.sort() //* alphabetical order!;

// const compareNum = function (a: number, b: number) {
//   // if (a < b) {
//   //   return -1;
//   // } else if (b < a) {
//   //   return 1;
//   // } else {
//   //   return 0;
//   // }
//   // return (a < b) ? 1 : (b < a) ? -1 : 0;
//   return a - b;
// };

// const compareString = function (a: string, b: string) {
//   const x = a.toLowerCase(),
//     y = b.toLowerCase();

//   if (x < y) return -1;
//   if (y < x) return 1;
//   return 0;
// };

// arr1.sort(function (a, b) {
//   let x = a.toLowerCase(),
//     y = b.toLowerCase();
//   if (x < y) return -1;
//   if (y < x) return 1;
//   return 0;
// });
// arr2.sort(compareNum);
// console.log({ arr1, arr2 });

// const arr = [
//   {
//     firstName: "Steven",
//     lastName: "Hancock",
//     score: 90,
//   },
//   {
//     firstName: "Lynette",
//     lastName: "Jorgensen",
//     score: 100,
//   },
//   {
//     firstName: "Andrew",
//     lastName: "Wilson",
//     score: 71,
//   },
//   {
//     firstName: "Annika",
//     lastName: "Turner",
//     score: 82,
//   },
// ];

// arr.sort(function (a, b) {
//   if (a.firstName < b.firstName) return -1;
//   if (b.firstName < a.firstName) return 1;
//   return 0;
// });
// console.log({ arr });

// arr.sort(function (a, b) {
//   return a.score - b.score;
// });
// console.log({ arr });

//* array.splice()
// const arr = [1, 2, 3, 4, 5, 6] as (number | string)[];

// const returnArray1 = arr.splice(2, 2);
// console.log({ returnArray1 });
// const returnArray2 = arr.splice(4);
// console.log({ returnArray2 });
// const returnArray3 = arr.splice(2, 0, "a", "b");
// console.log({ returnArray3 });
// const returnArray4 = arr.splice(2, 1, "a", "b");
// console.log({ returnArray4 });
// console.log({ arr });

//* array.slice() -> shallow copy
// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log("animals.slice(2):", animals.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]
// console.log("animals.slice(2, 4):", animals.slice(2, 4)); // Expected output: Array ["camel", "duck"]
// console.log({ animals });

//* copyWithin() -> modifies the array!
// const arr = [1, 2, 3, 4, 5, 6];
// console.log("arr.copyWithin(2, 0, 2):", arr.copyWithin(2, 0, 2));
// console.log("arr.copyWithin(1, 2, 3):", arr.copyWithin(1, 2, 3));
// console.log("arr.copyWithin(2, 0):", arr.copyWithin(2, 0));
// console.log("arr.copyWithin(3, -1):", arr.copyWithin(3, -1));
// console.log("arr.copyWithin(0, 5, 6):", arr.copyWithin(0, 5, 6));

// *Array Prototype
// const PrintAll = (obj: Array<any>) => console.log(Object.getOwnPropertyNames(obj));
// PrintAll(Array.prototype);

//* Clone Array (Two methods close array, the base array has no changes)
// const arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
// const arrSort = [...arr];
// arrSort.sort();
// const arrReverse = Array.from(arr);
// arrReverse.reverse();
// console.log({ arr, arrSort, arrReverse });

//* Chaining
// const arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
// const arrSort = [...arr].sort().toString();
// const arrReverse = Array.from(arr).reverse().toString();
// console.log({ arr, arrSort, arrReverse });

//* Exercises
// const growthRate = [1.1, 0.5, -0.1, 0.3, 1.2, 1.5, 2.1, 0.8, 1.5, 0.3, -0.4];
// const growthRateSort = [...growthRate].sort((a, b) => a - b);
// console.log({ growthRateSort });

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const jMonths = [...months]
//   .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0))
//   .splice(4, 3);
// console.log({ jMonths });

//* Iterating Arrays
// let arr = [3, 15, 25, 6, 8, 12],
//   total = 0;

// arr.forEach(function (val) {
//   total += val;
// });
// console.log({ total });

// arr.forEach(function (val, idx, theArray) {
//   theArray[idx] = val * val;
// });
// console.log({ arr });

// const objArr = [
//   {
//     firstName: "Steven",
//     lastName: "Hancock",
//     score: 90,
//     pass: null,
//   },
//   {
//     firstName: "Lynette",
//     lastName: "Jorgensen",
//     score: 100,
//     pass: null,
//   },
//   {
//     firstName: "Andrew",
//     lastName: "Wilson",
//     score: 69,
//     pass: null,
//   },
//   {
//     firstName: "Annika",
//     lastName: "Turner",
//     score: 82,
//     pass: null,
//   },
// ] as { firstName: string; lastName: string; score: number; pass: null | boolean }[];

// objArr.forEach(function (obj) {
//   obj.score < 70 ? (obj.pass = false) : (obj.pass = true);
// });
// console.log({ objArr });

// const arr = [3, 15, 25, 6, 8, 12];
// const newArray = arr.map(function (val, idx, theArray) {
//   console.log({ val, idx, theArray });
//   return val * val;
// });
// console.log({ arr, newArray });

// const scores = [80, 50, 0, 100, 90, 80, 75];
// const passScores = scores.filter(function (val) {
//   return val >= 70;
// });
// const failScores = scores.filter(function (val) {
//   return val < 70;
// });
// console.log({ scores, passScores, failScores });

//* Reduce and reduceRight
// const array1 = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];
// const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
// const result2 = array1.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
// console.log({ result }); // Expected output: Array [4, 5, 2, 3, 0, 1]
// console.log({ result2 });

// const scores = [80, 50, 0, 100, 90, 80, 75];
// const sum = scores.reduce(function (acc, val) {
//   return acc + val;
// }, 0);
// console.log({ scores, sum });

// const objs = [{ firstName: "Steven" }, { lastName: "Hancock" }, { score: 85 }];
// const obj = objs.reduce(function (acc, val) {
//   return Object.assign(acc, val);
// }, {});
// const obj2 = objs.reduceRight(function (acc, val) {
//   return Object.assign(acc, val);
// }, {});
// console.log({ objs, obj, obj2 });

//* Every, Some
// const scores = [80, 50, 10, 100, 90, 80, 75];
// const results = scores.every(function (val) {
//   return val > 0;
// });
// let results2 = scores.some(function (val) {
//   return val === 0;
// });
// console.log({ results, results2 });

//* Exercises
// const scores = [80, 50, 0, 100, 90, 80, 75, 0, 0, 5, 65, 93];
// const zeroCnt = scores.reduce((acc, val) => (val === 0 ? acc + 1 : acc), 0);

// let zeroCnt2 = 0;
// scores.forEach(function (val) {
//   if (val === 0) zeroCnt2++;
// });
// console.log({ scores, zeroCnt, zeroCnt2 });

// const stmt =
//   "The best part of a sunset is the muted color that appears in anticipation of the deep reds, oranges and golds that will hopefully come later.";
// const noArticles = stmt.split(" ").filter((val) => !/\ba\b|\ban\b|\bthe\b/i.test(val));
// console.log({ noArticles });

// const str = "hello world!";
// const result = /^hello/.test(str);
// console.log({ result }); // true

// const arr1 = ["a", "b", "c", "d", "e", "f", "g"];
// const arr2 = [1, 2, 3, 4, 5, 6];
// const arr3 = ["1", "2", "3", "4", "5", "6"];
// const allArrays = [arr1, arr2, arr3] as any[][];
// const singleArray = allArrays.reduce((acc, val) => [...acc, ...val], []);
// console.log({ allArrays, singleArray });

//* Array.from()
// const nums = new Set([1, 2, "3", 4, "5"]);
// const numsArray = Array.from(nums, function (val) {
//   if (typeof val === "string") {
//     return Number(val);
//   } else {
//     return val;
//   }
// });
// console.log({ nums, numsArray });

// console.log(Array.from([1, 2, 3], (x) => x + x)); // Expected output: Array [2, 4, 6]

//* Multidimensional arrays
// const table = [] as number[][];

// for (let i = 0; i < 5; i++) {
//   table[i] = [];
// }
// console.log({ table });
// for (let row = 0; row < 5; row++) {
//   for (let col = 0; col < 5; col++) {
//     table[row][col] = row * col;
//   }
// }
// console.log("table: ", table);
// console.log("table[3][2]:", table[3][2]);

//* Combining Arrays and Extracting Values
// const elements = ["Fire", "Air", "Water"];
// console.log(elements.join()); // Expected output: "Fire,Air,Water"
// console.log(elements.join("-")); // Expected output: "Fire-Air-Water"

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);
// console.log(array3); // Expected output: Array ["a", "b", "c", "d", "e", "f"]
// const newArray = [...array1, ...array2, 1, 2, 3];
// console.log({ newArray });

//* Slice()
// const array1 = [5, 10, 15, 20, 25, 30, 35, 40];
// const newArray = array1.slice(0, 5);
// const newArray2 = array1.slice(2);
// const newArray3 = array1.slice();
// console.log({ newArray, newArray2, newArray3 });
// console.log({ array1 });
// console.log("array1 === newArray3:", array1 === newArray3);

// const test = function (...[]) {
//   console.log({ arguments });
//   const argArray = Array.prototype.slice.call(arguments);
//   console.log({ argArray });
//   console.log("Array.isArray(argArray):", Array.isArray(argArray));
// };
// test([1, 2, 3]);

//* Array.flat() + Array.flatMap()
// const array1 = [
//   [5, 10],
//   [15, 20],
//   [25, 30, 35, 40],
// ];
// const newArray = array1.flat(1);
// console.log("newArray:", newArray);

// const strArray = [
//   "The best part of a sunset",
//   "is the muted color that appears",
//   "in anticipation",
//   "of",
//   "the deep reds, oranges and golds that will hopefully come later.",
// ];
// const strArraySplit = strArray.flatMap((val) => val.split(" "));
// console.log("strArraySplit:", strArraySplit);

//* Array.toString()
// const array2 = [1, 2, "a", "1a"];
// console.log("array2.toString():", array2.toString(), typeof array2.toString()); // Expected output: "1,2,a,1a"

//* Exercises
// let table = [] as number[][],
//   rowNum = 2,
//   colNum = 2;
// console.log(1, { table });

// for (let i = 0; i < 10; i++) {
//   table[i] = [];
// }
// console.log(2, { table });

// for (let row = 0; row < 10; row++) {
//   for (let col = 0; col < 10; col++) {
//     table[row][col] = rowNum * colNum;
//     colNum += 2;
//   }
//   colNum = 2;
//   rowNum += 2;
// }
// console.log("table:", table);
// console.log("table[9][9]:", table[9][9]);

// const strArray1 = ["Arrays are important", "data structures for any", "language"],
//   strArray2 = ["and", "should be mastered", "in", "JavaScript."];

// const str = [...strArray1.flatMap((val) => val.split(" ")), ...strArray2.flatMap((val) => val.split(" "))].join(" ");
// console.log("str:", str);
// const str2 = strArray1.concat(strArray2).join(" ");
// console.log({ str2 });

//* Searching
//* indexOf(), lastIndexOf()
// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log("beasts.indexOf('bison'):", beasts.indexOf("bison")); // Expected output: 1
// console.log("beasts.indexOf('dog'):", beasts.indexOf("dog")); //* -1

// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
// console.log("animals.lastIndexOf('Dodo'):", animals.lastIndexOf("Dodo")); // Expected output: 3
// console.log("animals.lastIndexOf('Tiger'):", animals.lastIndexOf("Tiger")); // Expected output: 1
// console.log("animals.lastIndexOf('Duck'):", animals.lastIndexOf("Duck")); //* -1

// if (beasts.indexOf("bison") > -1) {
//   console.log("bison in beasts");
// }

// const students = ["Steven", "Lynette", "Kalie", "LJ", "Joshua", "Sarah", "Emily"],
//   scores = [80, 90, 55, 60, 85, 95, 25, 100];

// // const numLoc = scores.lastIndexOf(5);
// // const strLoc = students.indexOf("Steven");
// // console.log({ numLoc, strLoc });

// if (scores.includes(100)) {
//   console.log("This array contains 100.");
// }

//* Array.findOf()
// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log("beasts.indexOf('bison'):", beasts.indexOf("bison")); // Expected output: 1

//* find()
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10); // 12
// console.log({ found });

// const scores = ["80", 90, "55", 60, 100, 85, 95, 25, "100"];
// const topScore = scores.find(function (val) {
//   return val === 100;
// });
// console.log({ topScore });

// const users = [
//   { name: "Steve", q1: 45, q2: 85 },
//   { name: "Ignacio", q1: 100, q2: 100 },
//   { name: "Alvin", q1: 95, q2: 100 },
//   { name: "Brianna", q1: 100, q2: 85 },
//   { name: "Andrea", q1: 75, q2: 95 },
// ];

// const both = users.find((val) => val.q1 === 100 && val.q2 === 100);
// console.log({ both });

//* findIndex()
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element: number) => element > 13;
// console.log("array1.findIndex(isLargeNumber):", array1.findIndex(isLargeNumber)); // Expected output: 3

// const scores = ["80", 90, "55", 60, 100, 85, 95, 25, "100"];
// const topScore = scores.findIndex(function (val) {
//   return val === 100;
// });
// console.log({ topScore });

// const users = [
//   { name: "Steve", q1: 45, q2: 85 },
//   { name: "Ignacio", q1: 100, q2: 100 },
//   { name: "Alvin", q1: 95, q2: 100 },
//   { name: "Brianna", q1: 100, q2: 85 },
//   { name: "Andrea", q1: 75, q2: 95 },
// ];

// const both = users.findIndex((val) => val.q1 === 100 && val.q2 === 100);
// console.log({ both });

//* Exercises
// const objs = [
//   { id: "LI_34", name: "Steven", q1: 85, q2: 0 },
//   { id: "WL_100", name: "Mary", q1: 95, q2: 100 },
//   { id: "LI_25", name: "Lynette", q1: 45, q2: 50 },
//   { id: "LI_290", name: "Emily", q1: 65, q2: 30 },
//   { id: "WL_97", name: "Sarah", q1: 35, q2: 80 },
// ];

// const getUser = function (id: string) {
//   id = id.toUpperCase();
//   if (objs.some((val) => val.id.toUpperCase() === id)) {
//     return objs.find((elem) => elem.id.toUpperCase() === id);
//   } else {
//     return false;
//   }
// };
// console.log(getUser("LI_290"));

// const stateInfo = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
// const getPagePosition = function () {
//   if (stateInfo.includes(0)) {
//     return stateInfo.indexOf(0);
//   } else {
//     return stateInfo.length - 1;
//   }
// };
// console.log(getPagePosition());

//* Maps
// const obj = { name: "Michal" } as { name: string; lastName: string; score: number; "10": number };
// obj.lastName = "Rad";
// obj["score"] = 100;
// obj[10] = 10;
// console.log({ obj });

// const map = new Map();
// map.set("i", 100);
// map.set("j", 5);
// console.log({ map });

// console.log('map.get("i"):', map.get("i"));
// console.log("map.size:", map.size);

// const array = [...map];
// console.log({ array });
// console.log("map.keys():", map.keys());
// const arr = [...map.keys()];
// console.log({ arr });

//* Sets
// const set = new Set();
// set.add(100);
// set.add(5);
// set.add(100);
// console.log({ set });

// const arr2 = [1, 2, 4, 6, 8, 6, 7, 10, 2];
// const set2 = new Set(arr2);
// const uniqArray = [...set2];
// console.log({ uniqArray });

//* Exercise
const studentsA = ["James", "Annika", "Cameron", "AntoniO", "Kalie", "Gabriel", "Emily", "sarah"];
const studentsB = ["LJ", "Brianna", "David", "Antonio", "Kelsey", "Joshua", "Emily", "Sarah"];

const allStudents = Array.from(
  new Set([...studentsA.map((val) => val.toUpperCase()), ...studentsB.map((val) => val.toUpperCase())])
);
console.log("allStudents:", allStudents);

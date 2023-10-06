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

const isArrayLike = (coll: any) => coll !== null && typeof coll[Symbol.iterator] === "function";

let obj = {
  1: "one",
  2: "two",
  3: "three",
};
const str = "string";

console.log("isArrayLike(obj):", isArrayLike(obj));
console.log("isArrayLike(str):", isArrayLike(str));

//* Array-like collections
const obj = { 1: "one", 2: "two", 3: "three", 4: "four" };

//! Object in not iterable
// for (let val of obj) {
//   console.log(val);
// }

console.log('typeof (obj as any)[Symbol.iterator] === "function":', typeof (obj as any)[Symbol.iterator] === "function");
console.log("Array.isArray(obj):", Array.isArray(obj));

//* Converting to Array
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const mapArray = [...map];
console.log({ mapArray }, Array.isArray(mapArray));

const mapArray2 = Array.from(map);
console.log({ mapArray2 }, Array.isArray(mapArray2));

// const objArray = Array.from(obj as any); //! []
const objArray = Object.entries(obj);
console.log({ objArray }, Array.isArray(objArray));

// const arr1 = [] as any[];
// const arr2 = [1, 2, 3, 4, true, "array", { one: 1 }, [3, 5]];
// const arr3 = new Array();
// const arr4 = new Array(10);
// const arr5 = [, , , , , , , ,]; // Sparse array
// const arr6 = new Array<number | boolean>(1, 2, 3, 4, true);
// console.log({ arr1, arr2, arr3, arr4, arr5, arr6 });

// const arr1 = Array.of(5, 6, 7);
// const arr2 = Array.of(7);
// console.log({ arr1, arr2 });

// const scores1 = Array(10).fill(0);
// const scores2 = [10, 1, 2, 3, 4, 5, , , ,].fill(0, 0, 3);
// console.log({ scores1, scores2 });

// const arr1 = [1, 2, 3, 4, true, "array", { one: 1 }, [3, 5]];
// console.log({ arr1 });
// console.log(arr1[6]);
// arr1[6] = "steve";
// arr1[8] = false;
// arr1[20] = 55;
// console.log({ arr1 });

// const arr1 = [1, 2, 3, 4, true, "array", { one: 1 }, [3, 5]];
// console.log("arr1.at(0):", arr1.at(0));
// console.log("arr1.at(-1):", arr1.at(-1));
// console.log("arr1[arr1.length - 1]:", arr1[arr1.length - 1]);

//* Deleting and emptying elem
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// delete arr1[3];
// // console.log({ arr1 });
// const arr2 = [...arr1];
// arr2.length = 0;
// console.log({ arr1, arr2 });

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.push(55, 66); // Adds elem at the end of the array
// console.log({ arr });
// const last = arr.pop(); // Removes and return the last element
// console.log({ arr, last });

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// arr1.unshift(55, 66); // Adds elem at the beginning of the array
// console.log({ arr1 });
// const first = arr1.shift(); // Removes and return the first element
// console.log({ arr1, first });

// const arr = [3, 15, 25, 6, 8, 12];
// console.log(1, { arr });
// for (let i = 0; i < arr.length; i++) {
//   // arr[i] = arr[i] ** 2;
//   arr[i] = Math.pow(arr[i], 2);
// }
// console.log(2, { arr });
// const arr1 = arr.map((elem) => Math.sqrt(elem));
// console.log(3, { arr1 });

const arr2 = [3, 15, 25, 6, 8, 12];
//! for ... in -> don't use with arrays!
// for (let key in arr2) {
//   console.log(key, arr2[key]);
// }
//* for ... of -> can be used with arrays!
for (let val of arr2) {
  console.log({ val });
}

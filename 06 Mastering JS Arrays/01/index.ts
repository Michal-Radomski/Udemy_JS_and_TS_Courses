// const arr1 = [] as any[];
// const arr2 = [1, 2, 3, 4, true, "array", { one: 1 }, [3, 5]];
// const arr3 = new Array();
// const arr4 = new Array(10);
// const arr5 = [, , , , , , , ,];
// const arr6 = new Array<number | boolean>(1, 2, 3, 4, true);
// console.log({ arr1, arr2, arr3, arr4, arr5, arr6 });

// const arr1 = Array.of(5, 6, 7);
// const arr2 = Array.of(7);
// console.log({ arr1, arr2 });

const scores1 = Array(10).fill(0);
const scores2 = [10, 1, 2, 3, 4, 5, , , ,].fill(0, 0, 3);
console.log({ scores1, scores2 });

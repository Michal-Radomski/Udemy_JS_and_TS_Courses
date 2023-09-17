"use script";
// var i = 2;
// console.log({ i });

// //* Var
// var i;
// console.log(i);
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// //* Let
// let j = 0;
// for (j = 0; j < 10; j++) {
//   console.log(j);
// }
// console.log(j);

// //* Const
// const k = 2;
// console.log({ k });
// // k=3 //* Error

const myArray = [1, 2, 3, 4] as number[];
console.log({ myArray });
myArray.push(5);
console.log({ myArray });

const obj = {
  name: "Rob",
  career: "Teacher",
} as { name: string; career: string; gender?: string };

obj.gender = "male";
console.log({ obj });

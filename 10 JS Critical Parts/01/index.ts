//@ Critical JS Concepts
// console.log("globalThis:", globalThis);

//* Memory Heap and Call Stack
// function recursion(num: number) {
//   num = num + num;
//   console.log({ num });
//   if (num > 999999999999) {
//     console.log("num:", num);
//     return;
//   }
//   recursion(num);
// }

// recursion(1);

//* Garbage Collection + Removing Event Listeners
// let cnt = 0;
// const title = document.getElementById("title") as HTMLElement;

// function titleClick() {
//   cnt++;
//   console.log("The number of times title has been clicked: " + cnt);
//   if (cnt > 5) {
//     title.removeEventListener("click", titleClick);
//   }
// }

// title.addEventListener("click", titleClick);

//* Exercise
// const arr = Array(123000).fill(1);
// // console.log({ arr });

// const popIt = function () {
//   arr.pop();
//   if (arr.length > 0) {
//     // popIt();
//     setTimeout(popIt, 0);
//   }
// };

// popIt();

//@ Critical Fundamentals
//* Execution Context
// // @ts-ignore
// console.log({ num }); // undefined
// var num = 10; //* let and const -> error
// numFunction();
// function numFunction() {
//   console.log("in numFunction");
// }
// console.log({ num });

//* Global Object
// console.log("globalThis:", globalThis);

//* Hoisting -> not recommended!
// sum();
// function sum() {
//   console.log(num1 + num2); //* undefined + undefined = NaN
// }
// var num1 = 10,
//   num2 = 5;
// sum(); //* 15

// multiply(6, 2);
// function multiply(a: number, b: number) {
//   console.log(a * b); //* 12
//   // return a * b;
// }

//* Function declaration vs function expression
// console.log(sum10);
// console.log("sum10(5):", sum10(5));
// // Function Declaration
// function sum10(num: number) {
//   return num + 10;
// }

// // Function Expression -> not hoisted!
// var sum100 = function (num: number) {
//   return num + 100;
// };
// // console.log(sum100);
// console.log("sum100(5):", sum100(5));

// // Arrow function
// const sum1000 = (num: number) => {
//   return num + 1000;
// };
// console.log("sum1000(5):", sum1000(5));

//* Exercise
// var sum = function (this: any) {
//   var num = 10;
//   console.log({ num });
//   // console.log("this:", this);
//   // console.log("globalThis:", globalThis);
//   const getNewNum = () => {
//     var newNum = 100;
//     console.log({ newNum });
//     // console.log("this:", this);
//     // console.log("globalThis:", globalThis);
//     return newNum;
//   };
//   console.log(num);
//   var newNum = getNewNum();
//   console.log(newNum);
//   console.log("num + newNum:", num + newNum);
// };

// sum();

//* Lexical Environment -> where variable is placed!

//* Scope + Scope Chain
// var a = 10;

// var add5 = function (num: number) {
//   var b = 5;
//   console.log("num + b:", num + b);
//   var add10 = function (num2: number) {
//     console.log("num2 + a:", num2 + a);
//   };
//   add10(3);

//   var add15 = function (num3: number) {
//     var c = 15;
//     console.log("num3 + c:", num3 + c);
//   };
//   add15(3);
// };
// add5(3);

//* Block Scope: let and const
// let a = 10;
// const add5 = function (num: number) {
//   let b = 5;
//   console.log("num + b:", num + b);

//   const add10 = function (num2: number) {
//     console.log("num2 + a:", num2 + a);
//   };
//   add10(3);

//   const add15 = function (num3: number) {
//     let c = 15;
//     console.log("num3 + c:", num3 + c);
//   };
//   add15(3);
// };
// add5(3);

// const sumIt = function (num1: number) {
//   let num2 = 20;
//   if (num1 > num2) {
//     let num3 = 10;
//     console.log("num1 + num3:", num1 + num3);
//   }
//   console.log("num1 + num2:", num1 + num2);
// };
// sumIt(100);

//* Exercise
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log({ i });
//   }, 1000 * i);
// }
// var = 3
// { i: 3 }
// { i: 3 }
// { i: 3 }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log({ i });
//   }, 1000 * i);
// }
// let = 1,2,3
// { i: 0 }
// { i: 1 }
// { i: 2 }

// const num = 3.14;
// // num = 3.1415; //* Error

// const scores = [100, 90, 85, 70, 0, 0, 60];
// // scores = [100, 90, 85, 70, 0]; //* Error
// scores[4] = 90;
// scores.push(65);
// console.log("scores:", scores);

//* Exercise
// const playingWithLoops = function () {
//   let total = 0;
//   for (let i = 0; i < 100; i++) {
//     total += i;
//     // console.log(1, total);
//     // console.log({ i });
//   }
//   for (let j = 0; j < 1000; j++) {
//     total += j;
//     // console.log(2, total);
//     // console.log({ j });
//   }
//   console.log({ total });
// };
// playingWithLoops(); //* { total: 504450 }

// const fun = function () {
//   let num = 10;
//   console.log(0, { num });
//   if (num) {
//     num = 1000;
//     console.log(1, { num });
//   }
//   num = 100;
//   console.log(2, { num });
// };
// fun();

const sumIt = function () {
  let num = 10;
  const sum2 = function () {
    return num * 2;
  };
  return sum2();
};
console.log("sumIt():", sumIt()); //* 20

// What is wrong with the following function and how can you fix it?
const sumIt2 = function () {
  let num = 100;
  return num * 2;
};
console.log("sumIt2():", sumIt2()); //* 200

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

//* Scope
var a = 10;

var add5 = function (num: number) {
  var b = 5;
  console.log("num + b:", num + b);
  var add10 = function (num2: number) {
    console.log("num2 + a:", num2 + a);
  };
  add10(3);

  var add15 = function (num3: number) {
    var c = 15;
    console.log("num3 + c:", num3 + c);
  };
  add15(3);
};
add5(3);

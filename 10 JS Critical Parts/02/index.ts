//@ Functional Programming
// const weirdArray = [0, 1, {}, null, undefined, function () {}, [], "string"];
// const exists = (val: any) => val !== null;
// const newArray = weirdArray.map(exists);
// console.log({ weirdArray, newArray });

//* Spread/ Rest (...) Syntax
//* Spread Operator -> destroys an array
// const numbers = [1, 2, 3];
// console.log(...numbers);

// const multiply = (a: number, b: number, c: number) => a * b * c;
// // @ts-ignore
// const results = multiply(...numbers);
// console.log({ results });

// const num2 = [3, 4, 5];
// const newArray = [...numbers, ...num2];
// console.log({ newArray });

// const copyArray = [...numbers];
// copyArray.push(4);
// console.log({ copyArray });

// const obj = { name: "Steve", favoriteNum: 32 };
// const newObj = { ...obj };
// console.log({ newObj });

//* Rest Operator -> produces an array
// const test = function () {
//   console.log(arguments);
// };
// // @ts-ignore
// test(3, 4);
// const sum = (...args: number[]) => console.log("args:", args);
// sum(5, 6, 9, 10);

//* Exercise
// const scores1 = [30, 50, 40, 60];
// const scores2 = [100, 90, 70, 80];
// const user = {
//   first: "Steven",
//   last: "Hancock",
//   score1: 80,
//   score2: 0,
// };

// const newScores = [...scores2, ...scores1];
// console.log({ newScores });

// const userCopy = { ...user };
// userCopy.score2 = 70;
// console.log({ user, userCopy });

// const gatherScores = (...args: number[]) => args;
// const scores3 = gatherScores(100, 50, 60, 70);
// console.log({ scores3 });

//* FP Example
// const countSession = () => {
//   console.log("Session was counted.");
// };

// const sessionCounted = () => {
//   console.log("Already done.");
// };

// const onlyOnce = (fn: Function) => {
//   let once = false;
//   return (...args: any) => {
//     console.log(1, { args });
//     if (!once) {
//       once = true;
//       fn(...args);
//     }
//   };
// };

// const onlyOnceAndThen = (fn1: Function, fn2: Function) => {
//   let once = false;
//   return (...args: any) => {
//     console.log(2, { args });
//     if (once) {
//       fn2(...args);
//     } else {
//       once = true;
//       fn1(...args);
//     }
//   };
// };

// const countSessionOnce = onlyOnce(countSession);
// const countSessionAndThen = onlyOnceAndThen(countSession, sessionCounted);
// // console.log({ countSessionOnce, countSessionAndThen });
// countSessionOnce();
// countSessionAndThen();

//* Pure Functions
let globalNum = 9;
const newNum = (num: number) => num * globalNum;

const newNum2 = (num: number) => {
  if (globalNum !== 9) {
    globalNum = 9;
  }
  return num * globalNum;
};

const newNumPure = (factor: number) => (num: number) => num * factor;
const newNumNew = newNumPure(9);

const scores = [90, 50, 70, 60];

const removeLastScore = (score: number[]) => score.pop();
const lastScore = removeLastScore(scores);
console.log({ lastScore });

const removeLastScorePure = (score: number[]) => [...score].pop();
let lastScore2 = removeLastScorePure(scores);
console.log({ lastScore2 });

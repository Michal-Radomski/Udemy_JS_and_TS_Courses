//* Lodash - doesn't work!
// const _ = require("lodash");
// const fp = require("lodash/fp");

// // console.log("lodash:", _);

// // const sum = _.add(5, 2);
// // const sum2 = fp.add(5);
// // const sum3 = _.add(5, 1);

// // console.log({ sum, sum3 });
// // console.log("sum2(2):", sum2(2));

// const addOne = _.map((num: number) => num + 1);
// const multiByThree = _.map((num: number) => num * 3);

// const removeNumsOver100 = _.filter((num: number) => num <= 100);
// const logAndReturn = function (data: number[]) {
//   // console.log({ data });
//   return data;
// };

// const processNumbers = _.flow(addOne, multiByThree, removeNumsOver100, logAndReturn);
// console.log("processNumbers([5, 8, 20, 40]):", processNumbers([5, 8, 20, 40]));

//* Exercise - Doesn't work!
// const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];
// const multiSingleScoresBy10 = _.map((val: number) => (val < 10 ? val * 10 : val));
// const rmvScoresOver100 = _.filter((val: number) => val <= 100);
// const rmvZeroScores = _.filter((val: number) => val > 0);
// const rmvBothZeroAndOver100 = _.flow(rmvScoresOver100, rmvZeroScores);
// const processScores = _.flow(multiSingleScoresBy10, rmvBothZeroAndOver100);
// const computeAverage = _.curry(_.mean);
// const processAndComputeAve = _.flow(processScores, computeAverage);
// console.log("processScores(scores):", processScores(scores));

//* Ramda
const R = require("ramda");
// console.log({ R });

const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const addOne = R.map((num: number) => num + 1);
const multiByThree = R.map((num: number) => num * 3);
const removeNumsOver100 = R.filter((num: number) => num <= 100);
const logAndReturn = function (data: number[]) {
  // console.log({ data });
  return data;
};
const sumAllNumbers = R.reduce((sum: number, num: number) => sum + num)(0);

const processNumbers = R.pipe(addOne, multiByThree, removeNumsOver100, logAndReturn, sumAllNumbers, console.log);

processNumbers(scores);

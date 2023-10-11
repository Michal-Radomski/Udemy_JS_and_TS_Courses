//* Arrow Function
// const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];
// // Any scores that are below 10 needs to be multiplied by 10 and the new value included.
// const boostSingleScores = scores.map((val) => (val < 10 ? val * 10 : val));
// // Remove any scores that are over 100.
// const rmvOverScores = boostSingleScores.filter((val) => val <= 100);
// // Remove any scores that are 0 or below.
// const rmvZeroScores = rmvOverScores.filter((val) => val > 0);
// // Sum the scores.
// const scoresSum = rmvZeroScores.reduce((sum, val) => sum + val, 0);
// //Provide a count for the number of scores still remaining.
// const scoresCnt = rmvZeroScores.reduce((cnt, _val) => cnt + 1, 0);
// console.log({ scoresSum, scoresCnt });

//* Function Composition
// const str: string = "Innovation distinguishes between a leader and a follower.";

// const trim = (str: string) => str.replace(/^\s*|\s*$/g, "");
// const noPunct = (str: string) => str.replace(/[?.,!]/g, "");
// const capitalize = (str: string) => str.toUpperCase();
// const breakout = (str: string) => str.split(" ");
// const noArticles = (str: string) => str !== "A" && str !== "AN" && str !== "THE";
// const filterArticles = (arr: string[]) => arr.filter(noArticles);

// console.log(
//   "filterArticles(breakout(capitalize(noPunct(trim(str))))):",
//   filterArticles(breakout(capitalize(noPunct(trim(str)))))
// );

//* From right to left!
// const compose = function (...functions: Function[]) {
//   return (str: string) => {
//     return functions.reduceRight((value: string, func: Function) => {
//       return func(value);
//     }, str);
//   };
// };

//* From left to right!
// const pipe = function (...functions: Function[]) {
//   return (str: string) => {
//     return functions.reduce((value: string, func: Function) => {
//       return func(value);
//     }, str);
//   };
// };

// const prepareStringPipe = pipe(trim, noPunct, capitalize, breakout, filterArticles);
// const prepareStringCompose = compose(filterArticles, breakout, capitalize, noPunct, trim);

// console.log("prepareStringCompose(str):", prepareStringCompose(str));
// console.log("prepareStringCompose(str):", prepareStringCompose(str));

//* Exercise
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const pipeFunc = (...functions: Function[]) => {
  return (x: number[]) => {
    return functions.reduce((value, func) => {
      return func(value);
    }, x);
  };
};

const singleScoresByTen = (array: number[]) => {
  return array.map((val) => (val < 10 ? val * 10 : val));
};

const rmvOverScores = (array: number[]) => {
  return array.filter((val) => val <= 100);
};

const rmvZeroScores = (array: number[]) => {
  return array.filter((val) => val > 0);
};

const sumScores = (array: number[]) => {
  return array.reduce((sum, val) => sum + val, 0);
};

const countScores = (array: number[]) => {
  return array.reduce((cnt, _val) => cnt + 1, 0);
};

const rmvBothHighLow = pipeFunc(rmvOverScores, rmvZeroScores);

const noHighLowArray = rmvBothHighLow(scores);

const prepareScores = pipeFunc(rmvBothHighLow, singleScoresByTen);

const preparedArray = prepareScores(scores);

const computeAverage = (array: number[]) => {
  return sumScores(array) / array.length;
};

const prepareAndComputeAve = pipeFunc(prepareScores, computeAverage);
const average = prepareAndComputeAve(scores);
console.log({ average }, "countScores(scores):", countScores(scores));

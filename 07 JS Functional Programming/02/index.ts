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
const str: string = "Innovation distinguishes between a leader and a follower.";

const trim = (str: string) => str.replace(/^\s*|\s*$/g, "");
const noPunct = (str: string) => str.replace(/[?.,!]/g, "");
const capitalize = (str: string) => str.toUpperCase();
const breakout = (str: string) => str.split(" ");
const noArticles = (str: string) => str !== "A" && str !== "AN" && str !== "THE";
const filterArticles = (arr: string[]) => arr.filter(noArticles);

console.log(
  "filterArticles(breakout(capitalize(noPunct(trim(str))))):",
  filterArticles(breakout(capitalize(noPunct(trim(str)))))
);

const pipe = function (...fns: Function[]) {
  return function (x: string) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

const prepareString = pipe(trim, noPunct, capitalize, breakout, filterArticles);

// const prepareString = compose(
//     filterArticles,
//     breakout,
//     capitalize,
//     noPunct,
//     trim);

console.log("prepareString(str):", prepareString(str));

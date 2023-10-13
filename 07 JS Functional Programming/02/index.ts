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
// const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

// const pipeFunc = (...functions: Function[]) => {
//   return (x: number[]) => {
//     return functions.reduce((value, func) => {
//       return func(value);
//     }, x);
//   };
// };

// const singleScoresByTen = (array: number[]) => {
//   return array.map((val) => (val < 10 ? val * 10 : val));
// };

// const rmvOverScores = (array: number[]) => {
//   return array.filter((val) => val <= 100);
// };

// const rmvZeroScores = (array: number[]) => {
//   return array.filter((val) => val > 0);
// };

// const sumScores = (array: number[]) => {
//   return array.reduce((sum, val) => sum + val, 0);
// };

// const countScores = (array: number[]) => {
//   return array.reduce((cnt, _val) => cnt + 1, 0);
// };

// const rmvBothHighLow = pipeFunc(rmvOverScores, rmvZeroScores);

// const noHighLowArray = rmvBothHighLow(scores);

// const prepareScores = pipeFunc(rmvBothHighLow, singleScoresByTen);

// const preparedArray = prepareScores(scores);

// const computeAverage = (array: number[]) => {
//   return sumScores(array) / array.length;
// };

// const prepareAndComputeAve = pipeFunc(prepareScores, computeAverage);
// const average = prepareAndComputeAve(scores);
// console.log({ average }, "countScores(scores):", countScores(scores));

//* Bind
// const moduleX = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

// const unboundGetX = moduleX.getX;
// // console.log("unboundGetX():", unboundGetX()); // The function gets invoked at the global scope -> Expected output: undefined
// const boundGetX = unboundGetX.bind(moduleX);
// console.log("boundGetX():", boundGetX()); // Expected output: 42

//* Arity
// interface User {
//   name: string;
//   score: number;
//   tries: number;
// }
// const users = [
//   { name: "James", score: 30, tries: 1 },
//   { name: "Mary", score: 110, tries: 4 },
//   { name: "Henry", score: 80, tries: 3 },
// ];

// const pipe = function (...functions: Function[]) {
//   return (str: string) => {
//     return functions.reduce((value: string, func: Function) => {
//       return func(value);
//     }, str);
//   };
// };

// // Modifies Data
// var storeUser = function (arr: User[], user: User) {
//   return arr.map(function (val) {
//     if (val.name.toLowerCase() === user.name.toLowerCase()) {
//       return user;
//     } else {
//       return val;
//     }
//   });
// };

// // Pure Functions
// const cloneObj = function (obj: object) {
//   return JSON.parse(JSON.stringify(obj));
// };

// const getUser = function (arr: User[], name: string) {
//   return arr.reduce(function (obj: any, val: User) {
//     if (val.name.toLowerCase() === name.toLowerCase()) {
//       return val;
//     } else {
//       return obj;
//     }
//   }, null);
// };

// const updateScore = function (newAmt: number, user: User) {
//   if (user) {
//     user.score += newAmt;
//     return user;
//   }
// };

// const updateTries = function (user: User) {
//   if (user) {
//     user.tries++;
//     return user;
//   }
// };

// const partGetUser = getUser.bind(null, users);
// const partUpdateScore30 = updateScore.bind(null, 30);

// // const usr = getUser(users, "Henry");
// // const usr1 = updateScore(30, cloneObj(usr));
// // const usr2 = updateTries(cloneObj(usr1 as User));
// // const newArray = storeUser(users, usr2 as User);
// // console.log("newArray:", newArray);

// const updateUser = pipe(partGetUser, cloneObj, partUpdateScore30, updateTries);

// const newestUser = updateUser("Henry");
// console.log("newestUser:", newestUser);

//* Currying Concepts
// const curryGreeting = (greeting: string) => {
//   return function (name: string) {
//     // console.log(greeting + " " + name);
//     console.log(`${greeting} ${name}`);
//   };
// };

// const welcomeGreet = curryGreeting("Welcome");
// const welcomeGreet2 = curryGreeting("Hello");

// welcomeGreet("Steve");
// welcomeGreet("Mary");
// welcomeGreet2("Steve");
// welcomeGreet2("Mary");

//* Currying
// function curry(fn: Function, arity = fn.length) {
//   return (function nextCurried(prevArgs: any[]) {
//     return function curried(nextArg: any) {
//       const args = [...prevArgs, nextArg];
//       if (args.length >= arity) {
//         return fn(...args);
//       } else {
//         return nextCurried(args);
//       }
//     };
//   })([]);
// }

// const pipe = function (...fns: Function[]) {
//   return function (arg: any) {
//     return fns.reduce(function (value, func) {
//       return func(value);
//     }, arg);
//   };
// };

// const fFunc = function (a: number, b: number, c: number) {
//   return a + b + c;
// };

// const gFunc = function (d: number, e: number) {
//   return d + e;
// };

// const hFunc = function (f: number, g: number, h: number) {
//   return f + g + h;
// };

// const curriedF = curry(fFunc);
// const curriedG = curry(gFunc);
// const curriedH = curry(hFunc);
// const newFunc1 = pipe(curriedF(1)(2), curriedG(4), curriedH(5)(6));
// console.log("newFunc1(3):", newFunc1(3));

// const newFunc2 = pipe(curry(fFunc)(1)(2), curry(gFunc)(4), curry(hFunc)(5)(6));
// console.log("newFunc2(4):", newFunc2(4));

// const doubleNum = function (num: number) {
//   return num + num;
// };

// const totalIt = function (n1: number, n2: number, n3: number, n4: number) {
//   return n1 + n2 + n3 + n4;
// };

// const doArray = function (num1: number, num2: number) {
//   return [num1, num2];
// };

// const newFunction = pipe(doubleNum, curry(totalIt)(3)(2)(1), curry(doArray)(50));
// console.log("newFunction(3):", newFunction(3));

//* Dissecting the Curry Function
// function curry(fn: Function, arity = fn.length) {
//   return (function nextCurried(prevArgs: any[]) {
//     return function curried(nextArg: any) {
//       // console.log({ prevArgs });
//       // console.log({ nextArg });
//       const args = [...prevArgs, nextArg];
//       if (args.length >= arity) {
//         return fn(...args);
//       } else {
//         return nextCurried(args);
//       }
//     };
//   })([]);
// }

// const pipe = function (...fns: Function[]) {
//   return function (arg: any) {
//     return fns.reduce(function (value, func) {
//       return func(value);
//     }, arg);
//   };
// };

// const doubleNum = function (num: number) {
//   return num + num;
// };

// const totalIt = function (n1: number, n2: number, n3: number, n4: number) {
//   return n1 + n2 + n3 + n4;
// };

// const doArray = function (num1: number, num2: number) {
//   return [num1, num2];
// };

// const curriedTotalIt = curry(totalIt);
// const curriedDoArray = curry(doArray);

// const newFunction = pipe(doubleNum, curriedTotalIt(3)(2)(1), curriedDoArray(50));
// console.log("newFunction(4):", newFunction(4));
// console.log("newFunction.toString():", newFunction.toString());

//* Exercise
// interface User {
//   name: string;
//   score: number;
//   tries: number;
// }
// const users = [
//   { name: "James", score: 30, tries: 1 },
//   { name: "Mary", score: 110, tries: 4 },
//   { name: "Henry", score: 80, tries: 3 },
// ];

// // Modifies Data
// const storeUser = function (arr: User[], user: User) {
//   return arr.map(function (val: User) {
//     if (val.name.toLowerCase() === user.name.toLowerCase()) {
//       return user;
//     } else {
//       return val;
//     }
//   });
// };

// // Pure Functions
// const cloneObj = function (obj: object) {
//   return JSON.parse(JSON.stringify(obj));
// };

// const getUser = function (arr: User[], name: string) {
//   return arr.reduce(function (obj: any, val: User) {
//     if (val.name.toLowerCase() === name.toLowerCase()) {
//       return val;
//     } else {
//       return obj;
//     }
//   }, null);
// };

// const updateScore = function (user: User, newAmt: number) {
//   if (user) {
//     user.score += newAmt;
//     return user;
//   }
// };

// const updateTries = function (user: User) {
//   if (user) {
//     user.tries++;
//     return user;
//   }
// };

// function curry(fn: Function, arity = fn.length) {
//   return (function nextCurried(prevArgs: any[]) {
//     return function curried(nextArg: any) {
//       const args = [...prevArgs, nextArg];
//       if (args.length >= arity) {
//         return fn(...args);
//       } else {
//         return nextCurried(args);
//       }
//     };
//   })([]);
// }

// const pipe = function (...fns: Function[]) {
//   return function (arg: any) {
//     return fns.reduce(function (value, func) {
//       return func(value);
//     }, arg);
//   };
// };

// const getUsersUser = pipe(curry(getUser)(users), cloneObj);

// const getHenry = function () {
//   return getUsersUser("Henry");
// };

// const updateHenry = pipe(curry(updateScore)(getHenry()), cloneObj, updateTries, curry(storeUser)(users));
// console.log("updateHenry(4):", updateHenry(4));

//* Declarative Programming
//* Declarative like below
// return fns.reduce(function(v, f) {
//   return f(v);
// }, x);

//* Imperative like below
// let result;
// for (let i = 0; i < fns.length; i++) {
//   if (i === 0) {
//       result = fns[i](x);
//   }
//   result = fns[i](result);
// }
// return result;

//* Imperative vs Declarative Programming

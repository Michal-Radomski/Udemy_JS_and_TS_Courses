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
// // let globalNum = 9;
// // const newNum = (num: number) => num * globalNum;

// // const newNum2 = (num: number) => {
// //   if (globalNum !== 9) {
// //     globalNum = 9;
// //   }
// //   return num * globalNum;
// // };
// // console.log("newNum(5):", newNum(5));
// // console.log("newNum2(5):", newNum2(5));

// const newNumPure = (factor: number) => (num: number) => num * factor;
// const newNumNew = newNumPure(9);
// console.log("newNumNew(2):", newNumNew(2));

// const scores = [90, 50, 70, 60];

// // const removeLastScore = (score: number[]) => score.pop();
// // const lastScore = removeLastScore(scores);
// // console.log({ lastScore, scores });

// const removeLastScorePure = (score: number[]) => [...score].pop();
// let lastScore2 = removeLastScorePure(scores);
// console.log({ lastScore2, scores });

//* Pure Function2
// const logging = (str: string) => console.log(str);
// logging("Hello World!");

//* Using Reduce, Map and Filter
// const scores = [90, 30, 60, 75, 80, 95, 20, 100];

// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//   sum += scores[i];
// }
// console.log({ sum });

// const sumFun = (accum: number, curVal: number) => accum + curVal;
// const sum2 = scores.reduce(sumFun, 0);
// console.log({ sum2 });

// const sumCountAverage = (accumObj: { sum: number; count: number }, curVal: number) => ({
//   sum: accumObj.sum + curVal,
//   count: accumObj.count + 1,
//   average: (accumObj.sum + curVal) / (accumObj.count + 1),
// });
// const result = scores.reduce(sumCountAverage, { sum: 0, count: 0, average: 0 });
// console.log({ result });

// const decimalScore = (val: number) => val / 100;
// const decimalScores = scores.map(decimalScore);
// console.log({ decimalScores });

// const passingScores = (val: number) => val >= 70;
// const passScores = scores.filter(passingScores);
// console.log({ passScores });

//* The Importance of Immutability
// const scores = [90, 30, 60, 75, 80, 95, 20, 100];
// const decimalScore = (val: number) => val / 100;
// const decimalScores = scores.map(decimalScore);
// console.log({ decimalScores });

// const passingScores = (val: number) => val >= 70;
// const passScores = scores.filter(passingScores);
// console.log({ passScores });

// const removeLastScorePure = (score: number[]) => [...score].pop();
// const lastScore = removeLastScorePure(scores);
// console.log({ scores }); //* No change in existing data!
// console.log({ lastScore });

// interface User {
//   name: string;
//   attempts: number;
//   scores: number[];
// }

// const user = {
//   name: "Steve",
//   attempts: 1,
//   scores: [90, 80],
// };

// // const cloneObj = (obj: User) => {
// //   return { ...obj };
// // }; //* Shallow copy!
// // const cloneObj = (obj: User) => Object.assign({}, obj); //* Shallow copy!
// const cloneObj = (obj: User) => JSON.parse(JSON.stringify(obj)); //* Deep copy!

// const updateAttempts = (obj: { attempts: number }) => {
//   obj.attempts += 1;
//   return obj;
// };

// const newObj = updateAttempts(cloneObj(user));
// const newObj2 = cloneObj(user);
// newObj2.scores.push(80);

// console.log({ user, newObj, newObj2 });

//* Currying
// const scores = [0.9, 0.3, 0.6, 0.75, 0.8, 0.95, 0.2, 1];

// // const multiplyTwoNumbers = (num1: number, num2: number) => num1 * num2;

// // const curriedMultiply = function (num1: number) {
// //   return function (num2: number) {
// //     return num1 * num2;
// //   };
// // };
// const curriedMultiply = (num1: number) => (num2: number) => num1 * num2;
// // console.log("curriedMultiply(100)(5):", curriedMultiply(100)(5));

// const multiplyBy100 = curriedMultiply(100);
// const decimalScores = scores.map(multiplyBy100);
// console.log({ decimalScores });

//* Partial Application
// const composeResults = (str: string, amount: number, max: number) => `${str} ${amount} out of ${max}`;
// const finalScoreMsg = composeResults.bind(null, "You earned a score of");
// const result = finalScoreMsg(75, 100);
// console.log({ result }); // You earned a score of 75 out of 100

//* Composing Functions
// const words =
//   "hockey suggest garlic key fence loop coin attend mobile bird effort bulk suggest trial agree garlic fence bird little garlic";

// // 1. make uppercase
// const makeUpperCase = (str: string) => str.toUpperCase();

// // 2. convert string to array of words
// const stringToArray = (str: string) => str.split(" ");

// // 3. remove duplicates from Array
// const removeArrayDuplicates = (array: string[]) => new Set(array);

// // 4. convert array like to array
// const arrayLikeToArray = (arr: Set<string>) => [...arr];

// // 5. convert array to string
// const arrayToString = (array: string[]) => array.join(" ");

// const results = arrayToString(arrayLikeToArray(removeArrayDuplicates(stringToArray(makeUpperCase(words)))));
// console.log({ results });

// const compose =
//   (...fns: Function[]) =>
//   (data: string) =>
//     fns.reduceRight((acc, fun) => fun(acc), data);

// const uniquePassPhrase = compose(arrayToString, arrayLikeToArray, removeArrayDuplicates, stringToArray, makeUpperCase);
// const passPhrase = uniquePassPhrase(words);
// console.log({ passPhrase });
// console.log("results===passPhrase:", results === passPhrase);

//* Piping
// const words =
//   "hockey suggest garlic key fence loop coin attend mobile bird effort bulk suggest trial agree garlic fence bird little garlic";

// // 1. make uppercase
// const makeUpperCase = (str: string) => str.toUpperCase();

// // 2. convert string to array of words
// const stringToArray = (str: string) => str.split(" ");

// // 3. remove duplicates from Array
// const removeArrayDuplicates = (array: string[]) => new Set(array);

// // 4. convert array like to array
// const arrayLikeToArray = (arr: Set<string>) => [...arr];

// // 5. convert array to string
// const arrayToString = (array: string[]) => array.join(" ");

// const results = arrayToString(arrayLikeToArray(removeArrayDuplicates(stringToArray(makeUpperCase(words)))));
// console.log({ results });

// const pipe =
//   (...fns: Function[]) =>
//   (data: string) =>
//     fns.reduce((acc, fun) => fun(acc), data);

// const uniquePassPhrase = pipe(makeUpperCase, stringToArray, removeArrayDuplicates, arrayLikeToArray, arrayToString);

// const passPhrase = uniquePassPhrase(words);
// console.log({ passPhrase });
// console.log("results===passPhrase:", results === passPhrase);

//* Arity
// interface Post {
//   id: number;
//   txt: string;
// }

// const posts = [
//   { id: 1, txt: "First post for testing purposes." },
//   { id: 2, txt: "Second post for testing purposes." },
//   { id: 3, txt: "Third post for testing purposes." },
//   { id: 4, txt: "Fourth post for testing purposes." },
// ];

// const compose =
//   (...fns: Function[]) =>
//   (data: Post) =>
//     fns.reduceRight((acc, fun) => fun(acc), data);

// const cloneObj = (obj: Post[]) => {
//   return { ...obj };
// };

// const doEllipseHead = (len: number, txt: string) => txt.slice(0, len - 3) + "...";

// const doEllipseHead20 = doEllipseHead.bind(null, 20);

// const doHtmlHead = (cls: string, txt: string) => `<p class='${cls}'>${txt}</p>`;

// const doHtmlHeadPost = doHtmlHead.bind(null, "post");

// const extractTxt = (obj: Post) => obj.txt;

// const createPostHead = compose(doHtmlHeadPost, doEllipseHead20, extractTxt, cloneObj);

// const postHeadings = posts.map(createPostHead);
// console.log({ postHeadings });

//* Exercise
// const compose =
//   (...fns: Function[]) =>
//   (data: string) =>
//     fns.reduceRight((acc, fun) => fun(acc), data);

// const pipe =
//   (...fns: Function[]) =>
//   (data: string) =>
//     fns.reduce((acc, fun) => fun(acc), data);

// const str = "Make THIS string title Case.";

// const stringToArray = (str: string) => str.split(" ");
// const arrayToString = (array: string[]) => array.join(" ");
// const makeLowerCase = (str: string) => str.toLowerCase();
// const capFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
// const capEachWord = (array: string[]) => array.map(capFirstLetter);

// const makeTitleCaseCompose = compose(arrayToString, capEachWord, stringToArray, makeLowerCase);
// const makeTitleCasePipe = pipe(makeLowerCase, stringToArray, capEachWord, arrayToString);

// const resultCompose = makeTitleCaseCompose(str);
// const resultPipe = makeTitleCasePipe(str);

// console.log({ resultCompose, resultPipe }, "resultCompose === resultPipe:", resultCompose === resultPipe);

//@ Critical Asynchronous Patterns
// const asyncFunction = function (): Promise<string> {
//   return new Promise((resolve, _reject) => {
//     setTimeout(() => resolve("Promise Value"), 4000);
//   });
// };
// asyncFunction().then((res) => {
//   console.log({ res });
// });

//* Promise
// const asyncFunction = function (num: number) {
//   return new Promise((resolve, reject) => {
//     if (Number.isInteger(num)) {
//       setTimeout(() => resolve(`Number: ${num} is an integer`), num);
//     } else {
//       reject(`Number: ${num} is not an integer`);
//     }
//   });
// };

// // Golder Ratio
// asyncFunction((1 + Math.sqrt(5)) / 2).then(
//   (val) => console.log("Yes!! ->" + val),
//   (val) => console.log("Rejected! ->" + val)
// );

// asyncFunction(Math.PI).then(
//   (val) => console.log("Yes!! -> " + val),
//   (val) => console.log("Rejected! -> " + val)
// );

// asyncFunction(Math.E).then(
//   (val) => console.log("Yes!! -> " + val),
//   (val) => console.log("Rejected! -> " + val)
// );

// asyncFunction(2000).then(
//   (val) => console.log("Yes!! -> " + val),
//   (val) => console.log("Rejected! -> " + val)
// );

// console.log("This code is asynchronous!");

//* Fetch
// const filterPostsByUser = function (arr: any[], userid: number) {
//   return arr.filter((obj) => obj.userId === userid);
// };

// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((response) => response.json())
//   .then((data) => {
//     const user1posts = filterPostsByUser(data, 1);
//     console.log("user1posts.length:", user1posts.length);
//   })
//   .catch((error) => console.error("Error: " + error));

//* Exercise
interface Post {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
const isUser = (id: number, obj: Post) => obj.userId === id;
const isNotComplete = (obj: Post) => !obj.completed;
const getTitle = (obj: Post) => obj.title;

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const posts = data.filter(isUser.bind(null, 2)).filter(isNotComplete).map(getTitle);
    console.log("posts:", posts);
  })
  .catch((err) => console.error({ err }));
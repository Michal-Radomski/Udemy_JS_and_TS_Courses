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
// interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   completed: boolean;
// }
// const isUser = (id: number, obj: Post) => obj.userId === id;
// const isNotComplete = (obj: Post) => !obj.completed;
// const getTitle = (obj: Post) => obj.title;

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => {
//     const posts = data.filter(isUser.bind(null, 2)).filter(isNotComplete).map(getTitle);
//     console.log("posts:", posts);
//   })
//   .catch((err) => console.error({ err }));

//* Creating Promises
// function inefficientSquaring(num: number): Promise<number> {
//   return new Promise((resolve, reject) => {
//     if (!Number.isInteger(num)) {
//       reject("Not a valid Number.");
//     } else {
//       setTimeout(() => {
//         let result = 0;
//         for (let i = 1; i <= num; i++) {
//           for (let j = 1; j <= num; j++) {
//             result++;
//           }
//         }
//         resolve(result);
//       }, 0);
//     }
//   });
// }

// inefficientSquaring(66760).then(
//   (val) => console.log(val),
//   (err) => console.error(err)
// );

// // console.log(inefficientSquaring(201));
// // console.log(inefficientSquaring(695));
// // console.log(inefficientSquaring(3450));
// // console.log(inefficientSquaring(66760));

// console.log("Finally I can run.");

//* Using Static Methods for Multiple Asynchronous Tasks
// const promise1 = fetch("https://jsonplaceholder.typicode.com/todos").then((resp) => resp.json());
// const promise2 = fetch("https://jsonplaceholder.typicode.com/posts").then((resp) => resp.json());
// const promise3 = fetch("https://jsonplaceholder.typicode.com/comments").then((resp) => resp.json());
// const promise4 = fetch("https://jsonplaceholder.typicode.com/photos").then((resp) => resp.json());
// Promise.all([promise1, promise2, promise3, promise4]).then((arr) => console.log(arr));

// function timer(miliSec: number | string) {
//   return new Promise((resolve, reject) => {
//     if (!Number.isInteger(miliSec)) {
//       reject("You must enter a valid number.");
//     } else {
//       setTimeout(() => {
//         resolve(miliSec);
//       }, Number(miliSec));
//     }
//   });
// }

// Promise.all([timer(6000), timer(1000), timer("3000")])
//   .then((val) => console.log(1, val))
//   .catch((err) => console.warn(2, err));

// Promise.allSettled([timer(6000), timer(1000), timer("3000")])
//   .then((val) => console.log(3, val))
//   .catch((err) => console.warn(4, err));

// Promise.any([timer("6000"), timer("1000"), timer(3000)])
//   .then((val) => console.log(5, val))
//   .catch((err) => console.warn(6, err));

// Promise.race([timer(6000), timer(1000), timer("3000")])
//   .then((val) => console.log(7, val))
//   .catch((err) => console.warn(8, err));

//* The async await Pattern
// async function plainFunction1(): Promise<string> {
//   console.log(1, "start");
//   return "done1";
// }
// const plainFunction2 = async (): Promise<string> => {
//   await console.log(2, "start");
//   return "done2";
// };

// const result = plainFunction1();
// console.log(3, { result });
// plainFunction2().then((val) => console.log(4, val));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data[0]))
//   .catch((err) => console.error(err));

// const plainFunction = async function () {
//   console.log("start");
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const json = await response.json();
//   console.log(1, json[0]);

//   const completed = json.filter((obj: { completed: boolean }) => obj.completed);
//   console.log(2, completed[0]);
// };

// plainFunction();
// console.log("When will this display?");

//* Using async await
// interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   completed: boolean;
// }

// const filterPostsByUser = function (arr: Post[], userid: number) {
//   return arr.filter((obj) => obj.userId === userid);
// };

// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((response) => response.json())
//   .then((json) => {
//     const user1posts = filterPostsByUser(json, 1);
//     console.log(1, user1posts[0]);
//   })
//   .catch((err) => console.error({err}));

// (async function () {
//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts/");
//     const json = await resp.json();
//     // throw new Error("Problem");
//     const user1posts = filterPostsByUser(json, 1);
//     console.log(2, user1posts[0]);
//   } catch (err) {
//     console.error({ err });
//   } finally {
//     console.log("Done");
//   }
// })();

//* Exercise
// const fetchData = async (url: string): Promise<any> => {
//   try {
//     const resp = await fetch(url);
//     return resp.json();
//   } catch (err) {
//     console.warn({ err });
//   } finally {
//     console.log("Done");
//   }
// };

// fetchData("https://jsonplaceholder.typicode.com/comments").then(
//   (data) => console.log("data[0]:", data[0]),
//   (err) => console.log({ err })
// );

//* Static Methods with async await
// const urls = [
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/comments",
// ];

// const retrieveData = async function (urls: string[]): Promise<void> {
//   const [todos, posts, comments] = await Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())));
//   console.log("todos[0]:", todos[0]);
//   console.log("posts[0]:", posts[0]);
//   console.log("comments[0]:", comments[0]);
// };

// retrieveData(urls);

//@ Critical JavaScript Shortcuts
//* Destructuring Assignment Using Arrays
// const array1 = [10, 20, 30, 40, 50, 70, 100];
// const [a, b, c] = array1;
// console.log({ a, b, c });

// let d, e;
// [, , , d, e] = array1;
// console.log({ d, e });

// let [, , , , , , , f = 60] = array1;
// console.log({ f });

// const [g, h, ...others] = array1;
// console.log({ g, h, others });

// function fun1() {
//   return [1, 2, 3];
// }

// const [num1, num2, num3] = fun1();
// console.log({ num1, num2, num3 });

// let num4 = 100,
//   num5 = 200;

// [num4, num5] = [num5, num4];
// console.log({ num4, num5 });

//* Destructuring Assignment Using Objects
const user1 = {
  age: undefined,
  id: 5,
  firstName: "Steven",
  lastName: "Hancock",
  isVerified: true,
  address: {
    street: "West Main",
    number: 54,
    city: "Lehi",
  },
};

const { firstName, lastName } = user1;
console.log({ firstName, lastName });

let id;

({ id } = user1);
console.log({ id });

const { isVerified: verified } = user1;
console.log({ verified });

const { age = 40 } = user1;
console.log({ age });

const getFullName = function ({ firstName: fName, lastName: lName }: { firstName: string; lastName: string }) {
  return `${fName} ${lName}`;
};

const fullName = getFullName(user1);
console.log({ fullName });

const {
  address: { street, number, city },
} = user1;
console.log({ street, number, city });

const { id: userId, firstName: fName, ...obj } = user1;
console.log({ id, firstName, obj });

const users = [
  { id: 1, name: "Steve" },
  { id: 2, name: "Evy" },
  { id: 3, name: "Brooklyn" },
  { id: 4, name: "Eliza" },
];

const [, , { name: u3name }] = users;
console.log({ u3name });

for (let { id: uId, name: uName } of users) {
  console.log({ uId, uName });
}

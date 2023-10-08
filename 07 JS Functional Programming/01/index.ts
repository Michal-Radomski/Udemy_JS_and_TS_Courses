//* Side-effect!
// var MAINAPP: any = (function (nsp) {
//   var currentUser = 0,
//     users = [
//       { name: "James", score: 30, tries: 1 },
//       { name: "Mary", score: 110, tries: 4 },
//       { name: "Henry", score: 80, tries: 3 },
//     ];

//   var updateScore = function (newAmt: number) {
//     users[currentUser].score += newAmt;
//   };

//   var returnUsers = function () {
//     return users;
//   };

//   var updateTries = function () {
//     users[currentUser].tries++;
//   };

//   var updateUser = function (newUser: number) {
//     currentUser = newUser;
//   };

//   nsp.updateUser = updateUser;
//   nsp.updateTries = updateTries;
//   nsp.updateScore = updateScore;
//   nsp.returnUsers = returnUsers;
//   return nsp;
// })(MAINAPP || {});

// setTimeout(function () {
//   MAINAPP.updateUser(2);
// }, 300);
// setTimeout(function () {
//   MAINAPP.updateScore(20);
// }, 100);
// setTimeout(function () {
//   MAINAPP.updateTries();
// }, 200);
// console.log("MAINAPP.returnUsers():", MAINAPP.returnUsers());

//* Side-effect
// let cnt = 0;
// const increment = function () {
//   cnt++;
//   return cnt;
// };

//* Avoiding side-effect -> Pure Function
// const increment2 = function (num: number) {
//   return num + 1;
// };

//* Avoiding side-effect -> Pure Function
// const average = function (scores: number[]) {
//   let total = 0;
//   for (let i = 0; i < scores.length; i++) {
//     total += scores[i];
//   }
//   return total / scores.length;
// };
// console.log("average([90, 30, 40, 50, 60]):", average([90, 30, 40, 50, 60]));

//* Exercise
//* Side Effects
// var currentUser = 0,
//     users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

// var updateScore = function(newAmt: number) {
//     users[currentUser].score += newAmt;
// };

// var returnUsers = function() {
//     return users;
// };

// var updateTries = function() {
//     users[currentUser].tries++;
// };

// var updateUser = function(newUser: number) {
//     currentUser = newUser;
// };

//* Pure Function
// var users = [
//   { name: "James", score: 30, tries: 1 },
//   { name: "Mary", score: 110, tries: 4 },
//   { name: "Henry", score: 80, tries: 3 },
// ];

// // Mutable Functions
// var recordData = function (arr: any[], prop: string) {
//   users.forEach(function (val, i, a) {
//     if (val.name.toLowerCase() === arr[0].toLowerCase()) {
//       (a as any)[i][prop] = arr[1];
//     }
//   });
// };

// var getScore = function (arr: any[], name: string) {
//   let score;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name.toLowerCase() === name.toLowerCase()) {
//       score = arr[i].score;
//       break;
//     }
//   }
//   return [name, score];
// };

// var getTries = function (arr: any[], name: string) {
//   let tries;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name.toLowerCase() === name.toLowerCase()) {
//       tries = arr[i].tries;
//       break;
//     }
//   }
//   return [name, tries];
// };

// var updateScore = function (arr: any[], amt: number) {
//   let newAmt = arr[1] + amt;
//   return [arr[0], newAmt];
// };

// var updateTries = function (arr: any[]) {
//   let newTries = arr[1] + 1;
//   return [arr[0], newTries];
// };

// let newScore = updateScore(getScore(users, "Henry"), 30);
// recordData(newScore, "score");
// recordData(updateTries(getTries(users, "Henry")), "tries");

// console.log("users:", users);

//* Avoiding Shared State and Mutations
// const arr = [3, 4, 2, 5, 1, 6];
// Object.freeze(arr);

// const sortArray = function (arr1: number[]) {
//   return arr1.sort(); //* Error
// };

// const newNums = sortArray(arr);

// console.log({ arr });
// console.log({ newNums });

//* Cloning Objects
//* A shallow copy means the first level is copied, deeper levels are referenced.
// const arr = [3, 4, 2, 5, 1, 6];
// Object.freeze(arr);

// const cloneObj = function (obj: number[]) {
//   return JSON.parse(JSON.stringify(obj)); //* Deep Clone where object in object;
// };

// const newNums = cloneObj(arr).sort();
// console.log({ arr });
// console.log({ newNums });

// const obj = {
//   fName: "Steven",
//   lName: "Hancock",
//   score: 85,
//   completion: true,
//   questions: {
//     q1: { success: true, value: 1 },
//     q2: { success: false, value: 1 },
//   },
// };
// const obj2 = Object.assign({}, obj); //* Shallow copy - should be a deep clone!
// obj2.questions.q1.value = 111;
// console.log("obj.questions.q1:", obj.questions.q1);
// console.log("obj2.questions.q1:", obj2.questions.q1);

// const array = [{ a: 1 }, { b: 2 }];
// const obj3 = JSON.parse(JSON.stringify(array)); //* Deep copy
// obj3.push(111);
// obj3[0].a = 111;
// console.log({ array, obj3 });

//* Shallow Copy - spread operator
// const arr = [5, 6, 9, 10, 12, 3, 4];
// const newArray = [...arr];

// const obj = {
//   name: "Steven",
//   eyes: "blue",
// };
// const newObj = { ...obj };

//* StructuredClone - deep copy
// const mushrooms1 = {
//   amanita: ["muscaria", "virosa"],
// };
// const mushrooms2 = structuredClone(mushrooms1);

// mushrooms2.amanita.push("pantherina");
// mushrooms1.amanita.pop();

// console.log("mushrooms2.amanita:", mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
// console.log("mushrooms1.amanita:", mushrooms1.amanita); // ["muscaria"]

//* Exercises

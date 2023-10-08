//! Side-effect!
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

//! Side-effect
let cnt = 0;
const increment = function () {
  cnt++;
  return cnt;
};

//* Avoiding side-effect -> Pure Function
const increment2 = function (num: number) {
  return num + 1;
};

//* Avoiding side-effect -> Pure Function
const average = function (scores: number[]) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
};
console.log("average([90, 30, 40, 50, 60]):", average([90, 30, 40, 50, 60]));

//* Exercise

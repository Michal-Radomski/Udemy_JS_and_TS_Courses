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
//   //* V1
//   //  let score;
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i].name.toLowerCase() === name.toLowerCase()) {
//   //     score = arr[i].score;
//   //     break;
//   //   }
//   // }

//   //*V2
//   const targetObj = arr.find((obj) => obj.name.toLowerCase() === name.toLowerCase());
//   // return [name, score];
//   return [name, targetObj.score];
// };

// var getTries = function (arr: any[], name: string) {
//   //* V1
//   // let tries;
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i].name.toLowerCase() === name.toLowerCase()) {
//   //     tries = arr[i].tries;
//   //     break;
//   //   }
//   // }

//   // *V2
//   const targetObj = arr.find((obj) => obj.name.toLowerCase() === name.toLowerCase());
//   // return [name, tries];
//   return [name, targetObj.tries];
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
// console.log("users:", users);

// //Modifies Data
// const storeUser = function (arr: User[], user: User) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
//       arr[i] = user;
//       break;
//     }
//   }
// };

// //Pure Functions
// const cloneObj = function (obj: object) {
//   return JSON.parse(JSON.stringify(obj));
// };

// const getUser = function (arr: User[], name: string) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name.toLowerCase() === name.toLowerCase()) {
//       return arr[i];
//     }
//   }
//   return null;
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

// const usr = getUser(users, "Henry");
// const usr1 = updateScore(cloneObj(usr!), 30);
// const usr2 = updateTries(cloneObj(usr1!));
// storeUser(users, usr2!);
// console.log("users:", users);

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
// console.log("users:", users);

// const cloneObj = function (obj: object) {
//   return JSON.parse(JSON.stringify(obj));
// };

// const newScore = function (arr: User[], name: string, amt: number) {
//   arr.forEach(function (val) {
//     if (val.name.toLowerCase() === name.toLowerCase()) {
//       val.score = val.score + amt;
//     }
//   });
//   return arr;
// };

// const newTries = function (arr: User[], name: string) {
//   arr.forEach(function (val) {
//     if (val.name.toLowerCase() === name.toLowerCase()) {
//       val.tries++;
//     }
//   });
//   return arr;
// };

// const newArray1 = newScore(cloneObj(users), "Henry", 30);
// const newArray2 = newTries(cloneObj(newArray1), "Henry");

// console.log("users:", users);
// console.log("newArray1:", newArray1);
// console.log("newArray2:", newArray2);

//* Reduce, Map and Filter
// const arr = [1, 2, 3, 4, 5];

// const total = arr.reduce(function (accumulator, elem) {
//   return accumulator + elem;
// }, 0);

// const newArray = arr.map(function (val, _index, _array) {
//   // console.log(val);
//   // console.log(_index);
//   // console.log(_array);
//   return val ** 2;
// });

// const filterArray = arr.filter(function (val) {
//   return val < 3;
// });

// console.log({ total, newArray, filterArray });

//* Exercises
// const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];
// // Any scores that are below 10 needs to be multiplied by 10 and the new value included.
// const boostSingleScores = scores.map(function (val) {
//   return val < 10 ? val * 10 : val;
// });

// // Remove any scores that are over 100.
// const rmvOverScores = boostSingleScores.filter(function (val) {
//   return val <= 100;
// });

// // Remove any scores that are 0 or below.
// const rmvZeroScores = rmvOverScores.filter(function (val) {
//   return val > 0;
// });

// // Sum the scores.
// const scoresSum = rmvZeroScores.reduce(function (sum, val) {
//   return sum + val;
// }, 0);

// // Provide a count for the number of scores still remaining.
// const scoresCnt = rmvZeroScores.reduce(function (cnt, val) {
//   console.log({ val });
//   return cnt + 1;
// }, 0);

// console.log({ scores, scoresSum, scoresCnt });

interface User {
  name: string;
  score: number;
  tries: number;
}

const users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
] as User[];

//Modifies Data
const storeUser = function (arr: User[], user: User) {
  return arr.map(function (val) {
    if (val.name.toLowerCase() === user.name.toLowerCase()) {
      return user;
    } else {
      return val;
    }
  });
};

//Pure Functions
const cloneObj = function (obj: object) {
  return JSON.parse(JSON.stringify(obj));
};

const getUser = function (arr: User[], name: string) {
  return arr.reduce(function (obj: any, val: User) {
    // console.log({ obj });
    if (val.name.toLowerCase() === name.toLowerCase()) {
      return val;
    } else {
      return obj;
    }
  }, null);
};

const updateScore = function (user: User, newAmt: number) {
  if (user) {
    user.score += newAmt;
    return user;
  }
};

const updateTries = function (user: User) {
  if (user) {
    user.tries++;
    return user;
  }
};

const usr = getUser(users, "Henry");
const usr1 = updateScore(cloneObj(usr), 30);
const usr2 = updateTries(cloneObj(usr1!));
const newArray = storeUser(users, usr2!);
console.log("newArray:", newArray);

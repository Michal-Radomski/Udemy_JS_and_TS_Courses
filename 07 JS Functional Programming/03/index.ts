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

//* Exercise

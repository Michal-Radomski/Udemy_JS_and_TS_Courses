// setTimeout(() => {
//   console.log("Line 1, 0 timeout -> 3"); //* 3
// }, 0);
// console.log("line 2 -> 1"); //* 1
// setTimeout(() => console.log("Line 3, 100 timeout -> 4"), 100); //* 4
// for (let i = 0; i < 100001; i++) {
//   if (i === 100000) {
//     console.log("Done with loop -> 2"); //* 2
//   }
// }

//* Callback
// const printUpper = function (text: string) {
//   console.log(text.toUpperCase());
// };

// const printNumber = function (number: number) {
//   console.log(number);
// };

// function run(callback: Function, input: string | number) {
//   callback(input);
// }

// run(printUpper, "Test");
// run(printNumber, 5);

// run((text: string) => {
//   console.log(text.toUpperCase());
// }, `Hello, World`);

//* Promise
// const myFirstPromise = new Promise((resolve, _reject) => {
//   console.log("Hey, I'm running!");
//   console.log("Hey, I'm also running!");
// //* ajax, axios...
//   const lang = ["JS", "Java", "Go"];
//   // reject("I did not finish"); //Something went wrong!
//   resolve(lang); // Im DONE!
// });
// console.log(myFirstPromise);

// myFirstPromise.then((promiseData) => {
//   console.log(promiseData);
// });
// myFirstPromise.catch((promiseError) => {
//   console.log(promiseError);
// });
// console.log("=====================");
// console.log("I'm the last line in the program!");
// console.log("=====================");

function one() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("2 seconds has passed");
    }, 2000);
  });
}

function two() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("1 second has passed");
    }, 1000);
  });
}

const promiseOne = one();
const promiseTwo = two();
promiseOne.then((msgFromPromise) => {
  console.log("=====1====");
  console.log(1, { msgFromPromise });
  console.log(2, { promiseOne });
});
promiseTwo.then((msgFromPromise) => {
  console.log("=====2====");
  console.log(3, { msgFromPromise });
  console.log(4, { promiseTwo });
});

console.log(5, { promiseOne });
console.log(6, { promiseTwo });

const promiseArray = [promiseOne, promiseTwo];
console.log(7, { promiseArray });

Promise.all(promiseArray).then((data) => {
  console.log("All the promises are done");
  console.log(8, { data });
});

Promise.race(promiseArray).then((data) => {
  console.log("One of the promises is done. I don't care which!");
  console.log(9, { data });
});

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

// function one() {
//   return new Promise((resolve, _reject) => {
//     setTimeout(() => {
//       resolve("2 seconds has passed");
//     }, 2000);
//   });
// }

// function two() {
//   return new Promise((resolve, _reject) => {
//     setTimeout(() => {
//       resolve("1 second has passed");
//     }, 1000);
//   });
// }

// const promiseOne = one();
// const promiseTwo = two();
// promiseOne.then((msgFromPromise) => {
//   console.log("=====1====");
//   console.log(1, { msgFromPromise });
//   console.log(2, { promiseOne });
// });
// promiseTwo.then((msgFromPromise) => {
//   console.log("=====2====");
//   console.log(3, { msgFromPromise });
//   console.log(4, { promiseTwo });
// });

// console.log(5, { promiseOne });
// console.log(6, { promiseTwo });

// const promiseArray = [promiseOne, promiseTwo];
// console.log(7, { promiseArray });

// Promise.all(promiseArray).then((data) => {
//   console.log("All the promises are done");
//   console.log(8, { data });
// });

// Promise.race(promiseArray).then((data) => {
//   console.log("One of the promises is done. I don't care which!");
//   console.log(9, { data });
// });

// import { apiKey } from "./keys";

// import { JSDOM } from "jsdom";
// const { window } = new JSDOM("");
// const $ = require("jquery")(window);

// const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
// const getMovieData = (movieTitle: string): Promise<Object[]> => {
//   return new Promise((resolve, reject) => {
//     fetch(apiUrl + movieTitle)
//       .then((res) => res.json())
//       .then(({ results }) => {
//         // console.log({ results });
//         resolve(results);
//       })
//       .catch((err) => {
//         console.log({ err });
//         reject(err);
//       });
//   });
// };

// // getMovieData("gladiator");
// (async function displayData() {
//   const data = await getMovieData("die hard");
//   console.log("data:", data[0]);
// })();
// (function displayData() {
//   const data = getMovieData("star wars");
//   console.log("typeof data:", typeof data);
//   data.then((results) => {
//     console.log("results:", results[0]);
//   });
// })();

//* Chaining promises
// const peopleUrl = `https://api.themoviedb.org/3/person`;
// const castUrl = `https://api.themoviedb.org/3/movie`;

// function getMovieData(movieTitle: string): Promise<Object[]> {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: apiUrl + movieTitle,
//       method: "get",
//       success: (movieData: any) => {
//         // console.log(movieData)
//         resolve(movieData.results);
//       },
//       error: (errorMsg: Error) => {
//         reject(errorMsg);
//       },
//     });
//   });
// }

// function getCast(movie: { id: string }): Promise<Object[]> {
//   // console.log(movie)
//   return new Promise((resolve, _reject) => {
//     $.ajax({
//       url: `${castUrl}/${movie.id}/credits?api_key=${apiKey}`,
//       method: "get",
//       success: (castData: any) => {
//         resolve(castData.cast);
//       },
//     });
//   });
// }

// function getPerson(person: { id: string }): Promise<Object[]> {
//   return new Promise((resolve, _reject) => {
//     $.ajax({
//       url: `${peopleUrl}/${person.id}?api_key=${apiKey}`,
//       success: (personData: any) => {
//         resolve(personData);
//       },
//     });
//   });
// }

// async function displayMovie(movieTitle: string, index: number) {
//   const movieData = await getMovieData(movieTitle);
//   const castData = await getCast((movieData as any[])[0]);
//   const personData = await getPerson((castData as any[])[0]);
//   console.log(index, { personData });
// }

// const set = new Set(["die hard", "gladiator"]);
// const movieElems = Array.from(set);
// movieElems.forEach((movie, index) => {
//   displayMovie(movie, index);
// });

// import fs from "fs";

// interface FileObj {
//   fileName: string;
//   data: string;
// }

// fs.readdir("./data", (err, files) => {
//   if (err) {
//     console.log({ err });
//   }

//   const filePromises = files.map((fileName): Promise<FileObj> => {
//     return new Promise((resolve, reject) => {
//       // console.log(1, { fileName });
//       fs.readFile(`./data/${fileName}`, (err, data: Buffer) => {
//         // console.log({data});
//         // console.log(2, { fileName });
//         if (err) {
//           console.log({ err });
//           reject(err);
//         }
//         resolve({
//           fileName,
//           data: String(data),
//         });
//       });
//     });
//   });

//   // Promise.all takes 1 arg: an array of promises!
//   Promise.all(filePromises).then((fileContentArray: FileObj[]) => {
//     // console.log(3, { fileContentArray });
//     const arrayCount = fileContentArray.map((fileObj: FileObj) => {
//       const matches = fileObj.data.match(/gotYa/g);
//       // console.log(4, { matches });
//       if (matches) {
//         return {
//           name: fileObj.fileName,
//           num: matches.length,
//           [fileObj.fileName]: matches.length,
//         };
//       } else {
//         return {
//           name: fileObj.fileName,
//           num: 0,
//           [fileObj.fileName]: 0,
//         };
//       }
//     });
//     // console.log(5, { arrayCount });
//     const orderedArray = arrayCount.sort((a, b) => {
//       return a.num - b.num;
//     });
//     console.log(6, { orderedArray });
//   });

//   // Promise.race takes 1 arg: an array of promises!
//   Promise.race(filePromises).then((_file) => {
//     console.log("The race is over. The winner is...");
//     // console.log(7, { _file });
//   });
// });

//* ES7
// {
//   const x = 2 ** 5;
//   console.log({ x });
//   console.log("2 ** (3 ** 2):", 2 ** (3 ** 2));
//   console.log("(2 ** 3) ** 2:", (2 ** 3) ** 2);
//   console.log("2 ** 3 ** 2:", 2 ** (3 ** 2));
//   console.log("10 ** -1:", 10 ** -1);
//   console.log("(-10) ** 2:", (-10) ** 2);

//   const array1 = [1, 2, 3];
//   console.log("array1.includes(2):", array1.includes(2)); // Expected output: true

//   const someJSON = {
//     name: "Wayne Rooney",
//     position: "Forward",
//     club: "Manchester United",
//   };
//   const { name, position, club } = someJSON;
//   console.log({ name });
//   console.log({ position });

//   // You can accept the data as an array using rest...
//   // and because it's an array, you can Destructure it back into single vars
//   // function fn(...data){
//   function fn(...[n, p, c]: string[]) {
//     console.log({ n });
//     console.log({ p });
//     console.log({ c });
//   }
//   fn(name, position, club);
// }

//* ES8
//* Object.values() and Object.entries()
// const footballer = {
//   name: "Wayne Rooney",
//   position: "Forward",
//   club: "ManU",
//   scoringAverage: 1.2,
// };

// const footballerEntries = Object.entries(footballer);
// console.log({ footballerEntries });
// console.log("footballerEntries[0]:", footballerEntries[0]);
// console.log("footballerEntries[0][0]:", footballerEntries[0][0]);

// const footballerValues = Object.values(footballer);
// console.log({ footballerValues });

// const footballerKeys = Object.keys(footballer);
// console.log({ footballerKeys });

// function one() {
//   return new Promise((resolve, _reject) => {
//     setTimeout(() => {
//       console.log("Done!");
//       resolve("2 seconds have passed!");
//     }, 2000);
//   });
// }

// async function two() {
//   console.log("Calling function one");
//   const oneResponse = await one();
//   console.log({ oneResponse });
// }

// // console.log("Calling function one");
// // one().then((promiseData) => {
// //   console.log({ promiseData });
// // });
// two();
// console.log("Last line of the code");

// import mysql, { MysqlError } from "mysql";
// // const mysql = require("mysql");
// // import { MysqlError } from "mysql";

// import { email, mySQLconfig, name } from "./keys";
// const connection = mysql.createConnection(mySQLconfig);
// // console.log({ connection });
// connection.connect(function (err: MysqlError) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// const checkLoginQuery = `SELECT * from users WHERE name = "${name}" AND email = "${email}"`;

// // connection.query(checkLoginQuery, (error, results) => {
// //   if (error) {
// //     console.error({ error });
// //     throw error;
// //   }
// //   if (results.length === 1) {
// //     console.log({ results });
// //   }
// // });

// function checkLogin() {
//   return new Promise((resolve, reject) => {
//     connection.query(checkLoginQuery, (error: MysqlError, results: any[]) => {
//       if (error) {
//         console.error({ error });
//         reject(error);
//       } else if (results.length == 1) {
//         console.log({ results });
//         resolve(results[0].id);
//       } else {
//         resolve(false);
//       }
//     });
//   });
// }

// (async function displayData() {
//   console.log("Displaying data...");
//   const userId = await checkLogin();
//   console.log(1, { userId });
//   if (userId) {
//     console.log(2, { userId });
//     console.log("User Displayed");
//   }
// })();

import { apiKey } from "./keys";

import { JSDOM } from "jsdom";
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const peopleUrl = `https://api.themoviedb.org/3/person`;
const castUrl = `https://api.themoviedb.org/3/movie`;

function getMovieData(movieTitle: string): Promise<Object[]> {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: apiUrl + movieTitle,
      method: "get",
      success: (movieData: any) => {
        // console.log(movieData)
        resolve(movieData.results);
      },
      error: (errorMsg: Error) => {
        reject(errorMsg);
      },
    });
  });
}

function getCast(movie: { id: string }): Promise<Object[]> {
  // console.log(movie)
  return new Promise((resolve, _reject) => {
    $.ajax({
      url: `${castUrl}/${movie.id}/credits?api_key=${apiKey}`,
      method: "get",
      success: (castData: any) => {
        resolve(castData.cast);
      },
    });
  });
}

function getPerson(person: { id: string }): Promise<Object[]> {
  return new Promise((resolve, _reject) => {
    $.ajax({
      url: `${peopleUrl}/${person.id}?api_key=${apiKey}`,
      success: (personData: any) => {
        resolve(personData);
      },
    });
  });
}

async function displayMovie(movieTitle: string, index: number) {
  const movieData = await getMovieData(movieTitle);
  const castData = await getCast((movieData as any[])[0]);
  const personData = await getPerson((castData as any[])[0]);
  console.log(index, { personData });
}

const set = new Set(["die hard", "gladiator"]);
const movieElems = Array.from(set);
movieElems.forEach((movie, index) => {
  displayMovie(movie, index);
});

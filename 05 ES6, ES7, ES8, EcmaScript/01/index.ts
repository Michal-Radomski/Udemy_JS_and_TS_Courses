export {};
//* Additional Constructors
//* File constructor
// const file = new File(["foo"], "foo.txt", {
//   type: "text/plain",
// });
// console.log({ file });

//* FileReader constructor
// function printFile(file: File) {
//   const reader = new FileReader();
//   console.log({ reader });
//   reader.onload = (evt) => {
//     console.log(evt.target?.result);
//   };
//   reader.readAsText(file);
// }
// printFile(file);

//* Blob constructor
// const array = ['<q id="a"><span id="b">hey!</span></q>']; // an array consisting of a single string
// const blob = new Blob(array, { type: "text/html" }); // the blob
// console.log({ blob });

//* ArrayBuffer constructor
// const buffer = new ArrayBuffer(8);
// console.log("buffer.byteLength:", buffer.byteLength); // Expected output: 8
// console.log({ buffer });

("use script");
// var i = 2;
// console.log({ i });

// //* Var
// var i;
// console.log(i);
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// //* Let
// let j = 0;
// for (j = 0; j < 10; j++) {
//   console.log(j);
// }
// console.log(j);

// //* Const
// const k = 2;
// console.log({ k });
// // k=3 //* Error

// const myArray = [1, 2, 3, 4] as number[];
// console.log({ myArray });
// myArray.push(5);
// console.log({ myArray });

// const obj = {
//   name: "Rob",
//   career: "Teacher",
// } as { name: string; career: string; gender?: string };

// obj.gender = "male";
// console.log({ obj });

// Old way:
// const stuffFromAPI = {
//   name: "Rob",
//   career: "Teacher",
//   language: "JavaScript",
// };

// const name = stuffFromAPI.name;
// const career = stuffFromAPI.career;
// const language = stuffFromAPI.language;

// const newThingToPassToAPI = {
//   name: name,
//   career: career,
//   language: language,
// };
// console.log({ newThingToPassToAPI });

// New way
// const coolNewWay = {
//   name,
//   career,
//   language,
// };
// console.log({ coolNewWay });

// Multiline
// const string = "text" + "text2";
// const string = "text \n text2";
// console.log({ string });
// const string = `text1
// text2`;
// console.log({ string });

//* Tagged Templates
// const Harry = "Lorem ipsum1";
// const Lott = "Lorem ipsum2";
// const Orwell = "Lorem ipsum3";

// const lines = [Harry, Lott, Orwell];

// // function buildHtml(tags: TemplateStringsArray, lines: string[]) {
// //   console.log({ tags });
// //   console.log({ lines });
// // }
// // buildHtml`<li>${lines}</li>`;
// function buildHtml2(tags: TemplateStringsArray, lines: string[]) {
//   const newHTML = lines.map((line) => {
//     return `${tags[0]}${line}${tags[1]}`;
//   });
//   return newHTML;
// }
// const result = buildHtml2`<li>${lines}</li>`;
// console.log({ result });

// function test() {
//   return "Hello from inside";
// }
// const templateLiteral = `Rob Jim Bill ${test()}`;
// console.log({ templateLiteral });

//* Function: default and rest operator
// function getArea(x: number, y: number, s: string = "r") {
//   if (s === "r") {
//     return x * y;
//   } else if (s === "t") {
//     return (x * y) / 2;
//   }
// }
// // const getArea = (x: number, y: number, s: string = "r") => {
// //   if (s === "r") {
// //     return x * y;
// //   } else if (s === "t") {
// //     return (x * y) / 2;
// //   }
// // };

// const rectArea = getArea(2, 5, "r");
// console.log({ rectArea });
// const rectArea2 = getArea(2, 5);
// console.log({ rectArea2 });
// const triangleArea = getArea(2, 5, "t");
// console.log({ triangleArea });

// function findHighest(upperLimit: number, ..._rest: number[]) {
//   // console.log({ arguments });
//   console.log({ _rest });
//   let max = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] < upperLimit && arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }
// function findHighest(upperLimit: number, ...numList: number[]) {
//   // console.log({ arguments });
//   // console.log({ numList });
//   let max = 0;
//   numList.filter((num: number) => {
//     if (num < upperLimit && num > max) {
//       max = num;
//     }
//   });
//   return max;
// }

// const highest = findHighest(80, 90, 112, 321, 12);
// console.log({ highest });

//* Spread operator
//* Rest operator (I don't know how many parameters)
// function sumRest(...numberList: number[]): number {
//   return numberList.reduce((total: number, num: number) => {
//     return total + num;
//   }, 0);
// }
// const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sumRest(...numberList));
// console.log(sumRest(1, 2, 3, 4, 5));

// //* Spread syntax (I have separate params as array, unpack it)
// function sumSpread(x: number, y: number, z: number) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3] as const;
// // The ugly way
// console.log(sumSpread(numbers[0], numbers[1], numbers[2]));
// // The old way
// console.log(sumSpread.apply(null, numbers as [number, number, number]));
// // The spread operator way
// console.log(sumSpread(...numbers));

// const state = { a: 1, b: 2 };
// const action = { type: "done", payload: 30 };
// const newState = { ...state, newProperty: action.payload };
// console.log({ newState });

// const numbersSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(Math.min(...numbersSet));

// const arr1 = ["a", "b", "c", "d", "e"];
// const arr2 = [1, 2, 3, ...arr1, 4, 5, 6];
// console.log({ arr2 });

//* Arrow function
// console.log("this:", this);
// const that = function (this: any) {
//   console.log(this);
// };
// that();
// const that2 = () => {
//   console.log(this);
// };
// that2();

//* Object Literals and Destructuring
// const obj1 = new Object({ x: 1 });
// console.log({ obj1 });

// const obj2 = Object.create(null);
// console.log({ obj2 });

// const obj3 = {
//   x: 1,
//   aMethod: function () {
//     console.log("test");
//   },
// };
// console.log({ obj3 });

const someJSON = {
  vote_count: 541,
  id: 460793,
  video: false,
  vote_average: 5.9,
  title: "Olaf's Frozen Adventure",
  popularity: 96.893887,
  poster_path: "/As8WTtxXs9e3cBit3ztTf7zoRmm.jpg",
  original_language: "en",
  original_title: "Olaf's Frozen Adventure",
  genre_ids: [12, 16, 35, 10751, 14, 10402],
  backdrop_path: "/9K4QqQZg4TVXcxBGDiVY4Aey3Rn.jpg",
  adult: false,
  overview: "Olaf is on a mission to harness the best holiday traditions for Anna, Elsa, and Kristoff.",
  release_date: "2017-10-27",
  test: { test_1: { test_2: "test_2", test_3: "test_3", test_4: "test_4" } },
};

// const title = someJSON.title;
// const overview = someJSON.overview;
// const release_date = someJSON.release_date

const {
  title: title,
  overview,
  release_date,
  test: {
    test_1: { test_2 },
  },
  original_language: lang,
} = someJSON;
console.log({ title, overview, release_date, test_2, lang });

function processData({ title, release_date, overview }: { title: string; release_date: string; overview: string }) {
  console.log(`${title} is an awesome flick. It came out on ${release_date}. ${overview}`);
}
processData(someJSON);

// Go into nested objects
const {
  genre_ids: { [0]: firstGenre, [1]: secondGenre },
} = someJSON;
console.log({ firstGenre });
console.log({ secondGenre });

const [first, second, third] = someJSON.genre_ids;
console.log({ first, second, third });
const [, , , fourth, fifth] = someJSON.genre_ids;
console.log({ fourth, fifth });
const [, two, ...others] = someJSON.genre_ids;
console.log({ two, others });

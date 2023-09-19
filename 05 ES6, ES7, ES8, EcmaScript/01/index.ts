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
function findHighest(upperLimit: number, ...numList: number[]) {
  // console.log({ arguments });
  // console.log({ numList });
  let max = 0;
  numList.filter((num: number) => {
    if (num < upperLimit && num > max) {
      max = num;
    }
  });
  return max;
}

const highest = findHighest(80, 90, 112, 321, 12);
console.log({ highest });

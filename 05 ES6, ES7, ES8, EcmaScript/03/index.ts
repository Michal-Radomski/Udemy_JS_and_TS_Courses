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
const printUpper = function (text: string) {
  console.log(text.toUpperCase());
};

const printNumber = function (number: number) {
  console.log(number);
};

function run(callback: Function, input: string | number) {
  callback(input);
}

run(printUpper, "Test");
run(printNumber, 5);

run((text: string) => {
  console.log(text.toUpperCase());
}, `Hello, World`);

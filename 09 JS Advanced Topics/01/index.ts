//* Functions are Objects!
// const report1 = function (val: string) {
//   console.log({ val });
// };

// const report2 = new Function("val", "console.log({val});");

// report1("expression");
// report2("constructor");

// // @ts-ignore
// report1.userName = "Steven";
// // @ts-ignore
// console.log("report1.userName:", report1.userName);

// const report3 = report1;
// console.log({ report3 });

// console.dir("report1:", report1);

//*  First Class Functions
const sum = function (x: number, y: number) {
  return x + y;
};

const run = function (fn: Function, a: number, b: number) {
  console.log("fn(a, b):", fn(a, b));
};

run(sum, 10, 5);

run(
  function (x: number, y: number) {
    return x * y;
  },
  10,
  5
);

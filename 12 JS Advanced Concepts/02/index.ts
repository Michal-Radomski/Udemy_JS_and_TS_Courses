//@ Async JS
//* ES8 (ES2017) - Async/ Await
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(1, "data:", data));

// (async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(2, "data:", data);
// })();

//* ES9 (ES2018)
// const animals = { tiger: 23, lion: 5, monkey: 2 };
// const { tiger, ...rest } = animals;
// console.log({ tiger, rest });

//* Job Queue: Job queue has a higher priority than callback queue!
//* Callback Queue - Task Queue
// setTimeout(() => {
//   console.log("1", "Is the loneliest number");
// }, 0);
// setTimeout(() => {
//   console.log("2", "Can be as bad as one");
// }, 10);

//* Job Queue - Microtask Queue
// Promise.resolve("Hi").then((data) => console.log("3", "data:", data));

//* 3
// console.log("4", "Is a crowd");

//* Parallel, Sequence and Race
const promisify = (item: string, delay: number): Promise<string> =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = (): Promise<string> => promisify("a", 100);
const b = (): Promise<string> => promisify("b", 5000);
const c = (): Promise<string> => promisify("c", 3000);

async function parallel(): Promise<string> {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `Parallel is done: ${output1} ${output2} ${output3}`;
}

async function race(): Promise<string> {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `Race is done: ${output1}`;
}

async function sequence(): Promise<string> {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `Sequence is done ${output1} ${output2} ${output3}`;
}

sequence()
  .then(console.log)
  .catch((err) => console.log({ err }));
parallel()
  .then(console.log)
  .catch((err) => console.log({ err }));
race()
  .then(console.log)
  .catch((err) => console.log({ err }));

//* ES2020: Promise.allSettled()
const promise1 = Promise.resolve(3);
const promise2 = new Promise((_resolve, reject) => setTimeout(reject, 100, "foo"));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));

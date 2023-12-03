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
// Callback Queue - Task Queue
setTimeout(() => {
  console.log("1", "Is the loneliest number");
}, 0);
setTimeout(() => {
  console.log("2", "Can be as bad as one");
}, 10);

// Job Queue - Microtask Queue
Promise.resolve("Hi").then((data) => console.log("3", "data:", data));

// 3
console.log("4", "Is a crowd");

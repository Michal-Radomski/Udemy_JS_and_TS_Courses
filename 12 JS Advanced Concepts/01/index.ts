//@ JS Foundation

//* Don't use 'with'
// with ([1, 2, 3]) {
//   console.log(toString()); // 1,2,3
// }

//* Stack Overflow
let i = 0;
function recurse() {
  i++;
  recurse();
}

try {
  recurse();
} catch (err) {
  console.log("maxStackSize = " + i + "\nerror: " + err);
}

console.log("globalThis:", globalThis); // global API

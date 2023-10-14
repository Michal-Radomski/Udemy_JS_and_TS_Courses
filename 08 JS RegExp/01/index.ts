//* RegExp
const txt = "Programming courses always starts with a hello world example.";

const regex1: RegExp = new RegExp("hello");
const regex2: RegExp = /worlds/; //* there is world not words!

console.log("regex1.test(txt):", regex1.test(txt));
console.log("regex2.test(txt):", regex2.test(txt));

console.log("regex1.exec(txt):", regex1.exec(txt));
console.log("regex2.exec(txt):", regex2.exec(txt));

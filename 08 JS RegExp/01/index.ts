//* RegExp
// const txt = "Programming courses always starts with a hello world example.";

// const regex1: RegExp = new RegExp("hello");
// const regex2: RegExp = /worlds/; //* there is world not words!

// console.log("regex1.test(txt):", regex1.test(txt));
// console.log("regex2.test(txt):", regex2.test(txt));

// console.log("regex1.exec(txt):", regex1.exec(txt));
// console.log("regex2.exec(txt):", regex2.exec(txt));

// console.log("txt.match(regex1):", txt.match(regex1));
// console.log("txt.match(regex2):", txt.match(regex2));

// console.log("txt.search(regex1):", txt.search(regex1));
// console.log("txt.search(regex2):", txt.search(regex2));

// console.log("txt.replace(regex1,'H1'):", txt.replace(regex1, "Hi!!!"));
// console.log("txt.replace(regex2,'H1'):", txt.replace(regex2, "Hi!!!"));

// console.log("txt.split(regex1):", txt.split(regex1));
// console.log("txt.split(regex2):", txt.split(regex2));

const txt = "Programming courses always starts with a hello world example.";
const regex1: RegExp = /\s/; //* Space
console.log("txt.split(regex1):", txt.split(regex1));
console.log("regex1.toString():", regex1.toString());

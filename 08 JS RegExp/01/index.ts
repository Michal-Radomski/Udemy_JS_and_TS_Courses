//* RegExp
// const txt = "Programming courses always starts with a hello world example.";

// const regex1: RegExp = new RegExp("hello");
// const regex2: RegExp = /worlds/; //* There is world NOT words!

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

// const txt = "Programming courses alwayS starts with a hello world example.";
// const regex1: RegExp = /\s/; //* Space
// console.log("txt.split(regex1):", txt.split(regex1));
// console.log("regex1.toString():", regex1.toString());

// const regex1: RegExp = /s\s/gis; //* letter s + space, g - globally, i - case insensitive, s - dotAll flag (dot -> any character)
// console.log("txt.match(regex1):", txt.match(regex1));

//* RegexPal: https://www.regexpal.com/

//* Characters
// "." - any character
// "/" - escape metacharacter;

//* Exercise
// const phoneNums = [
//   "801-766-9754",
//   "801-545-5454",
//   "435-666-1212",
//   "801-796-8010",
//   "435-555-9801",
//   "801-009-0909",
//   "435-222-8013",
//   "801-777-6655",
// ];

// const regEx = /801-/;
// const newArray = phoneNums.filter((elem) => regEx.test(elem));
// console.log("newArray:", newArray);

//* Character Sets
//* [abc] 	any of a, b, or c
//* [^abc] 	not a, b, or c
//* [a-g] 	character between a & g
//* [1-4] 	character between 1 and 4
//* /[1-6a-zA-Z]/g -> 1-6 + a-z + A-Z
const re = /gr[ae]y/g; //* // grey or gray -> a or e
const str = "I like grey and gray.";
const matches = [...str.matchAll(re)];
console.log({ matches });

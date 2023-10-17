//* RegExp.prototype.test() -> true or false
//* String.prototype.match() ->  found item array or null
//* RegExp.prototype.exec() -> array or null
//* String.prototype.search() -> first index of found item or -1
//* String.prototype.matchAll() -> An iterable iterator object (which is not restartable) of matches

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

// const regex2: RegExp = /s\s/gis; //* letter s + space, g - globally, i - case insensitive, s - dotAll flag (dot -> any character)
// console.log("txt.match(regex2):", txt.match(regex2));

//* Regex tester: https://www.regexpal.com/

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
// const re = /gr[ae]y/g; //* // grey or gray -> a or e
// const str = "I like grey and gray.";
// const matches = [...str.matchAll(re)];
// console.log({ matches });

// const str = "Exception 0xF89F";
// const re = /[^a-z]/g;
// console.log("str.match(re):", str.match(re));

//* \d = [0-9]
//* \D = [^0-9]
//* \w = [A-Za-z0-9_]
//* \W = [^A-Za-z0-9_]
//* \s = single space
//* \S = a single character other than white space

// const str = "A string that contains numbers (12345)";

// const regExp = new RegExp("\\w", "g");
// const regExp2 = new RegExp("\\d", "g");
// const regExp3 = new RegExp("\\W", "g");
// const regExp4 = new RegExp("\\D", "g");
// console.log("str.match(regExp):", str.match(regExp));
// console.log("str.match(regExp2):", str.match(regExp2));
// console.log("str.match(regExp3):", str.match(regExp3));
// console.log("str.match(regExp4):", str.match(regExp4));

//* Exercise
// const phoneNums = [
//   "801-766-9754",
//   "801-545-5454",
//   "435-666-1212",
//   "801-796-8010",
//   "435-555-9801",
//   "801-009-0909",
//   "435-222-8013",
//   "801-777-66553",
//   "801-777-665-",
//   "801-77A-6655",
//   "801-778-665",
// ];

//* Format: nnn-nnn-nnnn
// const regEx = /801-\d\d\d-\d\d\d\d/, //* Bad validation: "801-777-66553" !
//   newArray = [];
// // const newArray = phoneNums.filter(elem => regEx.test(elem));

// for (let i = 0; i < phoneNums.length; i++) {
//   if (regEx.test(phoneNums[i])) {
//     newArray.push(phoneNums[i]);
//   }
// }
// console.log("newArray:", newArray);

//* Repetition

//* x* -> matches the preceding item "x" 0 or more times
//* x+ -> matches the preceding item "x" 1 or more times
//* x? -> matches the preceding item "x" 0 or 1 times
//* x{n} -> where "n" is a positive integer, matches exactly "n" occurrences of the preceding item "x"

// const str = "She sells seashells on a seashore. The shells she sells are seashells, I'm sure.";
// //* regExp = regExp2
// const regExp = new RegExp("[A-Z]+", "g");
// const regExp2 = /[A-Z]+/g;
// console.log("regExp.test(str):", regExp.test(str)); //* true
// console.log("str.match(regExp2):", str.match(regExp2)); //* [ 'S', 'T', 'I' ]
// const regExp3 = /[A-Z]*/g;
// const regExp4 = /[A-Z]?/g;
// console.log("str.match(regExp3):", str.match(regExp3));
// console.log("str.match(regExp4):", str.match(regExp4));

const re = /apples?/g;
const str = "He picked apples of the apple tree";
console.log("str.match(re):", str.match(re)); //* [ 'apples', 'apple' ]

const re2 = /warning!*/g;
const str2 = "warning!, warning!!, warning!!!";
console.log("str2.match(re2):", str2.match(re2)); //* [ 'warning!', 'warning!!', 'warning!!!' ]

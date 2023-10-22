//* Applying Regular Expressions

//* Email address
const email = "something@domain.com";
// const re = /.+@.+\..+/g;
const re = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g;

console.log("re.test(email):", re.test(email)); //* true

//* Twitter Handle
const str = "@js_com";
const re2 = /^@?(\w+)$/g;
console.log("re2.test(str):", re2.test(str)); //* true

//* Testing Password
const password = "NsRN3/>zvd";
const password2 = "qawsed123QWE!";

const checkPass = (password: string): boolean => {
  const theLength = /^.{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    numbers = /[0-9]/,
    special = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

  if (
    theLength.test(password) &&
    upper.test(password) &&
    lower.test(password) &&
    numbers.test(password) &&
    special.test(password)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log("checkPass(password):", checkPass(password)); //* true
console.log("checkPass(password2):", checkPass(password2)); //* true

//* Using Replace with RegExp
const names = ["Smith, James", "Peterson, Alyssa", "Johnson, Lynette", "Lopez, Tony"];

const newNames = names.map(function (name: string) {
  return name.replace(/(\w+), (\w+)/, "$2 $1");
});
console.log("newNames:", newNames); //* [ 'James Smith', 'Alyssa Peterson', 'Lynette Johnson', 'Tony Lopez' ]

//* Matching a Word Next to Another Word
// const str2 = "Lets put several different words more text together and see what we can match.";
// const re4 = /\b(?:words\W+(?:\w+\W+){0,5}together)/g;
// console.log("re4.test(str2):", re4.test(str2));

//* Validating Dates: dd/mm/yyyy or d/m/yy
const date = "24/06/1966";
const dateRe = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/([0-9]{2})?[0-9]{2}$/g;
console.log("dateRe.test(date):", dateRe.test(date));

const dateRe2 = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/20[0-9]{2}$/g;
const date2 = "24/06/2006";
console.log("dateRe2.test(date2):", dateRe2.test(date2));

//* Validating IP Numbers
const IP_num1 = "25.013.55.255";
const IP_num2 = "192.32.1.1";
const IP_num3 = "832.26.123.5";
const IP_num4 = "0.1.12.1";
const IP_num5 = "255.255.255.1";

// const regExpIP = /^(([0-9]|[1-9][0-9]|1[1-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[1-9]{2}|2[0-4][0-9]|25[0-5])$/;
const regExpIP =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const arr_IP = [IP_num1, IP_num2, IP_num3, IP_num4, IP_num5];
const testIP = arr_IP.map((IP) => regExpIP.test(IP));
console.log("testIP:", testIP);

//* Capturing Matched Text
// const phrase = "First number: 32, and a second number 100. Here is the last number 15.";
// let total = 0;

// const result = phrase.match(/\d+/g);

// (function printResult() {
//   console.log("result:", result);
//   if (result) {
//     const num1 = result[0],
//       num2 = result[1],
//       num3 = result[2];
//     console.log({ num1, num2, num3 });
//     total = result.reduce((sum, val) => sum + parseInt(val, 10), 0);
//     console.log({ total });
//   }
// })();

// const phrase = "First number: 32, and a second number 100. Here is the last number 15.";
// let matchStart, matchLength, match;

// const result = /\d+/.exec(phrase);

// (function printResult() {
//   if (result) {
//     console.log("result:", result);
//     matchStart = result.index;
//     matchLength = result[0].length;
//     match = result[0];
//     console.log({ matchStart, matchLength, match });
//   }
// })();

//* Iterating
const phrase = "First number: 32, and a second number 100. Here is the last number 15.";

const regex = /\d+/g;
let match = null;

(function printMatch() {
  while ((match = regex.exec(phrase))) {
    if (match.index == regex.lastIndex) regex.lastIndex++;
    console.log({ match });
    console.log("regex.lastIndex:", regex.lastIndex);
  }
})();

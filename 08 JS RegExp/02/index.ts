//* Applying Regular Expressions

//* Email address
const email = "something@domain.com";
// const re = /.+@.+\..+/g;
const re = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g;

console.log("re.test(email):", re.test(email));

//* Twitter Handle
const str = "@js_com";
const re2 = /^@?(\w+)$/g;
console.log("re2.test(str):", re2.test(str));

//* Testing Password

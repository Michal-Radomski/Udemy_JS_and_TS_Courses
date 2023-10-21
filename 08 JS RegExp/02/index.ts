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

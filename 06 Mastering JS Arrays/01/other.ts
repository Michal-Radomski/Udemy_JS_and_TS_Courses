//^ String exercises
//* Repeat
const mood = "Happy! ";
console.log(`I feel ${mood.repeat(3)}`); // I feel Happy! Happy! Happy!
console.log(`I feel ${"repeat_string ".repeat(3)}`); // I feel repeat_string repeat_string repeat_string
// Expected output: "I feel Happy! Happy! Happy! "

//^ Object exercises
//* ValueOf: The valueOf() method of Object instances converts the this value to an object.
function MyNumberType(this: any, n: number): void {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object1 = new (MyNumberType as any)(4);
console.log("object1:", object1, typeof object1);
console.log("object1 + 3:", object1 + 3); // Expected output: 7

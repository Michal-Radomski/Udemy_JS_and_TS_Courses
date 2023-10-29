//* ECMAScript Native Modules
// console.log("this:", this, globalThis);

const formatName = function (name: string) {
  return name.replace(/(\w+), (\w+)/, "$2 $1");
};

const name = formatName("Hancock, Steven");
console.log({ name });

const upperCaseName = function (name: string) {
  return name.toUpperCase();
};

export default function yellName(name: string) {
  return upperCaseName(name);
}
// export { yellName, formatName };

console.log(yellName("Steven Hancock"));

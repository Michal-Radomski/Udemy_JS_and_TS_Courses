const punct = "!";

const upperCaseName = function (name: string) {
  return name.toUpperCase();
};

// const yellName = function(name:string) {
//   return `${upperCaseName(name)}${punct}`;
// };

export default function yellName(name: string) {
  return `${upperCaseName(name)}${punct}`;
}

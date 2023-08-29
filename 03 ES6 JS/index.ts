//* 00 Nested forEach loop
const datesArray = ["2019-01-11", "2019-01-12", "2019-01-13", "2019-01-14"] as string[];
const timesArray = ["00:00:00", "06:00:00", "12:00:00", "18:00:00"] as string[];
const datesTimesArray = [] as string[];

datesArray.forEach((date: string, datesIndex: number) => {
  timesArray.forEach((time: string, timesIndex: number) => {
    if (datesIndex === timesIndex) {
      datesTimesArray.push(datesIndex + " -> " + date + " " + time);
    }
  });
});
// console.log("datesTimesArray:", datesTimesArray);

{
  //* 01 forEach
  //@ Params: element, index, array, Return: none (undefined)
  // Old way - for loop
  const colors = ["red", "blue", "green"];
  // for (var i = 0; i < colors.length; i++) {
  //   console.log(colors[i]);
  // }
  colors.forEach(function (color, index) {
    console.log(color, index);
  });
  colors.forEach((color, index) => console.log(color, index));

  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  let sum2 = 0;

  //* V1
  // numbers.forEach(function (number, index) {
  //   sum += number;
  //   sum2 += index;
  // });

  //* V2
  function adder(number: number, index: number) {
    sum += number;
    sum2 += index;
  }
  numbers.forEach(adder);
  // console.log({ sum, sum2 });

  const images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 },
  ];
  let areas = [] as number[];

  images.forEach((image) => areas.push(image.height * image.width));
  // console.log({ areas });
}

{
  //* 02 map
  //@ Params: element, index, array, Return: new Array
  const numbers = [1, 2, 3];
  // const doubledNumbers = [] as number[];
  // for (let i = 0; i < numbers.length; i++) {
  //   doubledNumbers.push(numbers[i] * 2);
  // }
  const doubledNumbers = numbers.map((number) => number * 2);
  console.log("doubledNumbers:", doubledNumbers);
}

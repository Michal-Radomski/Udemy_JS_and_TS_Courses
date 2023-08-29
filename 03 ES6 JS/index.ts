//* Nested forEach loop
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
console.log("datesTimesArray:", datesTimesArray);

//* 01 forEach
// Old way - for loop
const colors = ["red", "blue", "green"];
// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
colors.forEach(function (color, index) {
  console.log(color, index);
});
colors.forEach((color, index) => console.log(color, index));

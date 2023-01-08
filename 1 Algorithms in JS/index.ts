//* 01 FizzBuzz Algorithm
// function fizzBuzz(num: number) {
//   for (let i = 1; i <= num; i++) {
//     // if (i % 3 === 0 && i % 5 === 0) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz", i);
//     } else if (i % 3 === 0) {
//       console.log("Fizz", i);
//     } else if (i % 5 === 0) {
//       console.log("Buzz", i);
//     } else {
//       console.log(i);
//     }
//   }
// }

// // fizzBuzz(20);
// fizzBuzz(31);

//* 02 Harmless Ransom Note Algorithm
function harmlessRansomNote(noteText: string, magazineText: string) {
  let noteArray = noteText.split(" ");
  let magazineArray = magazineText.split(" ");

  let magazineObj: { [word: string]: number } = {};

  magazineArray.forEach((word) => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });
  // console.log("magazineObj:", magazineObj);

  let noteIsPossible = true;
  noteArray.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        noteIsPossible = false;
      }
    } else noteIsPossible = false;
  });
  console.log("noteIsPossible:", noteIsPossible);
  return noteIsPossible;
}

harmlessRansomNote("this this", "this is all the magazine text in the magazine");
harmlessRansomNote(
  "this is a secret note for you from a secret admirer",
  "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited"
);

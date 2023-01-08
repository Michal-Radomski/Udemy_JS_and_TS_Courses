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
// function harmlessRansomNote(noteText: string, magazineText: string) {
//   let noteArray = noteText.split(" ");
//   let magazineArray = magazineText.split(" ");

//   let magazineObj: { [word: string]: number } = {};

//   magazineArray.forEach((word) => {
//     if (!magazineObj[word]) {
//       magazineObj[word] = 0;
//     }
//     magazineObj[word]++;
//   });
//   // console.log("magazineObj:", magazineObj);

//   let noteIsPossible = true;
//   noteArray.forEach((word) => {
//     if (magazineObj[word]) {
//       magazineObj[word]--;
//       if (magazineObj[word] < 0) {
//         noteIsPossible = false;
//       }
//     } else noteIsPossible = false;
//   });
//   console.log("noteIsPossible:", noteIsPossible);
//   return noteIsPossible;
// }

// harmlessRansomNote("this this", "this is all the magazine text in the magazine");
// harmlessRansomNote(
//   "this is a secret note for you from a secret admirer",
//   "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited"
// );

//* 03 isPalindrome Algorithm
// function isPalindrome(string: string) {
//   string = string.toLowerCase();
//   let charactersArray = string.split("");
//   let validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

//   let lettersArray: string[] = [];

//   charactersArray.forEach((character) => {
//     if (validCharacters.indexOf(character) > -1) {
//       lettersArray.push(character);
//     }
//   });
//   console.log("lettersArray:", lettersArray);

//   if (lettersArray.join("") === lettersArray.reverse().join("")) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// }
// isPalindrome("Madam I'm Adam");

//* 04 Caesar Cipher
// function caesarCipher(str: string, num: number) {
//   num = num % 26;
//   let lowerCaseString = str.toLowerCase();
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   let newString = "";

//   for (let i = 0; i < lowerCaseString.length; i++) {
//     let currentLetter = lowerCaseString[i];
//     if (currentLetter === " ") {
//       newString += currentLetter;
//       continue;
//     }
//     let currentIndex = alphabet.indexOf(currentLetter);
//     let newIndex = currentIndex + num;
//     if (newIndex > 25) {
//       newIndex = newIndex - 26;
//     }
//     if (newIndex < 0) {
//       newIndex = newIndex + 26;
//     }
//     if (str[i] === str[i].toUpperCase()) {
//       newString += alphabet[newIndex].toUpperCase();
//     } else {
//       newString += alphabet[newIndex];
//     }
//   }
//   console.log("newString:", newString);
//   return newString;
// }

// caesarCipher("Zoo Keeper", 2);
// caesarCipher("JavaScript", -900);

//* 05 Reverse Words
// function reverseWords(str: string) {
//   let wordsArray = str.split(" ");
//   let reversedWordsArr: string[] = [];

//   wordsArray.forEach((word) => {
//     let reversedWord = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//       reversedWord += word[i];
//     }
//     reversedWordsArr.push(reversedWord);
//   });
//   let result = reversedWordsArr.join(" ");
//   console.log({ result });
//   return result;
// }
// reverseWords("this is a string of words");

//* 06 Reverse Array In Place
function reverseArrayInPlace(array: Array<string | number>) {
  for (let i = 0; i < array.length / 2; i++) {
    let tempVar = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tempVar;
  }
  console.log({ array });
  return array;
}
reverseArrayInPlace([1, 2, 3, 4, 5, 6]);
reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]);

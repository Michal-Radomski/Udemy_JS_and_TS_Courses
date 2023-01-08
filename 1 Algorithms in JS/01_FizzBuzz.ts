function fizzBuzz(num: number) {
  for (let i = 1; i <= num; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    }
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);

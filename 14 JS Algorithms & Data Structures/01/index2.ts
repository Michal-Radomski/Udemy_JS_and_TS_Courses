//* Recursion
// Call Stack
// function takeShower(): string {
//   return "Showering!";
// }
// function eatBreakfast(): string {
//   let meal: string = cookFood();
//   return `Eating ${meal}`;
// }
// function cookFood(): string {
//   let items = ["Oatmeal", "Eggs", "Protein Shake"];
//   return items[Math.floor(Math.random() * items.length)];
// }
// function wakeUp(): void {
//   takeShower();
//   eatBreakfast();
//   console.log("Ok ready to go to work!");
// }
// wakeUp();

{
  //* Factorial Iteratively
  function factorial(num: number): number {
    let total = 1;
    for (let i = num; i > 1; i--) {
      total *= i;
    }
    return total;
  }
  console.log(factorial(5)); // 120
}

{
  //* Factorial Recursively
  function factorial(n: number): number {
    if (n === 0) return 1; // Base case -> when function stops
    return n * factorial(n - 1); // Recursive case
  }
  console.log(factorial(5)); // Output: 120
}

{
  //* Recursive Version
  function countDown(num: number): void {
    if (num <= 0) {
      console.log("All done!");
      return;
    }
    console.log(num);
    num--;
    countDown(num);
  }
  countDown(3);
}
{
  //* Iterative Version
  function countDown(num: number): void {
    for (let i = num; i > 0; i--) {
      console.log(i);
    }
    console.log("All done!");
  }
  countDown(3);
}

function sumRange(num: number): number {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4)); // 10

{
  //* Helper Method Recursion
  function collectOddValues(arr: number[]): number[] {
    let result = [] as number[];

    function helper(helperInput: number[]): void {
      if (helperInput.length === 0) {
        return;
      }

      if (helperInput[0] % 2 !== 0) {
        result.push(helperInput[0]);
      }

      helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
  }

  console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ 1, 3, 5, 7, 9 ]

  //* Without helper method
  function collectOddValues2(arr: number[]): number[] {
    let newArr = [] as number[];

    if (arr.length === 0) {
      return newArr;
    }

    if (arr[0] % 2 !== 0) {
      newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
  }

  console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ 1, 3, 5, 7, 9 ]
}

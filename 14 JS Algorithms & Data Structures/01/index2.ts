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

function factorial(n: number): number {
  if (n === 0) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120

{
  // Recursive Version
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
  // Iterative Version
  function countDown(num: number) {
    for (let i = num; i > 0; i--) {
      console.log(i);
    }
    console.log("All done!");
  }
  countDown(3);
}

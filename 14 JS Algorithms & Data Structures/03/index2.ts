//^ Recursive Version: O(2^n) -> very bad!
function fib(n: number): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log("fib(10):", fib(10));

//^ Recursive Version with Memoization -> O(n)
function fibonacci(n: number, memo = {} as { [key: string]: number }): number {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  // console.log("memo:", memo);
  return memo[n];
}

console.log("fibonacci(100):", fibonacci(100)); // Output: 354224848179262000000

//^ Tabulated Version -> O(n)
function fib2(n: number): number {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  // console.log("fibNums:", fibNums);

  return fibNums[n];
}
console.log("fib2(1000):", fib2(1000)); // Output: 4.346655768693743e+208

//*  Greedy Algorithm example
function coinChangeGreedy(coins: number[], amount: number): number {
  // Sort coins in descending order to pick the largest first
  coins.sort((a, b) => b - a);

  let count = 0;

  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin; // Take this coin
      count++; // Increase coin count
    }
  }

  // If all amount is given, return count else -1 if no exact change
  return amount === 0 ? count : -1;
}

// Example usage:
console.log("coinChangeGreedy([1, 2, 5], 11):", coinChangeGreedy([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)

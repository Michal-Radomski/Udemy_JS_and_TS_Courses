//* Searching Algorithms
// JS: indexOf, includes, find, findIndex -> Linear Search

//* Linear Search: O(n)
function linearSearch<T>(arr: T[], val: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100)); //* -1

//* Binary Search: O(log n) -> Array MUST be sorted! -> LOG Base 2
// Original Solution
function binarySearchOrig<T>(arr: T[], elem: T): number {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
console.log(binarySearchOrig([2, 5, 6, 9, 13, 15, 28, 30], 103)); //* -1

// Refactored Version
function binarySearch<T>(arr: T[], elem: T): number {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)); //* -1

//* Naive String Search -> O(n^2)  [O(m*n) ?]
function naiveStringSearch(long: string, short: string): number {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch("lorie loled", "lol")); //* 1

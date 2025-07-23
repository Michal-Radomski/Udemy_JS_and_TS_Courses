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

//* Binary Search: O(log n) -> Array MUST be sorted!
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

// Constant runtime - Big O Notation:  "O (1)"
function log(array: Array<number>) {
  // console.log(array[0]);
  console.log(array[1]);
}
log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Linear runtime - Big O Notation:  "O (n)"
function logAll(array: Array<number>) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
logAll([1, 2, 3, 4, 5]);
// logAll([1, 2, 3, 4, 5, 6]);
// logAll([1, 2, 3, 4, 5, 6, 7]);

// Exponential runtime - Big O Notation: "O (n^2)"
function addAndLog(array: Array<string>) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}
addAndLog(["A", "B", "C"]); // 9 pairs logged out
// addAndLog(["A", "B", "C", "D"]); // 16 pairs logged out
// addAndLog(["A", "B", "C", "D", "E"]); // 25 pairs logged out

// Logarithmic runtime - Big O Notation: O (log n)
function binarySearch(array: Array<number>, key: number) {
  let low = 0;
  let high = array.length - 1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));

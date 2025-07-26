//* Sorting Algorithms 2
//- https://www.toptal.com/developers/sorting-algorithms
//- https://www.bigocheatsheet.com

//^ Merge Sort -> O(n log n)
// Merges two already sorted arrays
function merge(arr1: number[], arr2: number[]): number[] {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
console.log(merge([100, 200], [1, 2, 3, 5, 6])); // [1, 2, 3, 5, 6, 100, 200]

// Reclusive Merge Sort
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr; // Base case
  let mid: number = Math.floor(arr.length / 2);
  let left: number[] = mergeSort(arr.slice(0, mid));
  let right: number[] = mergeSort(arr.slice(mid));

  return merge(left, right);
}
console.log(mergeSort([10, 24, 76, 73])); // [ 10, 24, 73, 76 ]

//^ Quick Sort
//* Pivot
// First Version
function pivot1(arr: number[], start = 0, end = arr.length + 1): number {
  function swap(array: number[], i: number, j: number): void {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
console.log(pivot1([4, 8, 2, 1, 5, 7, 6, 3])); // 3

//* Version with ES2015 Syntax
function pivot(arr: number[], start = 0, end = arr.length - 1): number {
  const swap = (arr: number[], idx1: number, idx2: number): void => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // 3

function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    // Left
    quickSort(arr, left, pivotIndex - 1);
    // Right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23])); // [-3, 1, 2, 2,  3, 4, 5, 6, 9, 23, 100]

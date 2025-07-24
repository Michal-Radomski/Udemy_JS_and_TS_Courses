//* Sorting Algorithms
//- https://www.toptal.com/developers/sorting-algorithms

//^ Bubble Sort -> O(n^2)
//* UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr: number[]): number[] {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])); // [1, 2, 3, 4, 5, 6, 7, 8]

// Optimized BubbleSort with noSwaps
function bubbleSort3(arr: number[]): number[] {
  let noSwaps: boolean;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort3([8, 1, 2, 3, 4, 5, 6, 7])); // [1, 2, 3, 4, 5, 6, 7, 8]

//* ES2015 Version
function bubbleSort2(arr: number[]): number[] {
  const swap = (arr: number[], idx1: number, idx2: number): void => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort2([8, 1, 2, 3, 4, 5, 6, 7])); // [1, 2, 3, 4, 5, 6, 7, 8]

//* Selection Sort

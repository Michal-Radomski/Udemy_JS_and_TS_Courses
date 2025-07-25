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

//^ Selection Sort -> O(n^2)
//* LEGACY VERSION (non ES2015 syntax)
function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort2([0, 2, 34, 22, 10, 19, 17])); // [0,  2, 10, 17, 19, 22, 34]

//* ES2015 VERSION
function selectionSort2(arr: number[]): number[] {
  const swap = (arr: number[], idx1: number, idx2: number) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort2([0, 2, 34, 22, 10, 19, 17])); // [0, 2, 10, 17, 19, 22, 34]

//^ Insertion Sort -> O(n^2) (good for incoming data)
function insertionSort(arr: number[]): number[] {
  let currentVal: number;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];

    let j: number;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4])); // [ 1, 2, 4, 9, 76 ]

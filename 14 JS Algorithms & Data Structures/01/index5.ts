//* Sorting Algorithms 2
//- https://www.toptal.com/developers/sorting-algorithms

//^ Merge Sort
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
  if (arr.length <= 1) return arr;
  let mid: number = Math.floor(arr.length / 2);
  let left: number[] = mergeSort(arr.slice(0, mid));
  let right: number[] = mergeSort(arr.slice(mid));

  return merge(left, right);
}
console.log(mergeSort([10, 24, 76, 73])); // [ 10, 24, 73, 76 ]

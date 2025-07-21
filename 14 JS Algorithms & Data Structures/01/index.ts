{
  //* Slower
  function addUpTo(n: number): number {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  const t1 = performance.now();
  addUpTo(1000000000);
  const t2 = performance.now();
  console.log(1, `Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
}

{
  //* Faster
  function addUpTo(n: number): number {
    return (n * (n + 1)) / 2;
  }

  const time1 = performance.now();
  addUpTo(1000000000);
  const time2 = performance.now();
  console.log(2, `Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
}

{
  //* Frequency Counter Pattern -> O(n^2)
  function same(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      let correctIndex: number = arr2.indexOf(arr1[i] ** 2);
      if (correctIndex === -1) {
        return false;
      }
      console.log({ arr2 });
      arr2.splice(correctIndex, 1);
    }
    return true;
  }

  console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
}

{
  //* Frequency Counter Pattern -> O(n)
  function same(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }
    let frequencyCounter1 = {} as { [key: string]: number };
    let frequencyCounter2 = {} as { [key: string]: number };

    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log({ frequencyCounter1 });
    console.log({ frequencyCounter2 });

    for (let key in frequencyCounter1) {
      if (!(Number(key) ** 2 in frequencyCounter2)) {
        return false;
      }
      if (frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[key]) {
        return false;
      }
    }
    return true;
  }

  console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

  function validAnagram(first: string, second: string): boolean {
    if (first.length !== second.length) {
      return false;
    }

    const lookup = {} as { [key: string]: number };

    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }
    console.log(1, { lookup });

    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
    console.log(2, { lookup });

    return true;
  }

  console.log(validAnagram("cinema", "iceman"));
}

{
  //* Multiple Pointers Pattern
  function sumZero(arr: number[]): number[] | undefined {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return [arr[i], arr[j]];
        }
      }
    }
  }

  console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [ -2, 2 ]

  function sumZero2(arr: number[]): number[] | undefined {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // [ -3, 3 ]

  function findPairs(numbers: number[], target: number): number[][] {
    // Sort the array first (if not already sorted)
    numbers.sort((a, b) => a - b);

    let left = 0; // Pointer at start
    let right = numbers.length - 1; // Pointer at end
    let pairs: number[][] = [];

    while (left < right) {
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
        pairs.push([numbers[left], numbers[right]]);
        left++; // Move both pointers after finding a pair
        right--;
      } else if (sum < target) {
        left++; // Increase sum by moving left pointer right
      } else {
        right--; // Decrease sum by moving right pointer left
      }
    }

    return pairs;
  }

  const numbers = [1, 3, 5, 2, 8, -2];
  const result = findPairs(numbers, 6);
  console.log(result); // Output: [[-2, 8], [1, 5]]

  function countUniqueValues(arr: number[]): number {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }

  console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99])); // 5
}

{
  //* Sliding Window Pattern
  function maxSumSubarray(arr: number[], k: number): number {
    let maxSum = 0;
    let windowSum = 0;

    // Calculate the sum of the first window of size k
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window from k to end of array
    for (let end = k; end < arr.length; end++) {
      windowSum += arr[end] - arr[end - k]; // Add next element and remove leftmost element
      maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
  }

  // Example usage:
  const numbers = [2, 1, 5, 1, 3, 2];
  const k = 3;
  console.log(maxSumSubarray(numbers, k)); // Output: 9 (sum of subarray [5,1,3])

  //* Almost the same
  function maxSubarraySum(arr: number[], num: number): number | null {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }

  console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
}

{
  //* Divide And Conquer Pattern
  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr; // Base case: array of length 0 or 1 is sorted

    // Divide: split array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Conquer: recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Combine: merge two sorted halves
    return merge(sortedLeft, sortedRight);
  }

  function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    // Append remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  // Example usage:
  const array = [38, 27, 43, 3, 9, 82, 10];
  console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
}

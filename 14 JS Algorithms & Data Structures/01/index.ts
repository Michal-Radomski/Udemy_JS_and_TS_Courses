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

{
  //* Frequency Patter Exercises
  function sameFrequency(num1: number, num2: number): boolean {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {} as { [key: string]: number };
    let countNum2 = {} as { [key: string]: number };

    for (let i = 0; i < strNum1.length; i++) {
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for (let j = 0; j < strNum1.length; j++) {
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
    }

    for (let key in countNum1) {
      if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
  }

  console.log(sameFrequency(182, 281)); // true

  function areThereDuplicates(...args: number[]): boolean {
    let collection = {} as { [key: string]: number };

    for (let val in args) {
      collection[args[val]] = (collection[args[val]] || 0) + 1;
    }
    for (let key in collection) {
      if (collection[key] > 1) return true;
    }
    return false;
  }
  console.log(areThereDuplicates(...[1, 2, 2])); // true

  function constructNote(message: string, letters: string): boolean {
    let frequency = {} as { [key: string]: number };
    let frequencyM = {} as { [key: string]: number };

    for (let i = 0; i < letters.length; i++) {
      frequency[letters[i]] = ++frequency[letters[i]] || 1;
    }

    for (let i = 0; i < message.length; i++) {
      frequencyM[message[i]] = ++frequencyM[message[i]] || 1;
    }

    for (let k in frequencyM) {
      if (!frequency[k]) return false;
      if (frequencyM[k] > frequency[k]) return false;
    }

    return true;
  }
  console.log(constructNote("abc", "dcba")); // true

  function findAllDuplicates(nums: number[]): number[] {
    let ans = [];
    let s = new Set();

    for (let i = 0; i < nums.length; i++) {
      s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i]);
    }
    return ans;
  }
  console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
}

{
  //*  Multiple Pointers
  function averagePair(arr: number[], num: number): boolean {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      let avg = (arr[start] + arr[end]) / 2;
      if (avg === num) return true;
      else if (avg < num) start++;
      else end--;
    }
    return false;
  }
  console.log(averagePair([1, 2, 3], 2.5)); // true

  function isSubsequence(str1: string, str2: string): boolean {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }
  console.log(isSubsequence("hello", "hello world")); // true

  function findPair(arr: number[], n: number): boolean {
    // if n is 0, we just need to see if there's any duplicate in the array
    if (n === 0) {
      const seen = new Set();
      for (let num of arr) {
        if (seen.has(num)) {
          return true;
        }
        seen.add(num);
      }
      return false;
    }

    // for non-zero n, place all elements in a set
    const setVals = new Set(arr);

    // check for val + n or val - n in the set
    for (let val of arr) {
      if (setVals.has(val + n) || setVals.has(val - n)) {
        return true;
      }
    }

    return false;
  }
  console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
}

{
  //* Sliding Window Exercises
  function maxSubarraySum(arr: number[], num: number): number {
    if (arr.length < num) return null as any;

    let total = 0;
    for (let i = 0; i < num; i++) {
      total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
      currentTotal += arr[i] - arr[i - num];
      total = Math.max(total, currentTotal);
    }
    return total;
  }
  console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700

  function minSubArrayLen(nums: number[], sum: number): number {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
      // if current window doesn't add up to the given sum then
      // move the window to right
      if (total < sum && end < nums.length) {
        total += nums[end];
        end++;
      }
      // if current window adds up to at least the sum given then
      // we can shrink the window
      else if (total >= sum) {
        minLen = Math.min(minLen, end - start);
        total -= nums[start];
        start++;
      }
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
      else {
        break;
      }
    }

    return minLen === Infinity ? 0 : minLen;
  }
  console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2

  function findLongestSubstring(str: string): number {
    let longest = 0;
    let seen = {} as { [key: string]: number };
    let start = 0;

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }
  console.log(findLongestSubstring("rithmschool")); // 7
}

{
  //* Divide and Conquer exercises
  function countZeroes(arr: number[]): number {
    // add whatever parameters you deem necessary - good luck!
    let firstZero = findFirst(arr);
    if (firstZero === -1) return 0;

    return arr.length - firstZero;
  }

  function findFirst(arr: number[], low = 0, high = arr.length - 1): number {
    if (high >= low) {
      let mid = low + Math.floor((high - low) / 2);
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid;
      } else if (arr[mid] === 1) {
        return findFirst(arr, mid + 1, high);
      }
      return findFirst(arr, low, mid - 1);
    }
    return -1;
  }
  console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2

  {
    function sortedFrequency(arr: number[], num: number): number {
      let firstIdx = findFirst(arr, num);
      if (firstIdx === -1) return firstIdx;
      let lastIdx = findLast(arr, num);
      return lastIdx - firstIdx + 1;
    }

    function findFirst(arr: number[], num: number, low = 0, high = arr.length - 1): number {
      if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
          return mid;
        } else if (num > arr[mid]) {
          return findFirst(arr, num, mid + 1, high);
        } else {
          return findFirst(arr, num, low, mid - 1);
        }
      }
      return -1;
    }

    function findLast(arr: number[], num: number, low = 0, high = arr.length - 1): number {
      if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
          return mid;
        } else if (num < arr[mid]) {
          return findLast(arr, num, low, mid - 1);
        } else {
          return findLast(arr, num, mid + 1, high);
        }
      }
      return -1;
    }
    console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
  }

  {
    function findRotatedIndex(array: number[], num: number): number {
      let pivot = findPivot(array) as number;
      if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
        return binarySearch(array, num, 0, pivot - 1);
      } else {
        return binarySearch(array, num, pivot, array.length - 1);
      }
    }

    function binarySearch(array: number[], num: number, start = 0, end = array.length - 1): number {
      if (array.length === 0) return -1;
      if (num < array[start] || num > array[end]) return -1;

      while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === num) {
          return mid;
        } else if (num < array[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
      return -1;
    }

    function findPivot(arr: number[]): number | undefined {
      if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
      let start = 0;
      let end = arr.length - 1;
      while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1]) return mid + 1;
        else if (arr[start] <= arr[mid]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
  }
}

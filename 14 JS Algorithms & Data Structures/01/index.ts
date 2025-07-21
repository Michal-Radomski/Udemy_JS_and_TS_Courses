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
    console.log({ lookup });

    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }

    return true;
  }

  console.log(validAnagram("cinema", "iceman"));
}

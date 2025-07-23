//* Recursion
// Call Stack
// function takeShower(): string {
//   return "Showering!";
// }
// function eatBreakfast(): string {
//   let meal: string = cookFood();
//   return `Eating ${meal}`;
// }
// function cookFood(): string {
//   let items = ["Oatmeal", "Eggs", "Protein Shake"];
//   return items[Math.floor(Math.random() * items.length)];
// }
// function wakeUp(): void {
//   takeShower();
//   eatBreakfast();
//   console.log("Ok ready to go to work!");
// }
// wakeUp();

{
  //* Factorial Iteratively
  function factorial(num: number): number {
    let total = 1;
    for (let i = num; i > 1; i--) {
      total *= i;
    }
    return total;
  }
  console.log(factorial(5)); // 120
}

{
  //* Factorial Recursively
  function factorial(n: number): number {
    if (n === 0) return 1; // Base case -> when function stops
    return n * factorial(n - 1); // Recursive case
  }
  console.log(factorial(5)); // Output: 120
}

{
  //* Recursive Version
  function countDown(num: number): void {
    if (num <= 0) {
      console.log("All done!");
      return;
    }
    console.log(num);
    num--;
    countDown(num);
  }
  countDown(3);
}
{
  //* Iterative Version
  function countDown(num: number): void {
    for (let i = num; i > 0; i--) {
      console.log(i);
    }
    console.log("All done!");
  }
  countDown(3);
}

function sumRange(num: number): number {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4)); // 10

{
  //* Helper Method Recursion
  function collectOddValues(arr: number[]): number[] {
    let result = [] as number[];

    function helper(helperInput: number[]): void {
      if (helperInput.length === 0) {
        return;
      }

      if (helperInput[0] % 2 !== 0) {
        result.push(helperInput[0]);
      }

      helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
  }

  console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ 1, 3, 5, 7, 9 ]

  //* Without helper method - pure recursion
  function collectOddValues2(arr: number[]): number[] {
    let newArr = [] as number[];

    if (arr.length === 0) {
      return newArr;
    }

    if (arr[0] % 2 !== 0) {
      newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
  }

  console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ 1, 3, 5, 7, 9 ]
}

{
  //* Recursion Exercises
  function power(base: number, exponent: number): number {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
  }
  console.log(power(2, 4)); // 16

  function factorial(x: number): number {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
  }
  console.log(factorial(5)); // 120

  function productOfArray(arr: number[]): number {
    if (arr.length === 0) {
      return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
  }
  console.log(productOfArray([1, 2, 3, 10])); // 60

  function recursiveRange(x: number): number {
    if (x === 0) return 0;
    return x + recursiveRange(x - 1);
  }
  console.log(recursiveRange(10)); // 55

  function fib(n: number): number {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }
  console.log(fib(35)); // 9227465
}

{
  //* //* Recursion Exercises2
  function reverse(str: string): string {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  }
  console.log(reverse("abba")); // "abba"

  function isPalindrome(str: string): boolean {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
  }
  console.log(isPalindrome("tacocat")); // true

  const isOdd = (val: number) => val % 2 !== 0;

  function someRecursive(array: number[], callback: (arg0: number) => boolean): boolean {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
  }
  console.log(someRecursive([1, 2, 3, 4], isOdd)); // true

  type NestedNumberArray = (number | NestedNumberArray)[];

  function flatten(oldArr: NestedNumberArray): number[] {
    let newArr = [] as number[];
    for (let i = 0; i < oldArr.length; i++) {
      if (Array.isArray(oldArr[i])) {
        newArr = newArr.concat(flatten(oldArr[i] as NestedNumberArray));
      } else {
        newArr.push(oldArr[i] as number);
      }
    }
    return newArr;
  }
  console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]

  function capitalizeWords(array: string[]): string[] {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;
  }
  console.log(capitalizeWords(["car", "taco", "banana"])); // [ 'CAR', 'TACO', 'BANANA' ]

  const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };

  const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  };

  type NestedObj = { [x: string]: number | NestedObj | string | boolean };

  function nestedEvenSum(obj: NestedObj, sum = 0): number {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
    return sum;
  }
  console.log(nestedEvenSum(obj1 as NestedObj)); // 6
  console.log(nestedEvenSum(obj2 as NestedObj)); // 10

  function capitalizeFirst(array: string[]): string[] {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
  }
  console.log(capitalizeFirst(["i", "am", "learning", "recursion"])); // [ 'I', 'Am', 'Learning', 'Recursion' ]

  const obj = {
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66,
      },
    },
  };

  type NestedObj2 = { [x: string]: number | NestedObj2 | string };

  function stringifyNumbers(obj: NestedObj2): NestedObj2 {
    let newObj = {} as NestedObj2;
    for (let key in obj) {
      if (typeof obj[key] === "number") {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key as keyof typeof obj] = obj[key];
      }
    }
    return newObj;
  }
  console.log(stringifyNumbers(obj as unknown as NestedObj2));

  const obj3 = {
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz",
            },
          },
        },
      },
    },
  };

  function collectStrings(obj: NestedObj): string[] {
    let stringsArr = [] as string[];

    function gatherStrings(o: NestedObj) {
      for (let key in o) {
        if (typeof o[key] === "string") {
          stringsArr.push(o[key]);
        } else if (typeof o[key] === "object") {
          return gatherStrings(o[key]);
        }
      }
    }

    gatherStrings(obj);

    return stringsArr;
  }
  console.log(collectStrings(obj3)); // ["foo", "bar", "baz"]

  function collectStringsPure(obj: NestedObj): string[] {
    let stringsArr = [] as string[];
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        stringsArr.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
    }

    return stringsArr;
  }
  console.log(collectStringsPure(obj3)); // ["foo", "bar", "baz"]
}

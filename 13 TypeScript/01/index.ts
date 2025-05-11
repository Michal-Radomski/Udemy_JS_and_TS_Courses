{
  //* 01 Intro
  let message: string = "Hello world";
  message += " again";
  console.log("message:", message);
}

{
  //* 02 Primitives
  const isPresent: boolean = false;
  const magic: number = 66.6;
  const hello: string = "world";
  console.log("isPresent, magic, hello:", isPresent, magic, hello);

  const notDefined: undefined = undefined;
  const notPresent: null = null;
  console.log("notPresent, notDefined:", notPresent, notDefined);

  const penta: symbol = Symbol("star");
  const biggy: bigint = 24n;
  console.log("penta, biggy:", penta, biggy);
}

{
  //* 03 Instance Types
  const regexp: RegExp = new RegExp("ab+c");
  const array: Array<number> = [1, 2, 3];
  const set: Set<number> = new Set([1, 2, 3]);
  console.log("regexp, array, set:", regexp, array, set);

  class Queue<T> {
    private data: Array<T> = [];
    push(item: T) {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.shift();
    }
  }

  const queue: Queue<number> = new Queue();
  console.log("queue:", queue);

  // Create a new Map with string keys and number values
  const map: Map<string, number> = new Map();

  // Add entries to the map
  map.set("apple", 5);
  map.set("banana", 10);
  map.set("orange", 7);

  // Access a value by key
  const appleCount = map.get("apple"); // 5
  console.log(`Apple count: ${appleCount}`);

  // Check if a key exists
  const hasBanana = map.has("banana"); // true
  console.log(`Has banana? ${hasBanana}`);

  // Iterate over map entries
  for (const [key, value] of map) {
    console.log(`${key} => ${value}`);
  }
  // Output:
  // apple => 5
  // banana => 10
  // orange => 7
  console.log("map:", map);

  // Remove an entry
  map.delete("orange");

  // Size of the map
  console.log(`Map size: ${map.size}`); // 2

  // Clear all entries
  map.clear();
  console.log(`Map size after clear: ${map.size}`); // 0
}

{
  //* 04 Arrays and Tuples
  // Array
  let array: number[] = [1, 2, 3];

  // Usage
  array = [1];
  array = [1, 2, 3, 4, 5];
  // array = ["hello"]; //* Error
  console.log("array:", array);

  // Tuple
  let tuple: [number, number] = [0, 0];

  // Usage
  tuple = [1, 1];
  tuple = [2, 6];
  // tuple = [5]; //* Error: must be 2 items
  // tuple = [5, 4, 3]; //* Error: must be 2 items
  // tuple = ["elite", 1337]; //* Error: must be number
  console.log("tuple:", tuple);
}

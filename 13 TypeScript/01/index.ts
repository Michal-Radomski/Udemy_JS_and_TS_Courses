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

  // Define our tuple
  let ourTuple: [number, boolean, string];
  // Initialize correctly
  ourTuple = [5, false, "Coding God was here"];
  console.log("ourTuple:", ourTuple);
}

{
  //* 05 Objects Types
  type Point = { x: number; y: number };

  const center: Point = {
    x: 0,
    y: 0,
  };

  const unit: Point = {
    x: 1,
    y: 1,
  };

  center.x = 100;
  unit.y = 100;
  console.log("center, unit:", center, unit);
}

{
  //* 06 Functions
  function sum(...values: number[]): number {
    return values.reduce((a: number, b: number) => a + b, 0);
  }
  console.log("sum(1,2,3):", sum(1, 2, 3));

  type Add = (a: number, b: number) => number;

  let add: Add;

  add = function (a: number, b: number): number {
    return a + b;
  };

  add = (a, b) => a + b;
  console.log(add(1, 2));
}

{
  //* 07 Structural Typing
  type Point2D = { x: number; y: number };
  type Point3D = { x: number; y: number; z: number };

  let point2D: Point2D = { x: 0, y: 10 };
  let point3D: Point3D = { x: 0, y: 10, z: 20 };

  //* Extra info ok
  point2D = point3D;
  function takesPoint2D(point: Point2D) {
    console.log({ point });
  }
  console.log("takesPoint2D(point3D):", takesPoint2D(point3D));

  //* Error: missing info
  // point3D = point2D;
  // function takesPoint3D(point: Point3D) {
  //   /** ... */
  // }
  // takesPoint3D(point2D);
}

// {
//   //* Classes
//   class Animal {
//     // protected name: string;
//     public name: string;

//     constructor(name: string) {
//       this.name = name;
//     }

//     public move(distanceInMeters: number): void {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
//   }

//   const cat = new Animal("Cat");
//   console.log("cat:", cat);
//   cat.move(10);
//   cat.name = "Dog";

//   class Bird extends Animal {
//     fly(distanceInMeters: number) {
//       console.log(`${this.name} flew ${distanceInMeters}m.`);
//     }
//   }
//   const bird: Bird = new Bird("bird");
//   console.log("bird:", bird);
// }

{
  //* Implements Keyword
  type Animal = {
    name: string;
    voice(): string;
  };

  function log(animal: Animal): void {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
  }

  class Cat implements Animal {
    constructor(public name: string) {}
    voice(): string {
      return "meow";
    }
  }

  class Dog implements Animal {
    constructor(public name: string) {}
    voice(): string {
      return "woof";
    }
  }

  log(new Cat("Salem")); // Animal Salem: meow
  log(new Dog("Lassie")); // Animal Lassie: woof
}

{
  //* Definite Assignment Assertion
  ((): void => {
    //- No error: "Variable 'dice' is used before being assigned.ts(2454)"
    let dice!: number; //* Definite assignment assertion "!" (it tells TypeScript that this variable will always be assigned)

    function rollDice(): void {
      dice = Math.floor(Math.random() * 6) + 1;
    }

    rollDice();
    console.log("Current dice value:", dice); // No complains

    rollDice();
    console.log("Current dice value:", dice); // No complains

    // In classes
    class Point {
      x!: number;
      y!: number;

      constructor() {
        this.moveRandom(); // Removes duplication. Needs definite assignment assertion in properties
      }

      moveRandom(): void {
        this.x = Math.random();
        this.y = Math.random();
      }
    }

    const point = new Point();
    console.log("point:", point);
  })();
}

{
  //* User Defined Type Guards
  ((): void => {
    type Rectangle = {
      height: number;
      width: number;
    };

    type Square = {
      size: number;
    };

    type Shape = Rectangle | Square;

    function isRectangle(shape: Shape): shape is Rectangle {
      return "height" in shape && "width" in shape;
    }

    function isSquare(shape: Shape): shape is Square {
      return "size" in shape;
    }

    function area(shape: Shape): number {
      if (isRectangle(shape)) {
        return shape.height * shape.width;
      }
      if (isSquare(shape)) {
        return shape.size * shape.size;
      }
      const ensure: never = shape;
      return ensure;
    }
    console.log("area({ size: 5 }):", area({ size: 5 }));

    function isString(test: any): test is string {
      return typeof test === "string";
    }

    function example(foo: any) {
      if (isString(foo)) {
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
      }
    }
    example("hello world");
  })();
}

{
  //* Assertion Functions
  (() => {
    type Person = {
      name: string;
      dateOfBirth?: Date;
    };

    function loadPerson() {
      return [{ name: "John Doe" } as Person, undefined].at(Math.floor(Math.random()));
    }

    //* Assertion functions are designed for tests code Use User Defined Type Guards for application code instead
    function assert(condition: unknown, message: string): asserts condition {
      if (!condition) throw new Error(message);
    }

    // function assertDate(value: unknown): asserts value is Date {
    //   if (value instanceof Date) return;
    //   else throw new TypeError("value is not a Date");
    // }

    const maybePerson = loadPerson();

    assert(maybePerson != null, "Could not load person");
    console.log("Name:", maybePerson.name);

    // assertDate(maybePerson.dateOfBirth);
    // console.log("Date of birth:", maybePerson.dateOfBirth.toISOString());
  })();
}

{
  //* Function Overloading
  (() => {
    function reverse(string: string): string; // Function overload
    function reverse(stringArray: string[]): string[]; // Function overload
    // Function implementation (all cases)
    function reverse(stringOrStringArray: string | string[]) {
      if (typeof stringOrStringArray == "string") {
        return stringOrStringArray.split("").reverse().join("");
      } else {
        return stringOrStringArray.slice().reverse();
      }
    }

    const hello: string = reverse("hello"); // olleh
    const h_e_l_l_o: string[] = reverse(["h", "e", "l", "l", "o"]); // ['o', 'l', 'l', 'e', 'h']
    console.log({ hello, h_e_l_l_o });

    // Function overload
    function makeDate(timestamp: number): Date;
    function makeDate(year: number, month: number, day: number): Date;
    // Function implementation (all cases)
    function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
      if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
      } else {
        return new Date(timestampOrYear);
      }
    }

    const doomsday: Date = makeDate(2000, 1, 1); // 1 Jan 2000
    const epoch: Date = makeDate(0); // 1 Jun 1970
    console.log({ doomsday, epoch });
    // const invalid = makeDate(2000, 1); //* Not allowed
  })();
}

{
  //* Call Signatures
  ((): void => {
    // Interfaces and Types
    interface AddInterface {
      (a: number, b: number): number;
    }

    type AddType = (a: number, b: number) => number;
    type AddTypeBlock = {
      (a: number, b: number): number;
      (a: number, b: number, c: number): number;
      debugName?: string;
    };

    const addWithInterface: AddInterface = (a: number, b: number) => a + b;
    const addWithType: AddType = (a: number, b: number) => a + b;
    const addWithTypeBlock: AddTypeBlock = (a: number, b: number, c?: number) => a + b + (c || 0);
    addWithTypeBlock.debugName = "Addition Function";

    // Classes
    // Short form
    type PointCreator2 = new (x: number, y: number) => { x: number; y: number };
    // Long form
    type PointCreator = {
      new (x: number, y: number): { x: number; y: number };
    };
    const Point: PointCreator = class {
      constructor(public x: number, public y: number) {}
    };

    // All ways combined
    type PointCreatorWays = {
      new (x: number, y: number): { x: number; y: number };
      new (x: number, y: number, z: number): { x: number; y: number; z: number };
      (x: number, y: number): { x: number; y: number };
      (x: number, y: number, z: number): { x: number; y: number; z: number };
      debugName: string;
    };
  })();
}

{
  //* Abstract Class
  ((): void => {
    abstract class Command {
      abstract commandLine(): string;

      execute(): void {
        console.log("Executing:", this.commandLine());
      }
    }

    class GitResetCommand extends Command {
      commandLine(): string {
        return "git reset --hard";
      }
    }

    class GitFetchCommand extends Command {
      commandLine(): string {
        return "git fetch --all";
      }
    }
  })();
}

{
  //* Index Signatures
  ((): void => {
    const str = {
      hello: "world",
    };

    console.log(str["hello"]); // world

    const nums = {
      1337: "leet",
    };

    console.log(nums[1337]); // leet

    // Index signature example
    type Dictionary = {
      [key: string]: boolean;
    };

    // Use
    type Person = {
      displayName: string;
      email: string;
    };

    type PersonDictionary = {
      [username: string]: Person | undefined; // Avoid runtime error
    };

    const persons: PersonDictionary = {
      jane: { displayName: "Jane Doe", email: "jane.doe@example.com" },
    };
    persons["john"] = { displayName: "John Doe", email: "john.doe@example.com" };

    console.log(persons["john"]);
    delete persons["john"];

    // const result = persons["missing"];
    // console.log(result, result?.email); //* Undefined. Runtime error if not specified manuały

    // persons["john"] = { displayName: "John Doe", emale: "john.doe@example.com" }; //* Typo Error
    console.log("persons:", persons);
  })();
}

{
  //* Dictionary

  //* Interface with an index signature
  interface IDictionary {
    [key: string]: number;
  }

  // Create a dictionary to store ages
  let ageDictionary: IDictionary = {};

  // Add entries
  ageDictionary["Alice"] = 25;
  ageDictionary["Bob"] = 30;
  ageDictionary["Charlie"] = 28;

  // Access a value
  const aliceAge = ageDictionary["Alice"]; // 25
  console.log({ aliceAge });

  // Check if a key exists
  const hasBob = "Bob" in ageDictionary; // true
  console.log({ hasBob });

  // Iterate over entries
  for (let name in ageDictionary) {
    console.log(`${name}: ${ageDictionary[name]}`);
  }

  // Remove an entry
  delete ageDictionary["Charlie"];
  console.log({ ageDictionary });

  //* Record utility type
  type StringDictionary = Record<string, string>;

  const capitals: StringDictionary = {
    USA: "Washington, D.C.",
    Canada: "Ottawa",
    Mexico: "Mexico City",
  };

  capitals["Germany"] = "Berlin";
  console.log({ capitals });
  console.log(capitals["USA"]); // Washington, D.C.
}

{
  //* Readonly Arrays and Tuples
  ((): void => {
    //* Arrays
    function reverseSorted(input: readonly number[]): number[] {
      return input.slice().sort().reverse(); //* Without slice() -> error!
    }

    const start = [1, 2, 3, 5, 4];
    const result = reverseSorted(start);
    console.log("start:", start); // [1, 2, 3, 5, 4]
    console.log("result:", result); // [5, 4, 3, 2, 1]

    const newArray: ReadonlyArray<number> = [0, 1, 2, 3];
    console.log("newArray:", newArray);

    //* Tuples
    type Point = readonly [number, number];

    function move(point: Point, x: number, y: number): Point {
      return [point[0] + x, point[1] + y]; //* Returns a new array!
    }

    const point: Point = [0, 0];
    const moved: Point = move(point, 10, 10);
    console.log("point:", point); // [0, 0]
    console.log("moved:", moved); // [10, 10]
  })();
}

{
  //* Double Assertion
  ((): void => {
    type Point2D = { x: number; y: number };
    type Point3D = Point2D & { z: number };
    type Person = { name: string; email: string };

    let point2: Point2D = { x: 0, y: 0 };
    let point3: Point3D = { x: 10, y: 10, z: 10 };
    let person: Person = { name: "John", email: "john.doe@example.com" };

    // Force assignment with Type Assertion
    point2 = point3; // No problem cause Point3D has x and y
    point3 = point2 as Point3D; // Single Assertion
    // point3 = person as Point3D; // TypeScript do not trust us
    point3 = person as unknown as Point3D; // TypeScript trust us
  })();
}

{
  //* Const Assertion
  ((): void => {
    const king = "elvis";
    // king = "john"; // Error
    const upperCased = king.toUpperCase(); // king === 'elvis'

    const dave = {
      name: "dave",
      role: "drummer",
      skills: ["drumming", "headbanging"],
    } as const; // Converts primitives to literal types, makes properties as readonly

    // dave = {
    //   name: "grohl",
    //   role: "singer",
    //   skills: ["drumming", "headbanging", "singing"],
    // }; // Error

    // dave.name = "grohl";
    // dave.role = "singer";
    // dave.skills.push("singing");

    // Apply it to the most specific point possible.
    function layout(settings: { align: "left" | "center" | "right"; padding: number }): void {
      console.log("Performing layout:", settings);
    }

    const example = {
      align: "left" as const,
      padding: 0,
    };

    layout(example);
  })();
}

{
  //* This parameter
  ((): void => {
    function double(this: { value: number }): void {
      console.log("this:", this);
      this.value = this.value * 2;
    }

    const valid = {
      value: 10,
      double,
    };
    // const invalid = {
    //   valve: 10, // Typo
    //   double,
    // };

    valid.double();
    console.log("valid.value:", valid.value); // 20
    // invalid.double(); // Error
  })();
}

{
  //* Generic Constraints
  ((): void => {
    type NameFields = {
      firstName: string;
      lastName: string;
    };

    function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
      return { ...obj, fullName: `${obj.firstName} ${obj.lastName}` };
    }

    const john = addFullName({
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
    });

    console.log("john.email:", john.email);
    console.log("john.fullName:", john.fullName);

    // const jane = addFullName({
    //   firstName: "Jane",
    // }); // Property lastName is missing
  })();
}

{
  //*  Temporal Uncertainty
  function buildExample() {
    return ["foo", null].at(Math.floor(Math.random() + 1));
  }

  let example: string | null | undefined = buildExample();
  if (example != null) {
    const exampleLocal = example;
    setTimeout(() => {
      console.log(exampleLocal.toLocaleUpperCase());
    });
  }
}

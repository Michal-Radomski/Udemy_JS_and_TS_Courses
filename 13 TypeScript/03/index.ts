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
    let dice!: number; //* Definite assignment assertion "!" (tells TypeScript that this variable will always be assigned)

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

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

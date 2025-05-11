{
  //* Lexical this
  class Person {
    private _age: number;
    constructor(_age: number) {
      this._age = _age;
    }
    // growOld(): void { //* Errors below
    //   this._age++;
    // }
    growOld = (): void => {
      this._age++;
    };
    age() {
      return this._age;
    }
  }

  const person = new Person(0);
  person.growOld();
  const growOld = person.growOld;
  setTimeout(person.growOld, 1000);
  growOld();
  setTimeout(() => console.log("age: ", person.age()), 2000);
  console.log("person:", person);
}

{
  //* Readonly modifier
  class Animal {
    public readonly name: string; //* Can't re-assign to this variable
    constructor(name: string) {
      this.name = name;
    }
  }

  const sheep = new Animal("sheep");
  console.log("sheep.name:", sheep.name); // Allow
  // sheep.name = 'wolf'; //* Disallow
}

{
  //* Union Types
  type Padding = number | string;

  /**
   * Takes a string and adds `padding` to the left.
   * If `padding` is a number, then that number of spaces is added to the left.
   * If `padding` is a string, then `padding` is appended to the left.
   */
  function padLeft(value: string, padding: Padding) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected number or string, got '${padding}'.`);
  }

  padLeft("Hello world", 4); // '    Hello world'
  padLeft("Hello world", "  "); // '  Hello world'
  padLeft("Hello world", "---"); // '---Hello world'
  // padLeft("Hello world", false); //* Error
}

{
  //* Literal Types
  // type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

  // function rollDice() {
  //   return (Math.floor(Math.random() * 6) + 1) as DiceValue;
  // }

  // Error
  // if (rollDice() === 7) {
  //   throw new Error("Not possible!");
  // }

  type Direction = "up" | "down" | "left" | "right";

  function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
  }

  move("up"); // OK
  move("down"); // OK
  // move("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.
}

{
  //* Type Narrowing
  type Square = {
    size: number;
  };

  type Rectangle = {
    width: number;
    height: number;
  };

  type Shape = Square | Rectangle;

  function area(shape: Shape): number | undefined {
    if ("size" in shape) {
      return shape.size * shape.size;
    }
    if ("width" in shape && "height" in shape) {
      return shape.width * shape.height;
    }
  }

  area({ size: 2 }); // 4
  area({ width: 2, height: 3 }); // 6

  // Class Instance
  class Cat {
    meow() {
      console.log("Meow!");
    }
  }

  class Dog {
    bark() {
      console.log("Woof!");
    }
  }

  type Animal = Cat | Dog;

  function speak(animal: Animal): void {
    if (animal instanceof Cat) {
      animal.meow();
    }
    if (animal instanceof Dog) {
      animal.bark();
    }
  }

  const cat = new Cat();
  console.log("speak(cat):", speak(cat));
}

{
  //* Discriminated Unions
  type ValidationSuccess = {
    isValid: true;
    validatedValue: string;
  };

  type ValidationFailure = {
    isValid: false;
    errorReason: string;
  };

  type ValidationResult = ValidationSuccess | ValidationFailure;

  function logResult(result: ValidationResult): void {
    if (result.isValid) {
      console.log("Success, validated value:", result.validatedValue);
    }
    if (result.isValid === false) {
      console.error("Failure, error reason:", result.errorReason);
    }
  }
  console.log('logResult({ isValid: true, validatedValue: "Ok" }):', logResult({ isValid: true, validatedValue: "Ok" }));

  // Property as its type
  type Circle = {
    kind: "circle";
    radius: number;
  };

  type Rectangle = {
    kind: "rectangle";
    height: number;
    width: number;
  };

  type Square = {
    kind: "square";
    size: number;
  };

  type Shape = Circle | Rectangle | Square;

  function area(shape: Shape): number {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "rectangle":
        return shape.height * shape.width;
      case "square":
        return shape.size * shape.size;
    }
  }

  console.log(area({ kind: "square", size: 2 })); // 4
  console.log(area({ kind: "rectangle", height: 2, width: 4 })); // 8
}

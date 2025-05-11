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
  speak(cat);
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
  logResult({ isValid: true, validatedValue: "Ok" });

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

{
  //* Class Parameter Properties
  class Person {
    constructor(public name: string, public age: number) {}
  }

  const adam = new Person("Adam", 120000);
  console.log("adam.name, adam.age:", adam.name, adam.age); // 'Adam', 120000
}

{
  //* Strict Compiler Option
  class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    move(x: number, y: number): void {
      this.x += x;
      this.y += y;
    }
  }

  const point = new Point(0, 0);
  point.move(1, 2);
  console.log("point:", point);

  type User = {
    name: string;
    age: number;
  };

  const users: User[] = [
    { name: "Oby", age: 12 },
    { name: "Heera", age: 32 },
  ];

  function getUserAge(name: string): number {
    const user = users.find((user) => user.name === name);
    if (user == null) {
      throw new Error(`User not found: ${name}`);
    }
    return user.age;
  }
  console.log('getUserAge("Oby"):', getUserAge("Oby"));
}

{
  //* Null versus Undefined
  ((): void => {
    //* const notDefined: undefined = undefined;
    //* const notPresent: null = null;

    class Point {
      public x: unknown;
      public y: unknown;
    }

    const center = new Point();
    center.x = 0;
    console.log(center.x, center.y); // 0, undefined

    function logVowels(value: string): void {
      console.log(value.match(/[aeiou]/gi));
    }

    logVowels("hello"); // ['e', 'o']
    logVowels("sky"); // null

    // Check with double equal
    console.log(undefined == undefined); // true
    console.log(null == null); // true
    console.log(undefined == null); // true

    console.log(false == null); // false
    console.log(0 == null); // false
    console.log("" == null); // false

    function someBooleanOrNullOrUndefined(): boolean | null | undefined {
      return [true, false, null, undefined].at(Math.floor(Math.random() * 3 + 1));
    }

    const result = someBooleanOrNullOrUndefined();
    console.log({ result });
    if (result == null) {
      console.log("null or undefined:", result);
    } else {
      console.log("boolean:", result);
    }

    // Guard clause
    function decorate(value: string | null | undefined) {
      if (value == null) {
        //* null == undefined!
        return value;
      }
      return `-- ${value.trim()} --`;
    }

    console.log(decorate("Hello")); // -- Hello --
    console.log(decorate(null)); // null
    console.log(decorate(undefined)); // undefined
  })();
}

{
  //* Intersection types
  type Person = {
    name: string;
  };

  type Email = {
    email: string;
  };

  type Phone = {
    phone: string;
  };

  type ContactDetails = Person & Email & Phone; //* All together!

  function contact(details: ContactDetails): void {
    console.log(`Dear ${details.name}. 
  I hope you received our email at ${details.email}.
  We will call you at ${details.phone} shortly.
  `);
  }
  contact({ name: "name", email: "name@com", phone: "123" });
}

{
  //* Optional modifier
  class Point {
    x?: number;
    y?: number;
  }

  const point = new Point();
  console.log("point.x:", point.x); // undefined
  point.x = 0;
  point.x = undefined;
}

{
  //* Non-null Assertion Operator
  (() => {
    type Point = {
      x: number;
      y: number;
    };

    let point: Point;

    function initialize(): void {
      point = { x: 0, y: 0 };
    }

    initialize(); // It is best to avoid it if you can
    console.log("After initialized:", point!.x, point!.y); // Non-null assertion operator !.

    type Person = {
      name: string;
      email?: string | null;
    };

    function sendEmail(email: string): void {
      console.log("Sent email to", email);
    }

    function ensureContactable(person: Person): void {
      if (person.email == null) {
        throw new Error(`Person ${person.name} is not contactable`);
      }
    }

    function contact(person: Person): void {
      ensureContactable(person);
      sendEmail(person.email!); // It can be avoided moving the null condition inside the function
    }

    const person: Person = { name: "Michal", email: "michal@com.pl" };
    contact(person);
  })();
}

{
  //* Interfaces & Types
  (() => {
    // With type aliases
    type Point2D = {
      x: number;
      y: number;
    };

    type Point3D = Point2D & { z: number }; //* All together! (equivalent to extend in interfaces)

    const pointWithType: Point3D = {
      x: 0,
      y: 0,
      z: 0,
    };

    // With instances
    interface Point2DI {
      x: number;
      y: number;
    }

    interface Point3DI extends Point2DI {
      z: number;
    }

    const pointWithInterface: Point3DI = {
      x: 0,
      y: 0,
      z: 0,
    };

    console.log({ pointWithType, pointWithInterface });
  })();
}

{
  //* Interface Declaration Merging
  // Express Base
  interface Request {
    body: any;
  }

  // Express JSON
  interface Request {
    json: any;
  }

  // Our App
  // function handleRequest(req: Request) {
  //   req.body;
  //   req.json;
  // }

  interface User {
    id: number;
    name: string;
  }

  interface User {
    age: number;
    isActive: boolean;
  }

  // TypeScript merges them into a single interface containing all properties (id, name, age, and isActive)
  const user: User = {
    id: 1,
    name: "Alice",
    age: 30,
    isActive: true,
  };
  console.log("user:", user);
}

{
  //* Types vs Interfaces
  interface InputPropsI {
    type: "text" | "email";
    value: string;
    onChange: (newValue: string) => void;
  }

  const test1: InputPropsI = { type: "text", value: "string", onChange: (val: string) => console.log(val) };
  console.log("test1:", test1);

  type InputOnChange = (newValue: InputValue) => void;
  type InputValue = string;
  type InputType = "text" | "email";

  type InputProps = {
    type: InputType;
    value: InputValue;
    onChange: InputOnChange;
  };
  const test2: InputProps = { type: "text", value: "string", onChange: (val: string) => console.log(val) };
  console.log("test2:", test2);
}

{
  //* Never Type
  // TypeScript infers return type but we are explicit here for demo
  // function fail(message: string): never {
  //   throw new Error(message);
  // }
  // fail("test");
}

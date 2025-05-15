{
  //* Partial<T>
  ((): void => {
    // Makes all properties in T optional (implemented by TypeScript)
    // type Partial<T> = { [P in keyof T]?: T[P] };

    type Point = { x: number; y: number };
    // Same as { x?: number, y?: number }
    type PartialPoint = Partial<Point>;
    //     type PartialPoint = {
    //     x?: number | undefined;
    //     y?: number | undefined;
    // }

    // Use case
    class State<T> {
      constructor(public current: T) {}
      update(next: Partial<T>) {
        this.current = { ...this.current, ...next };
      }
    }

    const state = new State({ x: 0, y: 0 });
    state.update({ y: 1 });
    console.log(state.current); // { x: 0, y: 1 }
  })();
}

{
  //* Omit
  interface User {
    id: string;
    name: string;
    email: string;
    age: number;
  }

  // Create a new type by omitting the 'email' property from User
  type UserWithoutEmail = Omit<User, "email">;
  //   type UserWithoutEmail = {
  //     id: string;
  //     name: string;
  //     age: number;
  // }

  const user: UserWithoutEmail = {
    id: "123",
    name: "Alice",
    age: 30,
    // email: "alice@example.com" // Error: Property 'email' does not exist on type 'UserWithoutEmail'
  };
}

{
  //* Pick -> removes all but the specified keys from an object type.
  interface Person {
    name: string;
    age: number;
    location?: string;
  }

  const bob: Pick<Person, "name"> = {
    name: "Bob",
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };
}

{
  //* Exclude -> Exclude removes types from a union
  type Primitive = string | number | boolean;
  const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
}

{
  //* Parameters ->  extracts the parameter types of a function type as an array
  // A sample function with two parameters
  function greet(name: string, age: number): string {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }

  // Extract the parameter types of the greet function as a tuple
  type GreetParams = Parameters<typeof greet>; // [string, number]
  //* type GreetParams = [name: string, age: number]

  // Use the extracted parameter types to define an argument array
  const args: GreetParams = ["Alice", 30];

  // Call the function using the typed arguments
  console.log(greet(...args)); // Output: Hello, my name is Alice and I am 30 years old.
}

{
  //* Required<T>
  ((): void => {
    // Makes all properties in T required (already implemented by TypeScript)
    //* type Required<T> = { [P in keyof T]-?: T[P] };

    type PartialPoint = { x?: number; y?: number };
    type Point = Required<PartialPoint>; // Same as { x: number, y: number }

    // Use case
    // Optional members for consumers
    type CircleConfig = {
      color?: string;
      radius?: number;
    };

    class Circle {
      // Required: all members will be present
      private config: Required<CircleConfig>;
      constructor(config: CircleConfig) {
        this.config = {
          color: config.color ?? "black",
          radius: config.radius ?? 0,
        };
      }
      draw() {
        // No null check needed
        console.log(`
      Drawing a circle.
      Color: ${this.config.color}
      Radius: ${this.config.radius}
      `);
      }
    }
  })();
}

{
  //* Readonly<T>
  (() => {
    // Makes all properties in T readonly (already implemented by TypeScript)
    //* type Readonly<T> = { readonly [P in keyof T]: T[P] };

    type Point = { x: number; y: number };
    // Same as { readonly x: number, readonly y: number }
    type ReadonlyPoint = Readonly<Point>;
    //     type ReadonlyPoint = {
    //     readonly x: number;
    //     readonly y: number;
    // }

    // Use case
    function makeReadonly<T>(object: T): Readonly<T> {
      return Object.freeze({ ...object });
    }

    const editablePoint = { x: 0, y: 0 };
    editablePoint.x = 2; // Allowed
    const readonlyPoint = makeReadonly(editablePoint);
    // readonlyPoint.x = 3; // Not allowed
  })();
}

{
  //* Record<K,V>
  (() => {
    // Construct a type with a set of properties of K of type T (already implemented by TypeScript)
    //* type Record<K extends keyof any, T> = { [P in K]: T };

    type People = Record<string, { name: string; role: string }>;
    const people: People = {};
    people["001"] = { name: "John", role: "admin" };
    people["002"] = { name: "Jane", role: "owner" };
    // people["003"] = { name: "Foo" }; // Error: role is missing

    type PeopleVerbose = { [key: string]: { name: string; role: string } };

    // Use case: Safe access to properties
    type Role = "admin" | "owner";
    let peopleWithRoles: Record<Role, string[]> = {
      admin: ["John"],
      owner: ["Jane", "Foo"],
    };
    // peopleWithRoles = {owner: ["Jane", "Foo"],}; // Error: admin is missing

    const admins: string[] = peopleWithRoles["admin"]; // Safe. Never undefined
    console.log({ admins });

    // Use case: Quick Type creation
    // Same as { x: number, y: number }
    type Point = Record<"x" | "y", number>;

    // Use case: Reduce verbosity
    type PageInfo = {
      id: string;
      title: string;
    };

    type PagesVerbose = {
      home: PageInfo;
      services: PageInfo;
      about: PageInfo;
      contact: PageInfo;
    };

    type Pages = Record<"home" | "services" | "about" | "contact", { id: string; title: string }>;
  })();
}

{
  //* AutoComplete Literal Unions with Primitives
  ((): void => {
    type Padding = "small" | "normal" | "large" | (string & {});

    function getPadding(padding: Padding): string {
      switch (padding) {
        case "small":
          return "12px";
        case "normal":
          return "16px";
        case "large":
          return "24px";
        default:
          return padding;
      }
    }

    let padding: Padding;
    padding = "small";
    padding = "8px";
    padding = ""; // Check autocomplete
  })();
}

{
  //* Override
  class Vehicle {
    startEngine() {
      console.log("Engine started");
    }
  }

  class Car extends Vehicle {
    override startEngine() {
      console.log("Car engine started with a roar!");
    }
  }

  const myCar = new Car();
  myCar.startEngine(); // Output: Car engine started with a roar!
}

{
  //* Undefined vs Optional
  ((): void => {
    // Optional
    type ExampleOptional = {
      name?: string;
    };
    let optional: ExampleOptional;

    optional = { name: undefined };
    optional = {};

    // Undefined
    type ExampleUndefined = {
      name: string | undefined;
    };
    let undef: ExampleUndefined;
    undef = { name: undefined };
    // undef = {} // Error: name is missing

    // Use Optional unless you have the necessity of having a property with undefined value. E.g:
    function setConfig(config: { name: string; priority?: number }) {}

    setConfig({ name: "CaseA", priority: undefined });
    setConfig({ name: "CaseB", priority: 1 });
    setConfig({ name: "CaseC" });
  })();
}

{
  //* Satisfies operator
  ((): void => {
    type Color = "red" | "green" | "blue";
    type RGB = [red: number, green: number, blue: number];
    type Palette = Record<Color, string | RGB>;

    const palette = {
      red: "red",
      green: [0, 255, 0],
      blue: "#0000ff",
    } satisfies Palette;

    const greenLevel = palette.green.at(1);
    const redUpperCased = palette.red.toUpperCase();
    const blueLevel = palette.blue.slice(-2);

    console.log({ greenLevel }); // 255
    console.log({ redUpperCased }); // RED
    console.log({ blueLevel }); // ff

    type personName = "John" | "Jack" | "Justin";
    type otherDetails = {
      id: number;
      age: number;
    };
    type personInfo = personName | otherDetails;

    type Person = {
      myInfo: personInfo;
      myOtherInfo: personInfo;
    };

    const applicant = {
      myInfo: "John",
      myOtherInfo: { id: 123, age: 22 },
    } satisfies Person;
  })();
}

{
  //* PropertyKey
  ((): void => {
    const str: string = "key";
    const num: number = 123;
    const sym: symbol = Symbol();

    // Valid object keys
    const valid = {
      [str]: "valid",
      [num]: "valid",
      [sym]: "valid",
    };

    const obj = {};

    // Anything else is invalid
    // const invalid = { [obj]: "invalid" };

    type ValidKey = keyof any; // Already created by TypeScript as...

    let example: PropertyKey;
    //* type PropertyKey = string | number | symbol
    example = str;
    example = num;
    example = sym;
    // example = obj; // Invalid
  })();
}

{
  //* ThisType<T> Utility
  ((): void => {
    // Example A
    type Math = {
      double(): void;
      half(): void;
    };

    // Single declaration for this type
    const math: Math & ThisType<{ value: number }> = {
      double() // this: { value: number }
      {
        this.value *= 2;
      },
      half() // this: { value: number }
      {
        this.value /= 2;
      },
    };

    const obj = {
      value: 1,
      ...math,
    };

    obj.double();
    console.log(obj.value); // 2
    obj.half();
    console.log(obj.value); // 1
    // obj.value.toUpperCase(); // Error

    // Example B
    type StateDescription<D, M> = {
      data: D;
      methods: M & ThisType<D & M>; // this refers to anything within data and methods
    };

    function createState<D, M>(description: StateDescription<D, M>): D & M {
      return { ...description.data, ...description.methods };
    }

    let state = createState({
      data: { x: 0, y: 0 },
      methods: {
        moveBy(dx: number, dy: number) {
          this.x += dx;
          this.y += dy;
        },
      },
    });

    state.x = 10;
    state.y = 20;
    state.moveBy(5, 5);
  })();
}

{
  // * Awaited<T> Utility
  ((): void => {
    async function main(): Promise<void> {
      const single: Promise<string> = new Promise((result) => result("Foo"));
      // The promise of a promise of a promise is a promise
      const triple: Promise<Promise<Promise<string>>> = new Promise<Promise<Promise<string>>>((result) =>
        result(new Promise<Promise<string>>((result) => new Promise<string>((result) => result("Bar"))))
      );

      const singleResult = await single;
      console.log(singleResult); // Foo
      const tripleResult = await triple; // TypeScript detects that variable is string type
      console.log(tripleResult); // Bar
    }

    type WrappedInDeep = Promise<Promise<Promise<string>>>;
    type AwaitedResult = Awaited<WrappedInDeep>; //* = string!

    async function example<T>(input: T): Promise<T> {
      const output: Awaited<T> = await input;
      return output;
    }

    (async function (): Promise<void> {
      const x: string = await example("x");
      console.log({ x });
    })();
  })();
}

{
  //* String Manipulation Utilities
  (): void => {
    type TypeA = Uppercase<"type_a">; // TYPE_A
    type TypeB = Lowercase<"TYPE_B">; // type_b
    type TypeC = Capitalize<"type_c">; // Type_c
    type TypeD = Uncapitalize<"Type_d">; // tYPE_D

    // Use case (combined with template literal type)
    type Getter<T extends string> = `get${Capitalize<T>}`;
    type Setter<T extends string> = `set${Capitalize<T>}`;

    type Name = "name";
    type GetName = Getter<Name>;
    type SetName = Setter<Name>;
  };
}

//* Mapped Types as Clauses
// type Getters<State> = {
//   [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
// };

// type Setters<State> = {
//   [K in keyof State & string as `set${Capitalize<K>}`]: (value: State[K]) => void;
// };

// // Use case
// type Store<State> = Setters<State> & Getters<State>;
// type PersonState = {
//   age: number;
//   name: string;
// };
// type PersonStore = Store<PersonState>;

// declare const personStore: PersonStore;
// personStore.setAge(30);
// personStore.setName("John");
// console.log("personStore.getAge():", personStore.getAge()); // 30
// console.log("personStore.getName():", personStore.getName()); // 'John'

{
  //* TypeScript Unions vs Intersection Mental Model
  type Name = { name: string };
  type Age = { age: number };

  // Union: A-AB-B
  type Union = Age | Name; //* Properties from Name or Age or from both (but not designed for both)
  // Intersection: AB
  type Intersection = Age & Name; //* Must contain properties from Name and Age

  const age = { age: 30 };
  const name = { name: "John" };
  const nameAndAge = { age: 30, name: "John" };

  let union: Union;
  union = name;
  union = age;
  union = nameAndAge;

  let intersection: Intersection;
  intersection = nameAndAge;
  // intersection = age // Error
  // intersection = name // Error
}

{
  //* TypeScript Enums are Bad!
  // Unexpected behavior on numeric enums
  enum Enum {
    app = 0,
    email = 1,
    social = 2,
  }

  console.log("Enum['app']:", Enum["app"]); // 0
  console.log("Enum[0]:", Enum[0]); // 'app'

  const keys = Object.keys(Enum);
  console.log({ keys });
  // Expected: ['app', 'email', 'social']
  // Actual: ['0', '1', '2', 'app', 'email', 'social']

  // Fixed by string enums, but violates DRY
  enum Enum2 {
    app = "app",
    email = "email",
    social = "social",
  }

  const keys2 = Object.keys(Enum2);
  console.log({ keys2 }); // ['app', 'email', 'social']
  console.log("Enum2.app:", Enum2.app); // 'app'

  //- Alternatives
  //* String literal union
  ((): void => {
    type AltToEnum = "app" | "email" | "social";

    function doSomething(alt: AltToEnum) {}

    doSomething("app"); // Check refactoring of type
    // doSomething('') // Check autocomplete
  })();

  //* Object as const
  ((): void => {
    const AltToEnum = {
      device: "device",
      email: "email",
      social: "social",
    } as const;

    type AltToEnum = keyof typeof AltToEnum;

    function doSomething(alt: AltToEnum) {}

    doSomething("device");
    doSomething(AltToEnum.device);
    Object.keys(AltToEnum); // ['device', 'email', 'social']
  })();
}

{
  //* Mixin
  // Define a generic constructor type
  type Constructor<T = {}> = new (...args: any[]) => T;

  // Define a mixin function that adds a timestamp property and method
  function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      timestamp = new Date();
      getTimestamp() {
        return this.timestamp;
      }
    };
  }

  // A simple base class
  class Message {
    content: string;
    constructor(content: string) {
      this.content = content;
    }
  }

  // Apply the mixin to create a new class
  const TimestampedMessage = Timestamped(Message);

  // Use the new class with mixin functionality
  const message = new TimestampedMessage("Hello, mixins!");
  console.log("message.content:", message.content); // Output: Hello, mixins!
  console.log("message.getTimestamp():", message.getTimestamp()); // Output: current timestamp

  //* Example 2
  class Disposable {
    isDisposed = false;
    dispose(): void {
      this.isDisposed = true;
    }
  }

  class Activatable {
    isActive = false;
    activate(): void {
      this.isActive = true;
    }
    deactivate(): void {
      this.isActive = false;
    }
  }

  class SmartObject implements Disposable, Activatable {
    isDisposed = false;
    dispose!: () => void;
    isActive = false;
    activate!: () => void;
    deactivate!: () => void;

    interact(): void {
      this.activate();
    }
  }

  // Helper function to copy methods from mixins to target class
  function applyMixins(derivedCtor: any, baseCtors: any[]): void {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
    });
  }

  applyMixins(SmartObject, [Disposable, Activatable]);

  const smartObj = new SmartObject();
  smartObj.interact();
  console.log("smartObj.isActive:", smartObj.isActive); // true
  smartObj.dispose();
  console.log("smartObj.isDisposed:", smartObj.isDisposed); // true
}

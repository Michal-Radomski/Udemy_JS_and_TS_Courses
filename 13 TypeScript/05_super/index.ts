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

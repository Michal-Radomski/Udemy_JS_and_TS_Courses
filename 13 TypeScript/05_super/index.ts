{
  //* Partial<T>
  (() => {
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

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

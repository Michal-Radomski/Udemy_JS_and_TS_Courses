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

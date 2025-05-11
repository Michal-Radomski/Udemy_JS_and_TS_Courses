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

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
  (() => {
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

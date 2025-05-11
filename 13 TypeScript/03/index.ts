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
    voice() {
      return "meow";
    }
  }

  class Dog implements Animal {
    constructor(public name: string) {}
    voice() {
      return "woof";
    }
  }

  log(new Cat("Salem")); // Animal Salem: meow
  log(new Dog("Lassie")); // Animal Lassie: woof
}

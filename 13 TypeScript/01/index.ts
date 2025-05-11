{
  //* 01 Intro
  let message: string = "Hello world";
  message += " again";
  console.log("message:", message);
}

{
  //* 02 Primitives
  const isPresent: boolean = false;
  const magic: number = 66.6;
  const hello: string = "world";
  console.log("isPresent, magic, hello:", isPresent, magic, hello);

  const notDefined: undefined = undefined;
  const notPresent: null = null;
  console.log("notPresent, notDefined:", notPresent, notDefined);

  const penta: symbol = Symbol("star");
  const biggy: bigint = 24n;
  console.log("penta, biggy:", penta, biggy);
}

{
  //* 03 Instance Types
  const regexp: RegExp = new RegExp("ab+c");
  const array: Array<number> = [1, 2, 3];
  const set: Set<number> = new Set([1, 2, 3]);
  console.log("regexp, array, set:", regexp, array, set);

  class Queue<T> {
    private data: Array<T> = [];
    push(item: T) {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.shift();
    }
  }

  const queue: Queue<number> = new Queue();
  console.log("queue:", queue);
}

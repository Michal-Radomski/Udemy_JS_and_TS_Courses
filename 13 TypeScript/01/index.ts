{
  let message: string = "Hello world";
  message += " again";
  console.log("message:", message);
}

{
  const regexp: RegExp = new RegExp("ab+c");
  const array: Array<number> = [1, 2, 3];
  const set: Set<number> = new Set([1, 2, 3]);
  console.log("regexp, array, set:", regexp, array, set);

  /** A first in first out collection */
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

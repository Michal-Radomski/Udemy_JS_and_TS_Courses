export {};
//^ Stack

class Node {
  next: Node | null;
  value: string;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  first: Node | null;
  last: Node | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val: string): number {
    const newNode: Node = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop(): string | null {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const stack: Stack = new Stack();
stack.push("HELLO");
stack.push("GOODBYE");
stack.push("!");
stack.pop();

console.log("stack:", stack);

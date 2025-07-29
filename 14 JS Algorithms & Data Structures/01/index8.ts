export {};
//^ Doubly Linked Lists
class Node {
  next: Node | null;
  val: string;
  prev: Node | null;
  constructor(val: string) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: string): this {
    const newNode: Node = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): Node | undefined {
    if (!this.head) return undefined;
    const poppedNode = this.tail as Node;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail!.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift(): Node | undefined {
    if (this.length === 0) return undefined;
    const oldHead = this.head as Node;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head!.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val: string): this {
    const newNode: Node = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number): Node | null {
    if (index < 0 || index >= this.length) return null;
    let count: number, current: Node | null;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current!.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current!.prev;
        count--;
      }
    }
    return current;
  }

  set(index: number, val: string): boolean {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: string): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode: Node = new Node(val);
    const beforeNode = this.get(index - 1) as Node;
    const afterNode = beforeNode.next as Node;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index: number): Node | undefined {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index) as Node;
    const beforeNode = removedNode.prev as Node;
    const afterNode = removedNode.next as Node;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
list.push("Test");
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.pop();
list.shift();
list.unshift("Test2");
console.log("list.get(1):", list.get(1));
list.set(1, "Hello");
list.set(2, "Goodbye");
list.insert(2, "Inserted Value");
list.remove(2);

console.log("list:", list);

export {};
//^ Singly Linked List
// Piece of data -> val
// Reference to next node -> next

class Node {
  next: Node | null;
  val: string;
  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //* Removing the last node
  pop(): Node | undefined {
    if (!this.head) return undefined;
    let current: Node = this.head;
    let newTail: Node = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //* Removing the first node
  shift(): Node | undefined {
    if (!this.head) return undefined;
    let currentHead: Node = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val: string): this {
    let newNode: Node = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number): Node | null {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current!.next;
      counter++;
    }
    return current;
  }

  set(index: number, val: string): boolean {
    const foundNode: Node | null = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: string): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode: Node = new Node(val);
    const prev = this.get(index - 1) as Node;
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index: number): Node | undefined {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1) as Node;
    const removed = previousNode.next as Node;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse(): this {
    let node = this.head as Node;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next as Node;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print(): void {
    const arr = [] as string[];
    let current = this.head as Node;
    while (current) {
      arr.push(current.val);
      current = current.next as Node;
    }
    console.log("arr:", arr);
  }
}

const list = new SinglyLinkedList();
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
list.print();

console.log("list:", list);
console.log("JSON.stringify(list):", JSON.stringify(list));

list.reverse();
list.print();

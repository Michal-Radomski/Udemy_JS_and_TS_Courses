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
}

const list = new DoublyLinkedList();
list.push("Test");
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.pop();
list.shift();
list.unshift("Test2");

console.log("list:", list);

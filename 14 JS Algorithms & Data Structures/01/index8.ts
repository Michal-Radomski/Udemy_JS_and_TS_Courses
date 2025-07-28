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
}

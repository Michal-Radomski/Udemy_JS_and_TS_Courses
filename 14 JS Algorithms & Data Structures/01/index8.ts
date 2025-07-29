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
    var newNode: Node = new Node(val);
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
}

const list = new DoublyLinkedList();
list.push("Test");
list.push("HELLO");
list.push("GOODBYE");
list.push("!");

console.log("list:", list);

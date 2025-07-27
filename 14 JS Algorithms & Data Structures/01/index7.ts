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

  push(val: string) {
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
}

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
console.log("list:", list);

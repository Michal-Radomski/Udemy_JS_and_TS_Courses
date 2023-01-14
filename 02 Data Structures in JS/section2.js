// Linked List

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

const LL = new LinkedList();
console.log("LL:", LL);
const node1 = new Node(100, "node2", null);
console.log("node1:", node1);

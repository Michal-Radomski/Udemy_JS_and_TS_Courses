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

// const LL = new LinkedList();
// console.log("LL:", LL);
// const node1 = new Node(100, "node2", null);
// console.log("node1:", node1);

LinkedList.prototype.addToHead = function (value) {
  let newNode = new Node(value, this.head, null);

  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

const ll = new LinkedList();
console.log("ll:", ll);
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
console.log("ll:", ll);

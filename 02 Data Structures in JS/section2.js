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

// const ll = new LinkedList();
// console.log("ll:", ll);
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);
// console.log("ll:", ll);

LinkedList.prototype.addToTail = function (value) {
  let newNode = new Node(value, null, this.tail);

  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

// const myLL = new LinkedList();

// myLL.addToTail(10);
// myLL.addToTail(20);
// myLL.addToTail(30);
// myLL.addToHead(100);
// myLL.addToHead(200);
// myLL.addToHead(300);

// // console.log("myLL.tail.prev.prev:", myLL.tail.prev.prev);
// // console.log("myLL:", myLL);
// console.log("myLL.tail.prev.prev.prev.prev.prev:", myLL.tail.prev.prev.prev.prev.prev);

LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return null;
  }
  let val = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return val;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) {
    return null;
  }
  let val = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  return val;
};

// const myLL = new LinkedList();

// myLL.addToTail(10);
// myLL.addToTail(20);
// myLL.addToTail(30);
// myLL.addToHead(100);
// myLL.addToHead(200);
// myLL.addToHead(300);

// console.log("myLL:", myLL);

// myLL.removeTail();
// myLL.removeTail();

// console.log("myLL:", myLL);

LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === searchValue) {
      return currentNode.value;
    } else {
      currentNode = currentNode.next;
    }
  }
  return null;
};

const myLL = new LinkedList();

myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
myLL.addToHead(100);
myLL.addToHead(200);
myLL.addToHead(300);

console.log("myLL:", myLL);

console.log("myLL.search(30):", myLL.search(30));
console.log("myLL.search(80):", myLL.search(80));

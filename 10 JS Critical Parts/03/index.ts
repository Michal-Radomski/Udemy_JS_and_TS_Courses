//@ JS Modules
//* Module Pattern: Basic form (using literal notation)
// const MyApp = {} as any;
// MyApp.MyModule = (function () {
//   const privateVariable = 1;
//   const publicVariable = 2;
//   const publicFunction = function () {
//     return 3;
//   };
//   return {
//     publicVariable: publicVariable,
//     publicFunction: publicFunction,
//   };
// })();
// console.log(MyApp.MyModule.privateVariable); // undefined
// console.log(MyApp.MyModule.publicVariable); // 2
// console.log(MyApp.MyModule.publicFunction()); // 3

//* Module Pattern: Basic form (using an object)
// const MyApp = {} as any;
// MyApp.MyModule = (function () {
//   const module = {} as any;
//   const privateVariable = 1;
//   module.publicVariable = 2;
//   module.publicFunction = function () {
//     return 3;
//   };
//   return module;
// })();
// console.log(MyApp.MyModule.privateVariable); // undefined
// console.log(MyApp.MyModule.publicVariable); // 2
// console.log(MyApp.MyModule.publicFunction()); // 3

//* Revealing Module Pattern
// const createSupplier = (function () {
//   // Private
//   const name = "General Motors";
//   const field = "automobile";
//   const getSupplierName = () => name;
//   const getSupplierField = () => field;

//   // Public
//   return {
//     name,
//     field,
//     getName: () => getSupplierName(),
//     getField: () => getSupplierField(),
//   };
// })();

// console.log("createSupplier.name:", createSupplier.name);
// console.log("createSupplier.field:", createSupplier.field);
// console.log("createSupplier.getName():", createSupplier.getName());

//* CommonJS Modules -> separate files
//* CommonJS in Browsers -> using a bundler (webpack)
//* AMD and UMD Modules -> separate files

//* Native Modules -> Module level scope, this is undefined
// import yellName from "./utilsTS";

// console.log("This is index.ts");
// console.log("yellName('Steven Hancock'):", yellName("Steven Hancock"));

//@ Data Structures
// //* The Big O Notation
// // O(n) -> Linear
// const factor = function (num: number) {
//   let result = num;
//   if (num === 0 || num === 1) return 1;
//   while (num > 1) {
//     num--;
//     result *= num;
//   }
//   return result;
// };
// console.log("factor(5):", factor(5));

// // O(1) -> Static
// const aBigint = function (num: number) {
//   console.log("num / Number.MAX_SAFE_INTEGER:", num / Number.MAX_SAFE_INTEGER);
//   return BigInt(num * Number.MAX_SAFE_INTEGER);
// };
// console.log("aBigint(1):", aBigint(1));

// // O(n^2) -> Square
// const multiplyMatrix = function (n: number) {
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       // console.log(i + " * " + j + " = " + i * j);
//       console.log(`${i}*${j} = ${i * j}`);
//     }
//   }
// };
// multiplyMatrix(5);

//* Looking at Objects and Arrays Through Big O -> https://www.bigocheatsheet.com/
//* Big o for objects
// Insertion  obj.active = true;        -> O(1)
// Deletion   delete obj.instructor;    -> O(1)
// Searching  for (let prop in obj {})  -> O(n)
// Access     obj.fName;                -> O(1)

// const obj = {
//   fName: "Steven",
//   lName: "Hancock",
//   fullName() {
//     return `${this.fName} ${this.lName}`;
//   },
//   instructor: true,
// };
// console.log("obj.instructor:", obj.instructor);

//* Big O for Arrays
// Insertion  array1.push(true);           -> O(1) depends
//            array1.unshift(false);       -> O(n)
// Deletion   array1.pop();                -> O(1) depends
//            array1.shift();              -> O(n)
// Searching  for (let elem of array1) {}  -> O(n)
// Access     array1[2];                   -> O(1)

// const array = [1, 2, "string", {}];
// console.log("array[1]:", array[1]);

//* Linked List Example + Exercise
// class LinkedNode {
//   value: number;
//   next: null;
//   constructor(val: number) {
//     this.value = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   head: LinkedNode | null;
//   tail: LinkedNode | null;
//   size: number;
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   // Add node to list
//   add(val: number) {
//     // console.log({ val });
//     const node = new LinkedNode(val);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this!.tail!.next = node as any;
//       this.tail = node;
//     }
//     this.size++;
//     return this;
//   }

//   // Remove the tail from list
//   remove() {
//     if (!this.head) return undefined;

//     // find the node right before the tail
//     let curNode = this.head;
//     let newTail = curNode;
//     while (curNode.next) {
//       newTail = curNode;
//       curNode = curNode.next;
//     }
//     // set the new tail
//     newTail.next = null;
//     this.tail = newTail;
//     // establish size
//     this.size--;
//     if (this.size === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return curNode;
//   }

//   // Insert a node at a specific index
//   insertAt(val: number, index: number) {
//     // console.log({ val, index });
//     if (index < 0 || index > this.size) return null;
//     if (index === this.size) return this.add(val);
//     const node = new LinkedNode(val);

//     if (index === 0) {
//       node.next = this.head as any;
//       this.head = node;
//     } else {
//       let prevNode: any = this.getNode(index - 1);
//       let tmpNode = prevNode.next;
//       node.next = tmpNode;
//       prevNode.next = node;
//     }
//     this.size++;
//     return node;
//   }

//   // Remove node from specific index

//   removeAt(index: number) {
//     // console.log({ index });
//     if (index < 0 || index > this.size) return null;
//     if (index === this.size - 1) return this.remove();

//     let currentNode, nextNode, prevNode;
//     if (index === 0) {
//       currentNode = this.head;
//       nextNode = currentNode?.next;
//       currentNode!.next = null;
//       this.head = nextNode as any;
//     } else {
//       prevNode = this.getNode(index - 1);
//       currentNode = (prevNode as any).next;
//       (prevNode as any).next = currentNode.next;
//       currentNode.next = null;
//     }
//     this.size--;
//     return currentNode;
//   }

//   // Get index for specific node
//   // Not currently coded to work for objects; only primitives
//   getIndex(val: number) {
//     // console.log({val})
//     let currentNode = this.head;
//     let cnt = 0;

//     while (currentNode !== null) {
//       if (currentNode.value === val) {
//         return cnt;
//       }
//       cnt++;
//       currentNode = currentNode.next;
//     }
//     return -1;
//   }

//   // Get node for specific index
//   getNode(index: number) {
//     console.log({ index });
//     if (index < 0 || index >= this.size) return null;
//     if (index === this.size - 1) return this.tail;

//     let cnt = 0,
//       currentNode = this.head;
//     // find node at index entered
//     while (cnt !== index) {
//       currentNode = currentNode!.next;
//       cnt++;
//     }
//     return currentNode;
//   }
// }

// const list = new LinkedList();
// list.add(56);
// list.add(76);
// list.add(100);
// list.add(101);
// list.remove();
// console.log("list:", list, typeof list);

//* Stack Intro
// (function testFunction() {
//   console.log("Test function");
//   function one(num: number) {
//     console.log(num, "Function one");
//     two(2);
//   }
//   function two(num: number) {
//     console.log(num, "Function two");
//   }
//   one(1);
//   two(3);
// })();

//* Stack Data Structure
// class Stack {
//   items: number[];
//   size: number;
//   constructor() {
//     this.items = [];
//     this.size = 0;
//   }

//   push(item: number) {
//     this.items.push(item);
//     return ++this.size;
//   }
//   pop() {
//     if (this.size === 0) return null;
//     this.size--;
//     return this.items.pop();
//   }

//   check() {
//     return this.items[this.size - 1];
//   }
// }

// const stack = new Stack();
// console.log(1, "stack:", stack);
// stack.push(5);
// stack.push(6);
// stack.push(7);
// console.log(2, "stack:", stack);
// stack.pop();
// console.log(3, "stack:", stack);
// console.log("stack.size:", stack.size);

//* Queues Data Structure
// class Queue {
//   items: { [key: string]: number };
//   front: number;
//   back: number;
//   size: number;
//   constructor() {
//     this.items = {};
//     this.front = 0;
//     this.back = 0;
//     this.size = 0;
//   }

//   enqueue(item: number) {
//     this.items[this.back as keyof typeof this.items] = item;
//     this.back++;
//     return ++this.size;
//   }

//   dequeue() {
//     if (this.size === 0) return null;
//     const item = this.items[this.front as keyof typeof this.items];
//     delete this.items[this.front as keyof typeof this.items];
//     this.front++;
//     this.size--;
//     return item;
//   }

//   check() {
//     return this.items[this.front as keyof typeof this.items];
//   }
// }

// const queue = new Queue();
// console.log("queue:", queue);
// queue.enqueue(50);
// queue.enqueue(60);
// queue.enqueue(70);
// console.log("queue:", queue);
// queue.dequeue();
// console.log("queue:", queue);

//* Binary Search Tree -> is very efficient!
//               23
//          21        30
//      10         25      36
//  8       15
//      12      17

class NodeTree {
  value: number;
  left: NodeTree | null;
  right: NodeTree | null;
  constructor(val: number) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: null | NodeTree;
  constructor() {
    this.root = null;
  }

  add(val: number) {
    const newNode = new NodeTree(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let node = this.root;
    while (true) {
      if (val === node.value) return this;
      if (val < node.value) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        }
        node = node.left;
      } else {
        if (node.right === null) {
          node.right = newNode;
          return this;
        }
        node = node.right;
      }
    }
  }

  get(val: number) {
    if (this.root === null) return null;
    let node = this.root,
      found = false;
    while (node && !found) {
      if (val < node.value) {
        node = node.left as NodeTree;
      } else if (val > node.value) {
        node = node.right as NodeTree;
      } else {
        found = true;
      }
    }
    if (!found) return null;
    return node;
  }

  contains(val: number) {
    if (this.root === null) return false;
    let node = this.root,
      found = false;
    while (node && !found) {
      if (val < node.value) {
        node = node.left as NodeTree;
      } else if (val > node.value) {
        node = node.right as NodeTree;
      } else {
        return true;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
console.log("tree:", tree);
tree.add(23);
tree.add(21);
tree.add(30);
console.log("tree:", tree);
tree.add(10);
tree.add(25);
tree.add(36);
tree.add(8);
tree.add(15);
tree.add(12);
tree.add(17);
console.log("tree:", tree);

console.log("tree.get(20):", tree.get(20)); // null
console.log("tree.get(10):", tree.get(10));

console.log("tree.contains(20):", tree.contains(20)); // null
console.log("tree.contains(10):", tree.contains(10)); // true

//@ Appendix
// null -> variable assigned by developer;
// undefined -> variable assigned by system;

// console.log("Math.SQRT2:", Math.SQRT2);

// const date = new Date();
// const date2 = Date.now();
// console.log({ date, date2 }, Number(date) - date2);

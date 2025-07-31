export {};
//^ Tree Traversal

//* Breadth First Search
class Node {
  value: number;
  left: null | Node;
  right: null | Node;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: Node | null;
  constructor() {
    this.root = null;
  }

  insert(value: number): this | undefined {
    const newNode: Node = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current: Node = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value: number): false | Node | undefined {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left as Node;
      } else if (value > current.value) {
        current = current.right as Node;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value: number): boolean {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left as Node;
      } else if (value > current.value) {
        current = current.right as Node;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS(): number[] {
    let node = this.root,
      data = [],
      queue = [] as Node[];
    queue.push(node as Node);

    while (queue.length) {
      node = queue.shift() as Node;
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

//      10
//   6     15
// 3  8  11  20

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(11);
tree.insert(20);
console.log("tree:", tree);
console.log("tree.BFS():", tree.BFS());

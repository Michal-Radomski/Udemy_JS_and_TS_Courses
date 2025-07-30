export {};
//^ Tree / Binary Tree / Binary Search Trees
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
}

//      10
//   5     13
// 2  7  11  16

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log("tree.contains(16):", tree.contains(16));
console.log("tree.find(16):", tree.find(16));
console.log("JSON.stringify(tree):", JSON.stringify(tree));

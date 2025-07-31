export {};
//^ Tree Traversal

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

  //^ Breadth First Search
  BFS(): number[] {
    let node = this.root as Node,
      data = [],
      queue = [] as Node[];
    queue.push(node);

    while (queue.length) {
      node = queue.shift() as Node;
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //^ Depth First Search
  //* PreOrder
  DFSPreOrder(): number[] {
    const data = [] as number[];
    function traverse(node: Node): void {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root as Node);
    return data;
  }

  //* PostOrder
  DFSPostOrder(): number[] {
    const data = [] as number[];
    function traverse(node: Node): void {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root as Node);
    return data;
  }

  //* InOrder
  DFSInOrder(): number[] {
    const data = [] as number[];
    function traverse(node: Node): void {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root as Node);
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
console.log("tree.BFS():", tree.BFS()); //* [10, 6, 15, 3, 8, 11, 20]
console.log("tree.DFSPreOrder():", tree.DFSPreOrder()); //* [10, 6, 3, 8, 15, 11, 20]
console.log("tree.DFSPostOrder():", tree.DFSPostOrder()); //* [3, 8, 6, 11, 20, 15, 10]
console.log("tree.DFSInOrder():", tree.DFSInOrder()); //* [3, 6, 8, 10, 11, 15, 20]

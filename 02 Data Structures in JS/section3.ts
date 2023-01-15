// Binary Search Tree

interface BST_Interface {
  value: number;
  left: number | null;
  right: number | null;
}

function BST(this: BST_Interface, value: number) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value: number) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new (BST as any)(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new (BST as any)(value);
    } else {
      this.right.insert(value);
    }
  }
};

BST.prototype.contains = function (value: number) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

// const bst = new (BST as any)(50);
// bst.insert(30);
// bst.insert(50);
// bst.insert(10);
// console.log("bst:", bst, typeof bst);
// console.log(bst.contains(50));

BST.prototype.depthFirstTraversal = function (iteratorFunc: (arg0: number) => void, order: string) {
  if (order === "pre-order") {
    iteratorFunc(this.value);
  }
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc, order);
  }
  if (order === "in-order") {
    iteratorFunc(this.value);
  }
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc, order);
  }
  if (order === "post-order") {
    iteratorFunc(this.value);
  }
};

// function log(value: number) {
//   console.log(value);
// }

// const bst = new (BST as any)(50);
// bst.insert(30);
// bst.insert(50);
// bst.insert(10);
// bst.depthFirstTraversal(log, "in-order");

BST.prototype.breadthFirstTraversal = function (iteratorFunc: (arg0: number) => void) {
  const queue = [this];
  console.log("queue:", queue);
  console.log("this:", this);

  while (queue.length) {
    let treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) {
      queue.push(treeNode.left);
    }
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
  }
};

// function log(node: { value: number }) {
//   console.log(node.value);
// }

// const bst = new (BST as any)(50);
// bst.insert(30);
// bst.insert(50);
// bst.insert(10);

// bst.breadthFirstTraversal(log);

BST.prototype.getMinVal = function () {
  if (this.left) {
    return this.left.getMinVal();
  } else {
    return this.value;
  }
};

BST.prototype.getMaxVal = function () {
  if (this.right) {
    return this.right.getMaxVal();
  } else {
    return this.value;
  }
};

const bst = new (BST as any)(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log("bst:", bst);

console.log("bst.getMinVal():", bst.getMinVal());
console.log("bst.getMaxVal():", bst.getMaxVal());

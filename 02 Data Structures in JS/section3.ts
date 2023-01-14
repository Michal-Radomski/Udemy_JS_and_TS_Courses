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

const bst = new (BST as any)(50);
bst.insert(30);
bst.insert(50);
bst.insert(10);
// console.log("bst:", bst, typeof bst);
console.log(bst.contains(50));

// Hash Table

interface HashTableInterface {
  numBuckets: number;
  buckets: Array<string>;
}

interface HashNodeInterface {
  next: string | null;
  key: string;
  value: string;
}

function HashTable(this: HashTableInterface, size: number) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(this: HashNodeInterface, key: string, value: string, next: null | string) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// const myHT = new (HashTable as any)(2);
// console.log("myHT:", myHT, typeof myHT);
// console.log(HashNode, typeof HashNode);

HashTable.prototype.hash = function (key: string) {
  let total = 0;

  for (let i = 0; i < key.length; i++) {
    // console.log("key[i]:", key[i]);
    total += key.charCodeAt(i);
  }
  // console.log({ total });
  // console.log({ key });
  // console.log("this.numBuckets:", this.numBuckets);
  const bucket = total % this.numBuckets;
  // console.log({ bucket });
  return bucket;
};

// const myHT = new (HashTable as any)(30);
// console.log(myHT.hash("Rebecca"));

HashTable.prototype.insert = function (key: string, value: string) {
  const index = this.hash(key);
  console.log({ index });
  if (!this.buckets[index]) {
    this.buckets[index] = new (HashNode as any)(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new (HashNode as any)(key, value);
  }
};

const myHT = new (HashTable as any)(30);
myHT.insert("Dean", "dean@gmail.com");
myHT.insert("Megan", "megan@gmail.com");
myHT.insert("Dane", "dane@yahoo.com");
myHT.insert("Dean", "deanmachine@gmail.com");
myHT.insert("Megan", "megansmith@gmail.com");
myHT.insert("Dane", "dane1010@outlook.com");
// console.log("myHT:", myHT, typeof myHT);
console.log("myHT.buckets:", myHT.buckets);

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

const myHT = new (HashTable as any)(30);
console.log(myHT.hash("Rebecca"));

// Hash Table

interface HashTableInterface {
  numBuckets: number;
  buckets: Array<string>;
}

function HashTable(this: HashTableInterface, size: number) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(this: any, key: string, value: string, next: null | string) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

const myHT = new (HashTable as any)(2);
console.log("myHT:", myHT, typeof myHT);
console.log(HashNode, typeof HashNode);

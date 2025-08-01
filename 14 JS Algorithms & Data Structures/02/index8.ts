//^ Hash Tables
// function hash(key: string, arrayLen: number): number {
//   let total = 0;
//   for (let char of key) {
//     // map "a" to 1, "b" to 2, "c" to 3, etc.
//     let value: number = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }
// console.log("hash('test', 10):", hash("test", 10));

function hash(key: string, arrayLen: number): number {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
console.log("hash('test', 10):", hash("test", 10));

//-----

[["plum", "#DDA0DD"]];

type Data = [[string, string]];

class HashTable {
  keyMap: Data[];
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key: string): number {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key: string, value: string): void {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [] as unknown as Data;
    }
    this.keyMap[index].push([key, value]);
  }

  get(key: string): string | undefined {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable(17);
hashTable.set("maroon", "#800000");
hashTable.set("yellow", "#FFFF00");
hashTable.set("olive", "#808000");
hashTable.set("salmon", "#FA8072");
hashTable.set("lightcoral", "#F08080");
hashTable.set("mediumvioletred", "#C71585");
hashTable.set("plum", "#DDA0DD");

console.log("JSON.stringify(hashTable):", JSON.stringify(hashTable));

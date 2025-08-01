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
type Data = [string, string][];

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
    let index: number = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [] as Data;
    }
    this.keyMap[index].push([key, value]);
  }

  get(key: string): string | undefined {
    let index: number = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys(): string[] {
    const keysArr = [] as string[];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values(): string[] {
    const valuesArr = [] as string[];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
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
console.log('hashTable.get("maroon"):', hashTable.get("maroon"));

console.log("JSON.stringify(hashTable):", JSON.stringify(hashTable));

hashTable.keys().forEach(function (key: string): void {
  console.log(key);
});
hashTable.values().forEach(function (value: string): void {
  console.log(value);
});

// const ht = {
//   keyMap: [
//     [["plum", "#DDA0DD"]],
//     null,
//     null,
//     [["salmon", "#FA8072"]],
//     null,
//     null,
//     null,
//     null,
//     [
//       ["maroon", "#800000"],
//       ["yellow", "#FFFF00"],
//     ],
//     null,
//     [["olive", "#808000"]],
//     null,
//     null,
//     [["lightcoral", "#F08080"]],
//     null,
//     null,
//     [["mediumvioletred", "#C71585"]],
//   ],
// };

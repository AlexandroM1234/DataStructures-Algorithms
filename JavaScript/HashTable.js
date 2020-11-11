class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  // basic hashing function
  hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, val) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
    return this;
  }
  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(17);

ht.set("hello world", "good bye world");
ht.set("this", "hi mom");

console.log(ht);
console.log(ht.get("this"));

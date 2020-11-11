class HashTable {
  /*  
  Time Complexity:
    Insertion: O(1)
    Deletion: O(1)
    Access: O(1) 

  */
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
  // set a key value pair in the Hash Table
  set(key, val) {
    // set the index of the key by hashing the key
    let index = this.hash(key);
    // if there is no index from the given key set it as a new array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // in all cases at the index of the keyMap push the key value pair into a new sub-array
    this.keyMap[index].push([key, val]);
    return this;
  }
  // get the values at a certain key
  get(key) {
    // look up the index
    let index = this.hash(key);
    // if the index is valid
    if (this.keyMap[index]) {
      // loop through the array at that index
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // if the first value of the sub-array is the key return the value at that key
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    // if the index is invalid return undefined
    return undefined;
  }
  // return all the keys in the HT
  keys() {
    let keys = [];
    // loop through the keymap
    for (let i = 0; i < this.keyMap.length; i++) {
      // if there is something at that index
      if (this.keyMap[i]) {
        // loop through the array at that index
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // only return non duplicate keys
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }

  // return all the values in the HT
  // same logic as keys except at index 1 which is the value
  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}

let ht = new HashTable(17);

ht.set("hello world", "good bye world");
ht.set("this", "hi mom");
ht.set("rice", "bean");
ht.set("rice", "bean");
console.log(ht);
console.log(ht.get("this"));
console.log(ht.get("rice"));
console.log(ht.keys());
console.log(ht.values());

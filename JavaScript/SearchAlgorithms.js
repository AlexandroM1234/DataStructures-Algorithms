/**
 * Searches through an Array and looks for a value inside of it
 * If it's found the index of the value is returned
 * Otherwise it returns a -1
 * @param {Array} arr
 * @param {*} val
 * @return {number}
 */

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 10, 56, 78], 56));

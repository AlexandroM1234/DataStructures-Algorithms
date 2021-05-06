/**
 * Searches through an Array and looks for a value inside of it
 * If it's found the index of the value is returned
 * Otherwise it returns a -1
 * Big O : O(N)
 * @param {Array} arr
 * @param {*} val
 * @return {number}
 * @returns {number}
 */

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

/**
 * Binary Search NEEDS all the data in the array to be SORTED
 * Given an array find a value in it
 * with binary search go in the middle and see if the value is less or more than the value
 * regardless of whether or not its greater or less than split the array by half every time untill the value is in the middle
 * and best case its in the middle
 * Big O: O(log n)
 * @param {Array} arr
 * @param {*} val
 * @param {number}
 * @returns {number}
 */
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let half = Math.floor((left + right) / 2);
  while (arr[half] !== val) {
    if (val < arr[half]) {
      right = half - 1;
    } else {
      left = half + 1;
    }
    half = Math.floor((left + right) / 2);
  }
  return arr[half] === val ? half : -1;
}

/**
 * Given one string find if a given substring is in the string and return how many times is occurs
 * This is a naive solution with O(n^2) time complexity
 * @param {String} str
 * @param {String} sub
 * @returns {number}
 */
function stringSearch(str, sub) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] !== str[i + j]) {
        break;
      }
      if (j === sub.length - 1) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(linearSearch([1, 2, 3, 4, 5, 10, 56, 78], 56));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
console.log(stringSearch("Larry ar ar ", "ar"));

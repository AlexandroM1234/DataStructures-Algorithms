/**
 * Itterates through the array for every number inside of it making it O(n^2) time
 * if the number that is currently being itterated through is greater than the next one swap
 * continue swapping untill the greatest number is at the end of the array
 * Optimized with noSwap so if there isn't a swap just break out of the loop
 * @param {Array}arr
 * @returns {Array}
 */
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleSort([1, 2, 456, 56, 768, 234, 90]));

// Write a function called SameFrequency. Given 2 positive integers, find out if teh 2 numbers have the same frequnecy of digits
// Must be in 0(N) time complexity

function SameFrequency(posNum1, posNum2) {
  // good luck. Add any arguments you deem necessary.
  // Changes the numbers to strings
  const num1 = posNum1.toString();

  const num2 = posNum2.toString();
  // Keep a total for later
  let total1 = 0;

  let total2 = 0;

  // loop through the strings and make the strings back to numbers then add them up to the total
  for (num in num1) {
    total1 += Number(num1[num]);
  }
  for (num in num2) {
    total2 += Number(num1[num]);
  }
  // if the totals are the same the numbers have the same frequency of numbers
  if (total1 === total2) {
    return true;
  }
  return false;
}
console.log(SameFrequency(182, 281));

console.log(SameFrequency(34, 14));

console.log(SameFrequency(22, 222));

console.log(SameFrequency(3589578, 5879385));

const countDown = (num) => {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

countDown(10);

const sumRange = (num) => {
  // base case if num === 1
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(4));

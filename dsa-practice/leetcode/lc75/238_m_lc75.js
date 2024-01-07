const nums = [1, 2, 3, 4];
// const answer = [0, 0, 0, 0];

/** Complexity - O(n*n)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_ = function (nums) {
  let answer = nums.map((n) => 0);
  answer = answer.map((a, i) => {
    let op = [];
    nums.forEach((n, j) => {
      if (i !== j) op.push(n);
    });
    return op.reduce((a, b) => a * b);
  });
  return answer;
};

/** Complexity - O(n) */
var productExceptSelf = function (nums) {
  let n = nums.length;
  let leftProducts = new Array(n);
  let rightProducts = new Array(n);
  // let answer = new Array(n);
  // answer.fill(1);
  leftProducts[0] = 1;
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }
  rightProducts[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }
  // answer = answer.map((_, i) => {
  //   return leftProducts[i] * rightProducts[i];
  // });
  const answer = Array.from(
    { length: n },
    (_, i) => leftProducts[i] * rightProducts[i]
  );
  return answer;
};

console.log(productExceptSelf(nums));

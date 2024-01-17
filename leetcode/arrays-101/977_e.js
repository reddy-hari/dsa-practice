const nums = [-4, -1, 0, 3, 10];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squared = nums.map((n) => n * n);
  return squared.sort((a, b) => a - b);
};

console.log(sortedSquares(nums));

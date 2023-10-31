// const nums = [1, 12, -5, -6, 50, 3];
// const nums = [0, 1, 1, 3, 3];
const nums = [-1];
const k = 1;
// const k = 4;

/** Assumes k will always be smaller than the length of the array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
  let currentSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum / k;
};

console.log(findMaxAverage(nums, k));

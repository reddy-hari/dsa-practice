const nums = [0, 0, 1, 0, 3, 12];
// const nums = [0];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }
  //   for (let i = nonZeroIndex; i < nums.length; i++) nums[i] = 0;
  nums.fill(0, nonZeroIndex, nums.length);
  return nums;
};

console.log(moveZeroes(nums));

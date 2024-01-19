const nums = [0, 1, 0, 3, 12];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      i++;
    } else {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
      i = j;
    }
  }
  return nums;
};

console.log(moveZeroes(nums));

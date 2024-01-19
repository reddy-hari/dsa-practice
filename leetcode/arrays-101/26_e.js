const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    } else {
      j++;
    }
  }
  return i + 1;
};

console.log(removeDuplicates(nums));

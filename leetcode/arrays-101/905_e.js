const nums = [3, 1, 2, 4];
// const nums = [0, 2];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let i = 0;
  let j = nums.length - 1;

  if (nums.length < 2) return nums;

  while (i < j) {
    if (nums[i] % 2 === 0) {
      i++;
    } else {
      if (nums[j] % 2 !== 0) {
        j--;
      } else {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
        i++;
        j--;
      }
    }
  }

  return nums;
};

console.log(sortArrayByParity(nums));

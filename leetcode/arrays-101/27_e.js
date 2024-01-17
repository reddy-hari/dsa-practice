// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
// const val = 2;
// const nums = [2];
// const val = 3;
const nums = [3, 3];
const val = 5;

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
    i++;
  }
  return j
};

var removeElement_ = function (nums, val) {
  let i = 0;
  let j = nums.length - 1;

  if (!nums.includes(val)) return nums.length;

  if (nums.length === 1) {
    if (nums[0] === val) return 0;
    return nums.length;
  }

  while (i < j) {
    if (nums[i] === val) {
      if (nums[j] === val) {
        j--;
      } else {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    } else {
      i++;
    }
  }

  return nums.length - (nums.length - j);
};

console.log(removeElement(nums, val));

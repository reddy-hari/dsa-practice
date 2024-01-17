const nums = [1, 1, 0, 1, 1, 1];

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;
  for (n of nums) {
    if (n === 1) {
      count++;
      if (count > maxCount) maxCount = count;
    } else {
      count = 0;
    }
  }
  return maxCount;
};

console.log(findMaxConsecutiveOnes(nums));

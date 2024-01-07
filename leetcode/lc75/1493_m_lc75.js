const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];

var longestSubarray = function (nums) {
  let [left, right, maxCount, flag] = [0, 0, 0, 0];
  while (right < nums.length) {
    if (nums[right] === 1) {
      right++;
    } else {
      if (flag === 0) {
        right++;
        flag = 1;
      } else {
        if (nums[left] === 0) flag = 0;
        left++;
      }
    }
    maxCount = Math.max(maxCount, right - left);
  }
  return maxCount - 1;
};

console.log(longestSubarray(nums));

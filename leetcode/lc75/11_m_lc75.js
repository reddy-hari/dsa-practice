const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea_ = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxLevel = 0;
  let currentLevel = 0;
  while (i < j) {
    if (height[i] - height[j] > 0) {
      currentLevel = height[j] * (j - i);
      maxLevel = Math.max(maxLevel, currentLevel);
      j--;
    } else {
      currentLevel = height[i] * (j - i);
      maxLevel = Math.max(maxLevel, currentLevel);
      i++;
    }
  }
  return maxLevel;
};

var maxArea = function (height) {
  let [i, j, maxLevel, currentLevel] = [0, height.length - 1, 0, 0];
  while (i < j) {
    currentLevel = Math.min(height[i], height[j]) * (j - i);
    maxLevel = Math.max(maxLevel, currentLevel);
    height[i] > height[j] ? j-- : i++;
  }
  return maxLevel;
};

console.log(maxArea(height));

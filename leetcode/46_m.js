nums = [1, 2, 3];
/** Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] */

/** Recursion (Permutation)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const permutation = (current) => {
    for (let i = 0; i < nums.length; i++) {
      if (current.length === nums.length) {
        result.push([...current]); // Need to push a copy, otherwise it will point to the same reference array
        return;
      }
      if (current.includes(nums[i])) continue;
      current.push(nums[i]);
      permutation(current);
      current.pop()
    }
  };

  permutation([]);

  return result;
};

console.log(permute(nums));

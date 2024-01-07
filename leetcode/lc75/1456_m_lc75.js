const s = "abciiidef";
const k = 3;
// const  s = "aeiou"
// const k = 2
// const s = "leetcode"
// const k = 3

/** Sliding Window
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  let [count, maxCount, i] = [0, 0, 0];
  while (i < k) {
    if (vowelSet.has(s[i])) count += 1;
    i++;
    maxCount = Math.max(count, maxCount);
  }
  while (i < s.length) {
    if (vowelSet.has(s[i])) count += 1;
    if (vowelSet.has(s[i - k])) count -= 1;
    maxCount = Math.max(count, maxCount);
    i++;
  }
  return maxCount;
};

console.log(maxVowels(s, k));
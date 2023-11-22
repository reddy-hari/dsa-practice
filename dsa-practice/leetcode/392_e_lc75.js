// const s = "abc";
// const t = "ahbgdc";
// const s = "acb";
// const t = "ahbgdc";
const s = "axc";
const t = "ahbgdc";

/** Sequence Matters and we're dealing with comparison | 2 Pointers approach
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sPointer = 0;
  let tPointer = 0;
  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }
  return sPointer === s.length;
};

console.log(isSubsequence(s, t));

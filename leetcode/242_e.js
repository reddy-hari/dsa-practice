const s = "anagram";
const t = "nagaram";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram_ = function (s, t) {
  if (s.length !== t.length) return false;
  let cMap = new Map();
  for (const i of s)
    cMap.has(i) ? cMap.set(i, cMap.get(i) + 1) : cMap.set(i, 1);
  for (const i of t)
    cMap.has(i) ? cMap.set(i, cMap.get(i) - 1) : cMap.set(i, 1);
  for (const [key, value] of cMap.entries()) if (value !== 0) return false;
  return true;
};

var isAnagram = function (s, t) {
  let aMap = new Map();
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (aMap.has(s[i])) {
      aMap.set(s[i], aMap.get(s[i]) + 1);
    } else {
      aMap.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (aMap.has(t[i])) {
      aMap.set(s[i], aMap.get(s[i]) - 1);
    }
  }
  for (const [key, value] of aMap.entries()) {
    if (value !== 0) return false;
  }
  return true;
};

console.log(isAnagram(s, t));

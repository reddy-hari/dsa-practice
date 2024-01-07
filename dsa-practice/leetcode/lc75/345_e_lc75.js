const s = "hello";

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels_ = function (s) {
  let [i, j] = [0, 0];
  const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const str = s.split("");
  const recordVowels = s
    .split("")
    .filter((v) => vowelSet.has(v))
    .reverse();
  while (i < str.length) {
    if (vowelSet.has(str[i])) {
      str[i] = recordVowels[j];
      j++;
    }
    i++;
  }
  return str.join("");
};

/**
 * 2 Pointer Approach
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let [left, right] = [0, s.length - 1];
  s = s.split("");
  while (left < right) {
    while (!vowelSet.has(s[left])) {
      left++;
    }
    while (!vowelSet.has(s[right])) {
      right--;
    }
    if (left < right) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
    }
    left++;
    right--;
  }
  return s.join("");
};

console.log(reverseVowels(s));

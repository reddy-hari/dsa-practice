/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (let i = left; i <= right; i++) {
    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(words[i][words[i].length - 1])
    ) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

const words = ["are", "amy", "u"];
const left = 0;
const right = 2;
console.log(vowelStrings(words, left, right));

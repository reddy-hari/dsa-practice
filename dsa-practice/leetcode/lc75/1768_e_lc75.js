const word1 = "something";
const word2 = "word";

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i;
  let result = [];
  const shortLength = word1.length > word2.length ? word2.length : word1.length;
  const longLength = word1.length < word2.length ? word2.length : word1.length;
  for (i = 0; i < shortLength; i++) {
    result.push(word1[i]);
    result.push(word2[i]);
  }
  if (word1.length === i) {
    result = [...result, ...word2.split("").slice(i, longLength)];
  }
  if (word2.length === i) {
    result = [...result, ...word1.split("").slice(i, longLength)];
  }
  return result.join("");
};

console.log(mergeAlternately(word1, word2));

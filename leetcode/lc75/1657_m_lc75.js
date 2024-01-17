// const word1 = "abc";
// const word2 = "bca";
const word1 = "uau";
const word2 = "ssx";

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  let map1 = new Map();
  let map2 = new Map();

  word1.split("").forEach((c) => map1.set(c, (map1.get(c) || 0) + 1));
  word2.split("").forEach((c) => map2.set(c, (map2.get(c) || 0) + 1));

  const frequencyValues1 = Array.from(map1.values())
    .sort((a, b) => a - b)
    .join("");
  const frequencyValues2 = Array.from(map2.values())
    .sort((a, b) => a - b)
    .join("");

  if (frequencyValues1.length !== frequencyValues2.length) return false;

  const characters1 = Array.from(map1.keys()).sort().join("");
  const characters2 = Array.from(map2.keys()).sort().join("");

  if (frequencyValues1 === frequencyValues2 && characters1 === characters2)
    return true;

  return false;
};

console.log(closeStrings(word1, word2));

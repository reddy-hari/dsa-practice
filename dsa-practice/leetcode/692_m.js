const words = ["i", "love", "leetcode", "i", "love", "coding"];
const k = 2;

/** O(nlogn)
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const wordMap = new Map();
  words.forEach((w) => wordMap.set(w, (wordMap.get(w) || 0) + 1));
  const wordArray = Array.from(wordMap, ([word, count]) => ({ word, count }));
  wordArray.sort((a, b) => {
    if (a.count === b.count) return a.word.localeCompare(b.word);
    return b.count - a.count;
  });
  wordArray.length = k;
  return wordArray.map((wa) => wa.word);
};

console.log(topKFrequent(words, k));

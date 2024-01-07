/**
 * Given an array of strings, return all permutations of the concatenation of them all
 * Note - Word combinations and not character combinations.
 * Similar to LC 46
 */

const words = ["ab", "cd", "ef"];
// Result - ["abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab"]

const permutation = (words) => {
  const result = new Set();

  const permute = (currentWord, remainingWords) => {
    if (remainingWords.length === 0) {
      result.add(currentWord);
      return;
    }
    for (let i = 0; i < remainingWords.length; i++) {
      const nextWord = remainingWords[i];
      permute(currentWord + nextWord, [
        ...remainingWords.slice(0, i),
        ...remainingWords.slice(i + 1),
      ]);
    }
  };

  permute("", words);

  return Array.from(result);
};

console.log(permutation(words));

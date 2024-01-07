const str1 = "ABCABC";
const str2 = "ABC";

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const gcdLength = gcd(str1.length, str2.length);
  const potential_substring = str1.slice(0, gcdLength);
  if (
    potential_substring.repeat(str1.length / gcdLength) === str1 &&
    potential_substring.repeat(str2.length / gcdLength) === str2
  )
    return potential_substring;
  return "";
};

/** Eucledian algorithm to find GCD */
const gcd = (n1, n2) => {
  while (n1 !== 0) {
    const temp = n1;
    n1 = n2 % n1;
    n2 = temp;
  }
  return n2;
};

console.log(gcdOfStrings(str1, str2));

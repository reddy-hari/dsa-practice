const chars = [
  "a",
  "b",
  "b",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
];

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let str = "";
  let count = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      str += chars[i];
      if (count > 1) str += count.toString();
      count = 1;
    }
  }
  for (let i = 0; i < chars.length; i++) {
    chars[i] = str[i];
  }
  return str;
};

console.log(compress(chars));

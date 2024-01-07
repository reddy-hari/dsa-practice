const s = "5F3Z-2e-9-w";
const k = 4;

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const g = s.split("-").join("").toUpperCase();
  let op = "";
  let count = 0;
  for (let i = g.length - 1; i >= 0; i--) {
    if (count === k) {
      op += "-";
      count = 0;
    }
    op += g[i];
    count++;
  }
  return op.split("").reverse().join("");
};

console.log(licenseKeyFormatting(s, k));

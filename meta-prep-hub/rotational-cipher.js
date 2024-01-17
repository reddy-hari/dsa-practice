const input = "abcdefghijklmNOPQRSTUVWXYZ0123456789";
const rotationFactor = 39;

function rotationalCipher(input, rotationFactor) {
  const result = input.split("").map((c) => rotateCharacter(c, rotationFactor));
  return result.join("");
}

const rotateCharacter = (c, rotationFactor) => {
  if (/[a-zA-Z]/.test(c)) {
    const utfValue = c.charCodeAt(0);
    const rotatedValue =
      c >= "a" && c <= "z"
        ? ((utfValue - "a".charCodeAt(0) + rotationFactor) % 26) +
          "a".charCodeAt(0)
        : ((utfValue - "A".charCodeAt(0) + rotationFactor) % 26) +
          "A".charCodeAt(0);
    return String.fromCharCode(rotatedValue);
  } else if (/[0-9]/.test(c)) {
    return JSON.stringify((parseInt(c) + rotationFactor) % 10);
  } else {
    return c;
  }
};

console.log(rotationalCipher(input, rotationFactor));

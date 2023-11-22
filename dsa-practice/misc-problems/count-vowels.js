const countVowels = (s) => {
  let count = 0;

  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  for (a of s) {
    if (vowelSet.has(a.toLowerCase())) count++;
  }
  return count;
};

const s = "sdfEIRUWNsdfkhe24234";
console.log(countVowels(s));

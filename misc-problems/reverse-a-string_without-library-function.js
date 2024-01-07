const s = "something";

const r = (s) => {
  characterArray = s.split("");
  let left = 0;
  let right = s.length - 1;
  let temp;

  while (left < right) {
    temp = characterArray[left];
    characterArray[left] = characterArray[right];
    characterArray[right] = temp;

    left++;
    right--;
  }

  return characterArray.join("");
};

console.log(r(s));

/**
 * Using a Set
 * Not in-place
 * @param {number[]} array
 * @returns New length of modified array
 */
const removeDuplicates_set = (array) => {
  const noDup = new Set(array);
  return [...noDup].length;
};

/**
 * In-place
 * 2 Pointer Approach w/ trailing index
 * @param {number[]} nums
 * @returns New length of modified array
 */
const removeDuplicates_ = (nums) => {
  if (nums.length === 0) return 0; // Handle empty array

  let uniqueIndex = 1; // Initialize the index for unique elements at index 1

  for (let currentIndex = 1; currentIndex < nums.length; currentIndex++) {
    console.log("Current Array:", nums); // Print the array at the beginning of each pass

    // Compare the current element with the previous unique element
    console.log(
      `Comparing ${nums[currentIndex]} with ${nums[uniqueIndex - 1]}`
    );

    if (nums[currentIndex] !== nums[uniqueIndex - 1]) {
      // If they are different, copy the current element to the next unique position
      nums[uniqueIndex] = nums[currentIndex];
      uniqueIndex++; // Increment the index for unique elements
    }
    // If they are the same, continue to the next element
  }

  console.log("Final Array:", nums); // Print the final modified array
  return uniqueIndex; // Return the new length of the modified array
};

/**
 * In-place
 * 2 Pointer Approach
 * @param {number[]} nums
 * @returns New length of modified array
 */
const removeDuplicates_2p = (nums) => {
  if (nums.length === 0) return 0;

  let [uniqueIndex, currentIndex] = [0, 1];

  while (currentIndex < nums.length) {
    if (nums[uniqueIndex] === nums[currentIndex]) {
      currentIndex++;
    } else {
      nums[uniqueIndex + 1] = nums[currentIndex];
      uniqueIndex++;
    }
  }

  return uniqueIndex + 1;
};

/**
 * Easy Solution
 * @param {number[]} nums
 * @returns
 */
const removeDuplicates = (nums) => {
  let [i, j] = [0, 0];
  while (j < nums.length) {
    if (nums[j] === nums[i]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const array = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7];
console.log(removeDuplicates(array));

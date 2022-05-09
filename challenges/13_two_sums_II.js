/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    const currSum = numbers[i] + numbers[j];
    if (currSum < target) i++;
    else if (currSum > target) j--;
    else return [i + 1, j + 1];
  }
};
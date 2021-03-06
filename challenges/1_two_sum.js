// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }
  return [];
};
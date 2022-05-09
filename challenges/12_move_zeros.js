/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let notZerosInd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[notZerosInd] = nums[i];
      notZerosInd++;
    }
  }
  for (let j = notZerosInd; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};
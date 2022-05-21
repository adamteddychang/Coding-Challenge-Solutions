/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const setArr = Array.from(new Set(nums));
  if (nums.length === setArr.length) return false;
  return true;
};
/* eslint-disable no-continue */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  const result = [];
  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    const hash = {};

    for (let j = i; j < nums.length; j++) {
      if (hash[nums[j]]) continue;
      hash[nums[j]] = true;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);
  return result;
};
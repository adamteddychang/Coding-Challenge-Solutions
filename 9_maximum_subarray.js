/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let maxSub = nums[0];
  let currsum = 0;
  for (num of nums) {
    if (currsum < 0) currsum = 0;
    currsum += num;
    maxSub = Math.max(maxSub, currsum);
  }
  return maxSub;
};
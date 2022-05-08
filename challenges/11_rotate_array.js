/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  if (k > nums.length) {
    k -= (Math.floor(k / nums.length) * nums.length);
  }
  const change = nums.splice(-k, k);
  nums.splice(0, 0, ...change);
};
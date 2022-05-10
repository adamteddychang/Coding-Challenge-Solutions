/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  s = s.reverse();
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString2 = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const hold = s[left];
    s[left] = s[right];
    s[right] = hold;
    left++;
    right--;
  }
};
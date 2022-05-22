/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  if (!s.length) {
    return 0;
  }
  const arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};
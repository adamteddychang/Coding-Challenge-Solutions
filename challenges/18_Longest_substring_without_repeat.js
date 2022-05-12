// Hash map solution
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let max = 0;
  let start = 0;
  const map = {};
  for (let end = 0; end < s.length; end++) {
    if (map[s[end]] !== undefined && map[s[end]] >= start) {
      start = map[s[end]] + 1;
    }
    map[s[end]] = end;
    max = Math.max(max, end - start + 1);
  }
  return max;
};
// Set Solution
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring2 = function (s) {
  let max = 0;
  let start = 0;
  const set = new Set();
  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    }
    set.add(s[end]);
    max = Math.max(max, end - start + 1);
  }
  return max;
};
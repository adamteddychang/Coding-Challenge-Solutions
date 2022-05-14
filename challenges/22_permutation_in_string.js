/* eslint-disable guard-for-in */
const checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const s1map = {};
  for (let i = 0; i < s1.length; i++) {
    const char = s1.charCodeAt(i);
    s1map[char] = s1map[char] ? s1map[char] + 1 : 1;
  }
  for (let i = 0; i <= s2.length - s1.length; i++) {
    const s2map = {};
    for (let j = 0; j < s1.length; j++) {
      const char = s2.charCodeAt(i + j);
      s2map[char] = s2map[char] ? s2map[char] + 1 : 1;
    }
    let allGood = 0;
    for (val in s1map) {
      if (s1map[val] !== s2map[val]) break;
      allGood += s1map[val];
    }
    if (allGood === s1.length) return true;
  }
  return false;
};
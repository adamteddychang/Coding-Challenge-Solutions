// (1)
function sortedSquaredArray(array) {
  // Write your code here.
  const squaredArr = [];
  for (const num of array) squaredArr.push(num * num);
  return squaredArr.sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

// (2)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const squaredArr = [];
  for (const num of nums) squaredArr.push(num * num);
  return squaredArr.sort((a, b) => a - b);
};

// (1)
function sortedSquaredArray(array) {
  // Write your code here.
	let squaredArr = []
	for(let num of array) squaredArr.push(num*num)
	return squaredArr.sort((a, b) => a - b)
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;


// (2)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  let squaredArr = []
for(let num of nums) squaredArr.push(num*num)
return squaredArr.sort((a, b) => a - b)
};
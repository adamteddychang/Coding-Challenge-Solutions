/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const result = [[1]];
  for (let i = 0; i < numRows - 1; i++) {
    const x = result[result.length - 1];
    const row = [1];
    for (let j = 1; j < x.length; j++) {
      row.push(x[j] + x[j - 1]);
    }
    row.push(1);
    result.push(row);
  }
  return result;
};
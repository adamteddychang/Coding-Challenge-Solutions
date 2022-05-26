/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex > 0) {
    const a = [1];
    const p = getRow(rowIndex - 1);
    for (let i = 1; i < rowIndex; i++) {
      a[i] = p[i - 1] + p[i];
    }
    a.push(1);
    return a;
  }
};
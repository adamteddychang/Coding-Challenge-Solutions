/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
  n = n.toString();
  let prod = 1;
  let sum = 0;
  for (num of n) {
    prod *= num;
    sum += parseInt(num, 10);
  }
  return prod - sum;
};
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

const mySqrt2 = function (x) {
  let i = 0;
  while (i * i < x) i++;

  if (i * i !== x) i--;
  return i;
};
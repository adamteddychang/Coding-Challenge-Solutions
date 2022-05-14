function productSum(array, multi = 1) {
  // Write your code here.
  let sum = 0;
  for (item of array) {
    if (Array.isArray(item)) {
      sum += productSum(item, multi + 1);
    } else sum += item;
  }
  return sum * multi;
}

// Do not edit the line below.
exports.productSum = productSum;
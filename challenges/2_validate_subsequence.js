function isValidSubsequence(array, sequence) {
  // Write your code here.
  // declare the sequence index
  // loop through array
  // if the value of sequence index equals to array value
  // add index
  // if the sequence length equals to the index return true
  let seqI = 0;
  for (const num of array) {
    if (sequence[seqI] === num) seqI++;
  }
  return seqI === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
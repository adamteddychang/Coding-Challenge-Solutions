// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
 var isSubsequence = function(s, t) {
  let sInx = 0; 
  for (const char of t){
      if(s[sInx]===char) sInx ++
  }
  return sInx === s.length
};
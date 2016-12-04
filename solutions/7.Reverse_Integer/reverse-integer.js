// Source : https://leetcode.com/problems/reverse-integer/
// Author : Zeming (Vantic) Zhou
// Date   : 2016-12-03

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
  if (x < 0) {
    return -reverse(-x);
  }
  
  var result = 0;
  while (x) {
    result = result * 10 + x % 10;
    x = parseInt(x/10);
  }
  
  return result < Math.pow(2, 31) ? result : 0;
};

// Source : https://leetcode.com/problems/string-to-integer-atoi/
// Author : Zeming (Vantic) Zhou
// Date   : 2016-12-03

/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) {
  str = str.trim();
  var INT_MAX = Math.pow(2, 31);
  var regex = /^(\+|\-)?[0-9]+/;
  var match = regex.exec(str);
  
  if (match) {
    var result = Number(match[0]);
    
    if (result < -INT_MAX) {
      return -INT_MAX;
    }
    if (result > INT_MAX - 1) {
      return INT_MAX - 1;
    }
    
    return result;
  }
  
  return 0;
};

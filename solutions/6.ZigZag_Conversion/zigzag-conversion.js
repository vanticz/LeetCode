// Source : https://leetcode.com/problems/zigzag-conversion/
// Author : Zeming (Vantic) Zhou
// Date   : 2016-12-03

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
  var sLength = s.length;
  if (numRows === 1 || numRows === sLength) {
    return s;
  }
  var step = 2 * numRows - 2,
      result = '';
      
  for (var i = 0; i < numRows; i++) {
    for (var j = i; j < sLength; j+=step) {
      result += s[j];
      if (0 < i  && i < numRows-1 && j + step - i * 2 < sLength) {
        result += s[j + step - i * 2];
      }
    }
  }
  
  return result;
};

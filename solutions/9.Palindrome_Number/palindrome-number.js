// Source : https://leetcode.com/problems/palindrome-number/
// Author : Zeming (Vantic) Zhou
// Date   : 2016-12-04

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  
  var xCopy = x;
  var newX =0;
  while (xCopy) {
    newX = newX * 10 + xCopy % 10;
    xCopy = parseInt(xCopy / 10);
  }
  
  return x == newX;
};

// Source : https://leetcode.com/problems/longest-palindromic-substring/
// Author : Zeming (Vantic) Zhou
// Date   : 2016-11-29

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  // for loop is faster than split and join again
  // var newS = '$#' + s.split('').join('#') + '#';
  // p is list of longest palindromic lengths, maxR is the right bound index of known palindromic.
  // id is middle point of a palindromic, maxP is the largest one in p.
  // r is for right bound index of longest palindromic.
  var newS = '*#';
  for (var j = 0, len = s.length; j < len; j++) {
    newS += s[i] + '#';
  }

  var p = [],
      maxR = 0,
      id = 0,
      maxP = 0,
      r = 0;

  for (var i = 1; i < newS.length; i++) {
    if (maxR > i) {
      p[i] = Math.min(p[2*id-i], maxR-i);
    } else {
      p[i] = 1;
    }
    
    while (newS[i-p[i]] === newS[i+p[i]]) {
      p[i]++;
    }
    
    if (i+p[i] > maxR) {
      maxR = i + p[i];
      id = i;
    }
    
    if (p[i] >= maxP) {
      maxP = p[i];
      r = i;
    }

  }

  // slice is faster than sbustr
  // return s.substr((r-maxP)/2, maxP-1);
  return s.slice((r-maxP)/2, (r+maxP)/2-1);
};

// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author : Zeming (Vantic) Zhou
// Date   : 2016-11-25

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
	var	result = 0,
			start = 0,
			dict = {};
			
	for (var i = 0; i < s.length; i++) {
		var curChar = s[i];
		if (dict.hasOwnProperty(curChar) && dict[curChar] >= start) {
			start = dict[curChar] + 1;
		}
		dict[curChar] = i;
		result = Math.max(result, i - start + 1);
	}
	
	return result;
};


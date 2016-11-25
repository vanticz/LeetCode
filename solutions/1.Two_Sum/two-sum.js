// Source : https://leetcode.com/problems/two-sum/
// Author : Zeming (Vantic) Zhou
// Date   : 2016-11-25

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
	var dict = [];
	var indexInDict = -1;
	for (var i = 0; i < nums.length; i++) {
		indexInDict = dict.indexOf(target - nums[i]);
		if (indexInDict >= 0) {
			return [indexInDict, i];
		}
		dict.push(nums[i]);
	}
	return [];
};
// Source : https://leetcode.com/problems/median-of-two-sorted-arrays/
// Author : Zeming (Vantic) Zhou
// Date   : 2016-11-28

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function findKthBiggest (arr1, arr2, k) {
  var len1 = arr1.length;
  var len2 = arr2.length;
  // Assume arr1 is the shorter array.
  if (len1 > len2) {
    return findKthBiggest(arr2, arr1, k);
  }
  if (len1 === 0) {
    return arr2[k-1];
  }
  if (k === 1) {
    return Math.min(arr1[0], arr2[0]);
  }

  var i1 = Math.min(Math.floor(k / 2), len1);
  var i2 = k - i1;

  if (arr1[i1-1] > arr2[i2-1]) {
    return findKthBiggest(arr1, arr2.slice(i2), (k - i2));
  } else if (arr1[i1-1] < arr2[i2-1]) {
    return findKthBiggest(arr1.slice(i1), arr2, (k - i1));
  } else {
    return arr1[i1-1];
  }
  
}

var findMedianSortedArrays = function(nums1, nums2) {
	var m = nums1.length,
      n = nums2.length;

  var midPoint = Math.floor((m + n) / 2);
  if ((m + n) % 2 === 1) {
    return findKthBiggest(nums1, nums2, (midPoint + 1));
  } else {
    return (findKthBiggest(nums1, nums2, midPoint) + findKthBiggest(nums1, nums2, (midPoint + 1))) * 0.5;
  }
};

# 4. Median of Two Sorted Arrays (Hard)

[LeetCode link](https://leetcode.com/problems/median-of-two-sorted-arrays/)

### Description

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

### Analysis

First approach was to merge two input arrays, and find median of the new array, bug run time complexity would be O(m+n).

**Searched for a result:** find the *kth-biggest number* in two sorted arrays.

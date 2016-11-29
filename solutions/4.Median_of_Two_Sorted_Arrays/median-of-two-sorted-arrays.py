# Source : https://leetcode.com/problems/median-of-two-sorted-arrays/
# Author : Zeming (Vantic) Zhou
# Date   : 2016-11-28

class Solution:
    def findKthBiggest(self, arr1, arr2, k):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        len1 = len(arr1)
        len2 = len(arr2)
        if len1 > len2:
            return self.findKthBiggest(arr2, arr1, k)
        if len1 == 0:
            return arr2[k-1]
        if k == 1:
            return min(arr1[0], arr2[0]);
        
        i1 = min(k/2, len1)
        i2 = k - i1
        
        if arr1[i1-1] > arr2[i2-1]:
            return self.findKthBiggest(arr1, arr2[i2:], k-i2)
        elif arr1[i1-1] < arr2[i2-1]:
            return self.findKthBiggest(arr1[i1:], arr2, k-i1)
        else:
            return arr1[i1-1]

            
    def findMedianSortedArrays(self, nums1, nums2):
        m = len(nums1)
        n = len(nums2)
        midPoint = (m+n)/2
        if (m+n)%2 == 1:
            return self.findKthBiggest(nums1, nums2, midPoint+1)
        else:
            return (self.findKthBiggest(nums1, nums2, midPoint) + self.findKthBiggest(nums1, nums2, midPoint+1)) / 2.0
        

if __name__ == '__main__':
    print Solution().findMedianSortedArrays([1, 2, 4], [3, 5, 6])
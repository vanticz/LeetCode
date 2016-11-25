# Source : https://leetcode.com/problems/two-sum/
# Author : Zeming (Vantic) Zhou
# Date   : 2016-11-25

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dictMap = {}
        for i, val in enumerate(nums):
            if target - val in dictMap:
                return [dictMap[target - val], i]
            dictMap[val] = i
        return []

if __name__ == '__main__':
    print(Solution().twoSum([2, 7, 11, 15], 9))
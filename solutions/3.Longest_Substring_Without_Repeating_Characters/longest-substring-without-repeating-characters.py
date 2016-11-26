# Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
# Author : Zeming (Vantic) Zhou
# Date   : 2016-11-25

class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        result = 0
        start = 0
        searched = {}
        
        for i, char in enumerate(s):
            if char in searched and searched[char] >= start:
                start = searched[char] + 1
            searched[char] = i
            result = max(result, i - start + 1)
        
        return result

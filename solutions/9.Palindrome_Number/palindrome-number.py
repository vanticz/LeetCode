# Source : https://leetcode.com/problems/palindrome-number/
# Author : Zeming (Vantic) Zhou
# Date   : 2016-12-04

class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        
        xCopy, newX = x, 0
        
        while xCopy:
            newX = newX * 10 + xCopy % 10
            xCopy /= 10
        
        return x == newX

if __name__ == '__main__':
    print Solution().isPalindrome(101)

# Source : https://leetcode.com/problems/reverse-integer/
# Author : Zeming (Vantic) Zhou
# Date   : 2016-12-03

class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x < 0:
            return -self.reverse(-x)
        
        result = 0
        while x:
            result = result * 10 + x % 10
            x /= 10
        
        if result < 0x7fffffff:
            return result
        
        return 0
             
if __name__ == '__main__':
    print Solution().reverse(-123)
    print Solution().reverse(1563847412)

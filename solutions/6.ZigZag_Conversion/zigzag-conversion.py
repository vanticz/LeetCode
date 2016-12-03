# Source : https://leetcode.com/problems/zigzag-conversion/
# Author : Zeming (Vantic) Zhou
# Date   : 2016-12-03

class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        sLen = len(s)
        if numRows == 1 or numRows == sLen:
            return s
        step = 2 * numRows - 2
        result = ''
        
        for i in xrange(numRows):
            for j in xrange(i, sLen, step):
                result += s[j]
                if 0 < i < numRows - 1 and j + step - 2 * i < sLen:
                    result += s[j + step - 2 * i]

        return result
             
if __name__ == '__main__':
    print Solution().convert("PAYPALISHIRING", 3)


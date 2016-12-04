# Source : https://leetcode.com/problems/string-to-integer-atoi/
# Author : Zeming (Vantic) Zhou
# Date   : 2016-12-03

import re

class Solution(object):
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        INT_MAX = 0x7fffffff
        INT_MIN = -0x7fffffff - 1
        str = str.strip()
        try:
            str = re.match(r'^[+-]?[0-9]+', str).group()
            result = int(str)
            if result > INT_MAX:
                return INT_MAX
            elif result < INT_MIN:
                return INT_MIN
            else:
                return result
        except:
            return 0
              
if __name__ == '__main__':
    print Solution().myAtoi('')
    print Solution().myAtoi('  -3564gdhgf  ')

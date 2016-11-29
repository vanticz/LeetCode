# Source : https://leetcode.com/problems/longest-palindromic-substring/
# Author : Zeming (Vantic) Zhou
# Date   : 2016-11-29

class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        # p is list of longest palindromic lengths, maxR is the right bound index of known palindromic.
        # ind is middle point of a palindromic, maxP is the largest one in p.
        # r is for right bound index of longest palindromic.
        newS = '$#' + '#'.join(s) + '#^'
        p = [0] * len(newS)
        maxR, ind, maxP, r = 0, 0, 0, 0
        
        for i in range(1, len(newS)-1):
            if maxR > i:
                p[i] = min(p[2*ind-i], maxR-i)
            else:
                p[i] = 1

            while newS[i-p[i]] == newS[i+p[i]]:
                p[i] += 1

            if i+p[i] > maxR:
                maxR = i + p[i]
                ind = i
            
            if p[i] >= maxP:
                maxP = p[i]
                r = i
        
        return s[(r-maxP)//2: (r+maxP)//2-1]
                
         
if __name__ == '__main__':
    s = 'a'
    print(Solution().longestPalindrome(s))


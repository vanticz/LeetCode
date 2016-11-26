# 3. Longest Substring Without Repeating Characters (Medium)

[LeetCode link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

1. Use a dict/object to keep tracking of existence and the last position (if exist) of the current character.
2. If current character exists, update the starting point and the longest length of substring.
3. Repeat to the end of input string and return the result.

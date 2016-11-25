# 1.Two Sum (Easy)

[LeetCode link](https://leetcode.com/problems/two-sum/)

1. Define a dict/array to store numbers.
2. For each number in the original array: if (target - current number) is in the new dict/array, return the corresponding indices; else add the current number to the dict/array and move on.
3. Return empty array if no match found.

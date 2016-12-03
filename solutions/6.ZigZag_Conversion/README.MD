# 6. ZigZag Conversion (Easy)

[LeetCode link](https://leetcode.com/problems/zigzag-conversion/)

### Description from LeetCode website
The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`


### Analysis
row = 4

```
0     6       12       18
1   5 7    11 13    17 19
2 4   8 10    14 16    20
3     9       15       21

```

row = 5

```
0        8          16
1     7  9       15 17
2   6   10    14    18
3 5     11 13
4       12
```

We observe the *step* between two main columns are `2 * rows - 2`.

And for each row `i`, besides the main columns, there are elements at position `current_row_num + (step - i * 2)`.
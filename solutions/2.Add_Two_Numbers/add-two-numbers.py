# Source : https://leetcode.com/problems/add-two-numbers/
# Author : Zeming (Vantic) Zhou
# Date   : 2016-11-25

# Definition for singly-linked list.
#class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        result = ListNode(0)
        current = result
        carry = 0
        while l1 or l2:
            sumVal = carry
            if l1:
                sumVal += l1.val
                l1 = l1.next
            if l2:
                sumVal += l2.val
                l2 = l2.next
            carry = sumVal / 10
            current.val = sumVal % 10
            if l1 or l2 or carry != 0:
                current.next = ListNode(carry)
                current = current.next

        return result

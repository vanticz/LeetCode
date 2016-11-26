// Source : https://leetcode.com/problems/add-two-numbers/
// Author : Zeming (Vantic) Zhou
// Date   : 2016-11-25


// function ListNode(val) {
// 	this.val = val;
// 	this.next = null;
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
	var result = new ListNode();
	var current = result;
	var	val1, var2, sum,
			carry = 0;
	
	while (l1 || l2) {
		val1 = l1 ? l1.val : 0;
		val2 = l2 ? l2.val : 0;
		sum = val1 + val2 + carry;
		carry = Math.floor(sum / 10);
		
		var newNode = new ListNode(sum % 10);

		if (current.val === undefined) {
			current.val = newNode.val;
		} else {
			current.next = newNode;
			current = newNode;
		}

		if (l1)
			l1 = l1.next;
		if (l2)
			l2 = l2.next;
	}
	if (carry === 1) {
		current.next = new ListNode(1);
	}

	return result;
};

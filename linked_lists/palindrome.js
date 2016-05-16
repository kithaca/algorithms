/* Implement a function to check if a linked list is a palindrome. */

var LinkedList = require('./linkedList');

var palindrome = function (list) {
	var len = 0;
	var currNode = list.head;
	while (currNode) {
		len += 1;
		currNode = currNode.next;
	}

	if (len === 1) {
		return true;
	}

	var mid = Math.floor(len / 2);

	currNode = list.head;
	for (var i = 0; i < mid; i++) {
		currNode = currNode.next;
	}

	var left = currNode.prev;
	var right = len % 2 === 0 ? currNode : currNode.next;

	while (left && right) {
		if (right.value !== left.value) {
			return false;
		}
		left = left.prev;
		right = right.next;
	}
	return true;
};

var list1 = new LinkedList(["a", "b", "b", "a"]);
var list2 = new LinkedList(["a", "b", "c", "b", "a"]);
var list3 = new LinkedList(["a", "b", "c", "b"]);
var list4 = new LinkedList([1, 2, 3, 4, 4, 4, 3, 2, 1]);
var list5 = new LinkedList([1, 2, 3, 4, 5, 4, 3, 9, 1]);

console.log(palindrome(list1)); 	// true
console.log(palindrome(list2));		// true
console.log(palindrome(list3));		// false
console.log(palindrome(list4));		// true
console.log(palindrome(list5));		// false


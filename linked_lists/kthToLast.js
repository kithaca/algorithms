/* Implement an algorithm to find the kth to last element of a singly
linked list. */

var SinglyLinkedList = require('./singlyLinkedList');

var kthToLast = function (list, k) {
	var runner = list.head;
	for (var i = 0; i < k; i++) {
		runner = runner.next;
		if (runner === null) {
			return ("Error: requested k value exceeds length of list.")
		}
	}
	var walker = list.head;
	while (runner.next) {
		runner = runner.next;
		walker = walker.next;
	}
	walker = walker.next;
	return walker.toString();
};

var list = new SinglyLinkedList([1, 2, 2, 7, 4]);

console.log(kthToLast(list, 1));
console.log(kthToLast(list, 3));
console.log(kthToLast(list, 9));
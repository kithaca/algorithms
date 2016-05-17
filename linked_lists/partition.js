/* Partition a linked list around a value x, such that all nodes less
than x come before all nodes greater than or equal to x. If x is contained
within the list, the values of x only need to be after the elements less than x.
The partition element x can appear anywhere in the 'right partition'; it
does not need to appear between the left and right partitions.

Ex:
Input: 	3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 (partition = 5)
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

var SinglyLinkedList = require('./singlyLinkedList');

var partition = function (list, value) {
	var currNode = list.head;
	var prev = null;
	while (currNode) {
		var next = currNode.next;
		if (currNode.value < value && currNode !== list.head) {
			prev.next = next;
			currNode.next = list.head;
			list.head = currNode;
		} else {
			prev = currNode;
		}
		currNode = next;
	}
	return list.toString();
};

var list = new SinglyLinkedList([3, 5, 8, 5, 10, 2, 1]);
console.log(partition(list, 5));
/* Write code to remove duplicates from an unsorted linked list.
   How would you solve this problem if a temporary buffer is not allowed? */

var LinkedList = require('./linkedList');

var removeDups = function (list) {
	var values = {};
	var currNode = list.head;
	while (currNode) {
		if (!values[currNode.value]) {
			values[currNode.value] = true;
		} else {
			list.delete(currNode);
		}
		currNode = currNode.next;
	}
	console.log(values);
	return list;
};

var list = new LinkedList([1, 2, 2, 2, 3, 6, 9, 9]);

console.log(removeDups(list).toString());

/* Implement an algorithm to delete a node in the middle (i.e. not first
or last) of a singly linked list, given only access to that node. */

// Input: a -> b -> c -> d -> e
// delete c
// Output: a -> b -> d -> e

var SinglyLinkedList = require('./singlyLinkedList');

var deleteNode = function (node) {
	node.value = node.next.value;
	SinglyLinkedList.prototype.delete(node.next, node);
};

var list = new SinglyLinkedList(["a", "b", "c", "d", "e"]);
console.log(list.toString());
var node = list.find("c");
deleteNode(node);

console.log(list.toString());

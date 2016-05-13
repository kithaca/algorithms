/* Given two singly linked lists, determine if the two lists intersect.
Return the intersecting node. Note that the intersection is defined based
on reference, not value. */

// a -> b -> c -> d -> e
// 		f ->

var SinglyLinkedList = require('./singlyLinkedList');
var Node = require("./node");

var intersection = function (l1, l2) {
	var node1 = l1.head;
	var node2 = l2.head;

	while (node1 && node2) {
		node1 = node1.next;
		node2 = node2.next;
	}

	var diff;
	if (node1) {
		var longer = l1;
		var shorter = l2;
		var currNode = node1;
	} else if (node2) {
		var longer = l2;
		var shorter = l1;
		var currNode = node2;
	} else {
		diff = 0;
		var longer = l1;
		var shorter = l2;
		var currNode = node1;
	}

	if (!diff) {
		var diff = 0;
		while (currNode) {
			currNode = currNode.next;
			diff += 1;
		}
	}

	node1 = longer.head;
	node2 = shorter.head;
	while (diff > 0) {
		node1 = node1.next;
		diff -= 1;
	}

	while (node1 && node2) {
		if (node1 === node2) {
			return node1;
		}
		node1 = node1.next;
		node2 = node2.next;
	}
};

var l1 = new SinglyLinkedList(["a", "b"]);
var l2 = new SinglyLinkedList([1, 2, 3, 4, 5, "f"]);

var c = new Node("c");
var d = new Node("d");
var e = new Node("e");

l1.add(c);
l1.add(d);
l1.add(e);
l2.add(c);
console.log(l1.toString());
console.log(l2.toString());
console.log(intersection(l1, l2).value);
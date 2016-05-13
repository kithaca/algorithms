var Node = require("./node");

var SinglyLinkedList = function (array) {
	this.head = new Node(array[0]);
	var currNode = this.head;
	for (var i = 1; i < array.length; i++) {
		var newNode = new Node(array[i]);
		currNode.next = newNode;
		currNode = newNode;
	}
};

SinglyLinkedList.prototype.insert = function (prev, value) {
	var next = prev.next ? prev.next : null;
	var newNode = new Node(value);
	if (!prev) {
		this.head = newNode;
	}
};

SinglyLinkedList.prototype.add = function (node, tail) {
	var currNode = this.head;
	if (!tail) {
		while (currNode.next !== null) {
			currNode = currNode.next;
		}
		var tail = currNode;
	}
	tail.next = node;
};

SinglyLinkedList.prototype.find = function (value) {
	var currNode = this.head;
	while (currNode !== null) {
		if (currNode.value === value) {
			return currNode;
		}
		currNode = currNode.next;
	}
	return null;
};

SinglyLinkedList.prototype.delete = function (node, prev) {
	if (prev) {
		prev.next = node.next;
	} else {
		this.head = node.next;
	}
};

SinglyLinkedList.prototype.toString = function () {
	var listArray = []
	currNode = this.head;
	while (currNode) {
		listArray.push(currNode.value);
		currNode = currNode.next;
	}
	return listArray;
}

module.exports = SinglyLinkedList;
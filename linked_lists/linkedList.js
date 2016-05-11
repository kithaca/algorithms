var Node = require("./node");

var LinkedList = function (array) {
	this.head = new Node(array[0]);
	var prev = this.head;
	for (var i = 1; i < array.length; i++) {
		var newNode = new Node(array[i]);
		this.add(newNode, prev);
		prev.next = newNode;
		prev = newNode;
	}
};

LinkedList.prototype.insert = function (prev, value) {
	var newNode = new Node(value);
	if (!prev) {
		this.head = newNode;
	} else {
		prev.next = newNode;
	}
	newNode.prev = prev;
	newNode.next = prev.next ? prev.next : null;
	prev.next = newNode;
};

LinkedList.prototype.add = function (node, tail) {
	var currNode = this.head;
	if (!tail) {
		while (currNode.next !== null) {
			currNode = currNode.next;
		}
		var tail = currNode;
	}
	tail.next = node;
	node.prev = tail;
};

LinkedList.prototype.delete = function (node) {
		if (node.prev) {
		node.prev.next = node.next;
	} else {
		this.head = node.next
	}
	if (node.next) {
		node.next.prev = node.prev;
	}
};

LinkedList.prototype.toString = function () {
	var listArray = []
	currNode = this.head;
	while (currNode) {
		listArray.push(currNode.value);
		currNode = currNode.next;
	}
	return {head: this.head.value, list: listArray};
}

module.exports = LinkedList;
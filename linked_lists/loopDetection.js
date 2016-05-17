/* Given a circular linked list, implement an algorithm that returns the
node at the beginning of the loop. */

// 1 -> 2 -> 3 -> 4
//		|		  |
//		7 <- 6 <- 5

var SinglyLinkedList = require("./singlyLinkedList");

var loopDetection = function (list) {
	var walker = list.head.next;
	var runner = list.head.next.next;
	var count = 1;

	while (walker !== runner) {
		walker = walker.next;
		runner = runner.next.next;
		count += 1;
	}

	var walker2 = list.head;
	while (walker !== walker2) {
		walker = walker.next;
		walker2 = walker2.next;
	}
	return walker.value;
};

var list1 = new SinglyLinkedList([1, 2, 3, 4, 5, 6, 7]);
var joinNode = list1.head.next;
list1.add(joinNode);
console.log(loopDetection(list1));

var list2 = new SinglyLinkedList([1, 2, 3, 4, 5, 6, 7]);
var joinNode = list2.head.next.next.next.next;
list2.add(joinNode);
console.log(loopDetection(list2));
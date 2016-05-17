/* You have 2 numbers represented by a linked list, where each node contains
a single digit. The digits are stored in reverse order, such that the 1s
digit is at the head of the list. Write a function that adds the two numbers
and returns the sum as a linked list.

Ex:
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2) ==> 617 + 295
Output: 2 -> 1 -> 9 ==> 912

What if the digits are stored in forward order? */

var SinglyLinkedList = require("./singlyLinkedList");

var sumLists = function (list1, list2) {
	var l1 = list1.head;
	var l2 = list2.head;

	var sum = [];
	var value1;
	var value2;
	var current = 0;

	while (l1 || l2) {
		value1 = l1 ? l1.value : 0;
		value2 = l2 ? l2.value : 0;
		current += (value1 + value2);
		if (current < 10) {
			sum.push(current);
			current = 0;
		} else {
			sum.push(current % 10);
			current = 1;
		}
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}
	return new SinglyLinkedList(sum);
};

var list1 = new SinglyLinkedList([7, 1, 6]); 	//  617
var list2 = new SinglyLinkedList([5, 9, 2]); 	//  295
var list3 = new SinglyLinkedList([9, 4, 2, 1]); // 1249
var list4 = new SinglyLinkedList([9, 7, 3]);	//  379

console.log(sumLists(list1, list2).toString()); //  219
console.log(sumLists(list3, list4).toString()); // 8261
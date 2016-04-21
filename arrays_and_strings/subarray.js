// Write a function that returns all the subarrays of an array.

var subarrays = function (array) {
	if (array.length === 0) {
		return [[]];
	}
	var subs = subarrays(array.slice(0, -1));
	var newSubs = subs.slice(0);
	for (var i = 0; i < subs.length; i++) {
		newSubs.push(subs[i].concat(array[array.length - 1]));
	}

	return newSubs;
};


console.log(subarrays([]));
console.log(subarrays([1]));
console.log(subarrays([1, 2]));
console.log(subarrays([1, 2, 3]));

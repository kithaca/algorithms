function lookAndSay (arr) {
	var result = [];
	var currEl = null;
	var count = 0;
	var i = 0;

	while (i < arr.length) {
		if (currEl === null) {
			currEl = arr[i];
		}

		if (currEl === arr[i]) {
			count++;
			i++;
		} else {
			result.push([count, currEl]);
			count = 0;
			currEl = null;
		}

	}
	if (count > 0) {
		result.push([count, currEl]);
	}
	return result;
}

console.log(lookAndSay([1])); // [1, 1]
console.log(lookAndSay([1, 1])); // [2, 1]
console.log(lookAndSay([2, 1])); // [1, 2], [1, 1]
console.log(lookAndSay([1, 2, 1, 1])); // [1, 1], [1, 2], [2, 1]
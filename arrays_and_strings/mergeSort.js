function mergeSort (arr) {
	if (arr.length < 2) {
		return arr;
	}

	var mid = Math.floor(arr.length / 2);
	var left = mergeSort(arr.slice(0, mid));
	var right = mergeSort(arr.slice(mid));

	return merge(left, right);
}

function merge (left, right) {
	var merged = [];
	while (left.length > 0 && right.length > 0) {
		if (left[0] <= right[0]) {
			merged.push(left.shift());
		} else {
			merged.push(right.shift());
		}
	}
	return merged.concat(left, right);
}

var a = [10, 3, 7, 2, 1, 4, 5, 8, 6, 9];
console.log(mergeSort(a));
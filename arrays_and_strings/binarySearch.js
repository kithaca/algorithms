function bSearch (arr, target) {
	if (arr.length === 0) {
		return null;
	} else if (arr.length === 1 && arr[0] !== target) {
		return null;
	}

	var mid = Math.floor((arr.length / 2));
	var result;

	if (arr[mid] === target) {
		return mid;
	} else if (target < arr[mid]) {
		result = bSearch(arr.slice(0, mid), target);
	} else {
		result = bSearch(arr.slice(mid), target);
		if (result) {
			result += mid;
		}
	}

	return result;
}

console.log(bSearch([-5, 0, 1, 3, 5], 0));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log(bSearch([0, 1, 2, 3, 5, 6, 7, 8, 9, 10], 4));

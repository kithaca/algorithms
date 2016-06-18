function quickSort (arr) {
	if (arr.length < 2) {
		return arr;
	}

	var pivot = arr[0];
	var leftIdx = 1;
	var rightIdx = arr.length - 1;

	while (leftIdx <= rightIdx) {
		while (arr[leftIdx] < pivot) {
			leftIdx++;
		}

		while (arr[rightIdx] > pivot) {
			rightIdx--;
		}

		if (leftIdx <= rightIdx) {
			arr = swap(arr, leftIdx, rightIdx);
			leftIdx++;
			rightIdx--;
		}
	}
	arr = swap(arr, 0, rightIdx);

	var left = quickSort(arr.slice(0, rightIdx));
	var right = quickSort(arr.slice(rightIdx + 1));

	return left.concat([pivot], right);
}

function swap (arr, x, y) {
	var temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;

	return arr;
}

var a = [8, 5, 1, 3, 4, 2, 10, 6, 9, 7];
console.log(a);
console.log(quickSort(a));
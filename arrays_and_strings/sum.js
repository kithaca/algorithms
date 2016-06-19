function sum (x, y) {
	if (y) {
		return x + y;
	} else {
		return function (y) {
			return x + y;
		}
	}
}

console.log(sum(2, 3));
console.log(sum(2)(3));
function printSpiral (m) {
	var result = [];

	while (true) {
		if (m.length === 0 || m[0].length === 0) { break; }

		result = result.concat(m.shift());

		if (m.length === 0 || m[0].length === 0) { break; }

		for (var i = 0; i < m.length; i++) {
			result.push(m[i].pop());
		}

		if (m.length === 0 || m[0].length === 0) { break; }

		result = result.concat(m.pop().reverse());

		if (m.length === 0 || m[0].length === 0) { break; }

		for (var i = m.length - 1; i >= 0; i--) {
			result.push(m[i].shift());
		}
	}
	return result;
}

var m = [
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
			[13, 14, 15, 16],
			[17, 18, 19, 20]
		];

console.log(printSpiral(m));

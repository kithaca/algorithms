function telWords (arr) {
	if (arr.length === 0) { return [""]; }

	var last = arr.pop();
	var result = telWords(arr);
	var words = [];

	letters(last).forEach(function (letter) {
		for (var i = 0; i < result.length; i++) {
			words.push(result[i] + letter);
		}
	});
	return words;
}

function letters (num) {
	var h = {
		0: [""],
		1: [""],
		2: ["a", "b", "c"],
		3: ["d", "e", "f"],
		4: ["g", "h", "i"],
		5: ["j", "k", "l"],
		6: ["m", "n", "o"],
		7: ["p", "q", "r", "s"],
		8: ["t", "u", "v"],
		9: ["w", "x", "y", "z"]
	}

	return h[num];
}

console.log(telWords([8, 7, 3, 3, 1]));
// Write a function to check if a string is a permutation of a palindrome.

var palindromePerm = function (str) {
	var h = {};
	var len = str.length;

	for (var i = 0; i < str.length; i++) {
		if (str[i] !== " ") {
			if (h[str[i]]) {
				h[str[i]] += 1;
			} else {
				h[str[i]] = 1;
			}
		} else {
			len -= 1;
		}
	}

	var odd = len % 2 === 0 ? 1 : 0;
	Object.keys(h).forEach(function (key) {
		if (h[key] % 2 !== 0) {
			odd += 1;
		}
	});

	return odd <= 1 ? true : false;
};

console.log(palindromePerm("tact coa"));
console.log(palindromePerm("rhinoceros"));

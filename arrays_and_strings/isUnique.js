// Determine if a string has all unique characters.

var isUnique = function (string) {
	h = {};

	for (var i = 0; i < string.length; i++) {
		if (h[string[i]]) {
			return false;
		} else {
			h[string[i]] = true;
		}
	}
	return true;
};

console.log(isUnique("kitten"));
console.log(isUnique("solar"));
console.log(isUnique("he and I"));

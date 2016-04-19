/* Given two strings, write a function to check if they are one edit away.
	An edit is one of the following: insert a char, remove a char, or
	replace a char. */

var oneAway = function (str1, str2) {
	if (Math.abs(str1.length - str2.length) > 1) {
		return false;
	}

	var h1 = freqHash(str1);
	var h2 = freqHash(str2);

	var edits = 0;

	Object.keys(h1).forEach(function (key) {
		if (h1[key] !== h2[key]) {
			edits += 1;
		}
	});

	return edits <= 1 ? true : false;
};

var freqHash = function (str) {
	var h = {}
	for (var i = 0; i < str.length; i++) {
		if (h[str[i]]) {
			h[str[i]] += 1;
		} else {
			h[str[i]] = 1;
		}
	}
	return h;
};

console.log(oneAway("pale", "ple"));		// true
console.log(oneAway("pales", "pale"));	// true
console.log(oneAway("pale", "bale"));		// true
console.log(oneAway("pale", "bake"));		// false
console.log(oneAway("pale", "palest"));	// false
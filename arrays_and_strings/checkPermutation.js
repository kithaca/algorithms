// Given 2 strings, check if one is a permutation of the other

var checkPermutation = function (str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	return str1.split("").sort().join("") == str2.split("").sort().join("") ? true : false;
};

console.log(checkPermutation("kitten", "mitten"));
console.log(checkPermutation("protectional", "lactoprotein"));
/* Given two strings, check if one is a rotation of the other. Assume
you have a method isSubstring that you can call one time only. */

var isSubstring = function (str, substr) {
	return (new RegExp(substr).test(str));
};

var stringRotation = function (original, rotated) {
	var doubled = rotated + rotated;
	return isSubstring(doubled, original) ? true : false;
};

console.log(stringRotation("cat", "tca"));
console.log(stringRotation("horse", "ohser"));
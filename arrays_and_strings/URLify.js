// Write a method to replace all spaces in a string with "%20".

var URLify = function (string) {
	return string.trim().split(" ").join("%20");
};

console.log(URLify("Mr. John Smith"));
console.log(URLify("  Mr. John Smith     "));
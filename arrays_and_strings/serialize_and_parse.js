function serialize (arr) {
	var result = [];

	for (var str of arr) {
		var newStr = "";
		for (var i = 0; i < str.length; i++) {
			newStr += str[i] === "/" ? "&/" : str[i];
		}
		result.push(newStr);
	}

	return result.join("/");
}

var arr1 = ["This", "is", "a", "cat", "."];
var arr2 = ["There", "are", "inner/slashes", "&/here.&"];


var str1 = serialize(arr1);
var str2 = serialize(arr2);

console.log(str1);
console.log(str2);

function parse (str) {
	var result = [];
	var newStr = "";
	var i = 0;
	var amp = false;
	while (i < str.length) {
		if (!amp) {
			if (str[i] === "&") {
				amp = true;
			} else if (str[i] === "/") {
				result.push(newStr);
				newStr = "";
			} else {
				newStr += str[i];
			}
		} else {
			if (str[i] === "&") {
				newStr += "&";
			} else {
				newStr += str[i];
				amp = false;
			}
		}
		i++;
	}
	if (newStr.length > 0) {
		if (amp) {
			newStr += "&";
		}
		result.push(newStr);
	}
	return result;
}

console.log(parse(str1));
console.log(parse(str2));
/* Implement a method to perform basic string commpression using the
counts of repeated characters. If the "compressed" string would not
become smaller than the original, return the original string.

Example:
input: 	aabcccccaaa
output: a2b1c5a3

*/

var compressString = function (string) {
	var len = string.length;
	var current = string[0];
	var curr_length = 1;
	var compressed = "";
	for (var i = 1; i < len; i++) {
		if (string[i] === current) {
			curr_length++;
		} else {
			compressed = compressed + current + curr_length;
			curr_length = 1;
		}
		current = string[i];
	}
	compressed = compressed + current + curr_length;
	return compressed.length < len ? compressed : string;
};

console.log(compressString("aabcccccaaa"));
console.log(compressString("aabcccccaaabc"));
console.log(compressString("aabcccccaaabcdjklm"));
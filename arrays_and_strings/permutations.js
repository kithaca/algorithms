// Write a function that returns all of the permutations of a string.

var permutations = function (string) {
	if (string.length <= 1) {
		return [string];
	}

	var finalPerms = [];
	for (var i = 0; i < string.length; i++) {
		var sliced = string.slice(0, i) + string.slice(i+1);
		var perms = permutations(sliced);
		for (var j = 0; j < perms.length; j++) {
			perms[j] = perms[j] + string[i];
		}
		finalPerms = finalPerms.concat(perms);
	}
	return finalPerms;
};

console.log(permutations("cats"));
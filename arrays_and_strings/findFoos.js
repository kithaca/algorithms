function findFoos (input) {
	if (typeof input !== 'object') {
		return 0;
	} else if (input instanceof Array) {
		var count = 0;
		for (var i of input) {
			count += findFoos(i);
		}
		return count;
	} else {
		var count = 0;
		var keys = Object.keys(input);
		for (var key of keys) {
			if (key === "foo") {
				count += 1;
			}
			count += findFoos(input[key]);
		}
		return count;
	}
}

var o = {"foo": "bar"};

var obj = {
			3: ["foo", "foofoo", {"foo": "cat"}],
			"foo": ["kittens", "puppies", 4, {"foo": [7, 9]}],
			"dog": { 3: 9, "snow": "panda", "foo": { "foo": "bar"}}
		};

console.log(findFoos(o));
console.log(findFoos(obj));
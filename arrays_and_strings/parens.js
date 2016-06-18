var parens = function (n) {
	if (n === 1) {
		return ['()'];
	}

	var parensArr = parens(n-1);
	var resultArr = [];

	for (var i = 0; i < parensArr.length; i++) {
		var first = parensArr[i] + '()';
		var second = '(' + parensArr[i] + ')';
		var third = '()' + parensArr[i];
		resultArr.push(first, second);
		if (first !== third) {
			resultArr.push(third);
		}
	}

	return resultArr;
};

console.log(parens(1));
console.log(parens(2));
console.log(parens(3));



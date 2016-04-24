// Write a function that returns the nth Fibonacci number.

var iterFibonacci = function (n) {
	var fibs = [0, 1];
	if (n <= 1) {
		return fibs[n];
	}

	while (fibs.length < n) {
		var len = fibs.length;
		var next = fibs[len - 2] + fibs[len - 1];
		fibs.push(next);
	}
	return fibs;
};

var iterFibonacci2 = function (n) {
	var fibs = [0, 1];
	if (n <= 1) {
		return fibs[n];
	}

	var i = 1;
	while (i < n) {
		fibs.push(fibs[0] + fibs[1]);
		fibs.shift();
		i += 1;
	}
	return fibs[1];
};

var recFibonacci = function (n) {
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	}

	var fib = recFibonacci(n-2) + recFibonacci(n-1);
	return fib;
};

var optimizedFibonacci = function (n, fibs) {
	if (!fibs) {
		var fibs = {0: 0, 1: 1};
	}
	if (fibs[n] !== undefined) {
		return fibs[n];
	} else {
		var res = optimizedFibonacci(n-2, fibs) + optimizedFibonacci(n-1, fibs);
		fibs[n] = res;
		console.log(fibs);
		return res;
	}
};
// [0, 1, 1, 2, 3, 5, 8, 13, 21]

console.log(optimizedFibonacci(0));
console.log(optimizedFibonacci(1));
console.log(optimizedFibonacci(2));
console.log(optimizedFibonacci(3));
console.log(optimizedFibonacci(5));
console.log(optimizedFibonacci(8));

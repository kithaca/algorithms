/* Write an algorithm such that if an element in an MxN matrix is 0,
its entire row and column are set to 0. */

var zeroMatrix = function (matrix) {
	var rowZeros = {};
	var colZeros = {};
	for (var row = 0; row < matrix.length; row++) {
		for (var col = 0; col < matrix[0].length; col++) {
			if (matrix[row][col] === 0) {
				rowZeros[row] = true;
				colZeros[col] = true;
			}
		}
	}

	for (var row = 0; row < matrix.length; row++) {
		if (rowZeros[row]) {
			matrix[row].fill(0);
		}
	}
	for (var col = 0; col < matrix[0].length; col++) {
		if (colZeros[col]) {
			for (var row = 0; row < matrix.length; row++) {
				matrix[row][col] = 0;
			}
		}
	}
	return matrix;
};

var matrix = [	[1, 2, 3, 4, 5],
				[6, 7, 0, 8, 9],
				[6, 0, 1, 1, 2]
			 ];


console.log(zeroMatrix(matrix));
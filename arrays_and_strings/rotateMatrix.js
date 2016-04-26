/* Given an image represented by an NxN matrix, where each pixel in the
image is 4 bytes, write a method to rotate the image by 90 degrees.

Can you do this in place?
*/

var rotateMatrix = function (matrix) {
	var n = matrix.length;

	var rotated = [];
	for (var i = 0; i < n; i++) {
		rotated.push(new Array(n));
	}

	for (var row = 0; row < n; row++) {
		for (var col = 0; col < n; col++) {
			var temp = matrix[row][col];
			rotated[row][col] = matrix[col][n - row - 1];
		}
	}
	return rotated;
};

var matrix = [
							[1, 2, 3],
							[4, 5, 6],
							[7, 8, 9]
						 ];

console.log(rotateMatrix(matrix));

/* [3, 6, 9]
	 [2, 5, 8]
	 [1, 4, 7]
*/

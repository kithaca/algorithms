/* Given an n by m matrix, implement the following functions:
   1. sum(i, j) - returns sum of area within rectangular space formed
   beetween (0, 0) and (i, j).
   2. insert(i, j, num) - inserts num at location (i, j)
*/

var Matrix = function (n, m) {
	this.matrix = this.createMatrix(n, m);
	this.sumMatrix = this.createMatrix(n, m);
};

Matrix.prototype.createMatrix = function (n, m) {
	var matrix = new Array(m);
	for (var i = 0; i < m; i++) {
		matrix[i] = new Array(n);
		for (var j = 0; j < n; j++) {
			matrix[i][j] = 0;
		}
	}
	return matrix;
};

Matrix.prototype.insert = function (x, y, num) {
	this.matrix[x][y] = num;
	var maxX = this.matrix.length;
	var maxY = this.matrix[0].length;

	for (var i = x; i < maxX; i++) {
		for (var j = y; j < maxY; j++) {
			this.sumMatrix[i][j] += this.matrix[x][y];
		}
	}
};

Matrix.prototype.sum = function (x, y) {
	var maxX = x >= this.matrix.length ? this.matrix.length - 1 : x;
	var maxY = y >= this.matrix[0].length ? this.matrix[0].length - 1 : y;
	return this.sumMatrix[maxX][maxY];
};

var m = new Matrix(10, 7);
m.insert(3, 3, 10);
m.insert(0, 4, 10);
console.log(m);
console.log(m.sum(5, 5));
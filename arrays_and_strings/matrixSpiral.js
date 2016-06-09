/* Beginning at the lower left corner, traverse a spiral pattern in a
   n by m matrix, stopping once you have visited every cell. */

var Matrix = function (rows, cols) {
	this.matrix = new Array(rows);
	for (var i = 0; i < rows; i++) {
		this.matrix[i] = new Array(cols);
	}
	this.size = rows * cols;
	this.dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
}

Matrix.prototype.traverse = function () {
	var curr = [this.matrix.length - 1, 0];
	var visited = {};
	var idx = 0;
	while (Object.keys(visited).length < this.size) {
		visited[curr] = true;
		// this.toString();
		this.matrix[curr[0]][curr[1]] = 1;
		var next = [curr[0] + this.dirs[idx][0], curr[1] + this.dirs[idx][1]];

		if (!visited[next] && this.inBounds(next)) {
			curr = next;
		} else {
			idx = idx < 3 ? idx + 1 : 0;
		}
	}
};

Matrix.prototype.inBounds = function (pos) {
	if (pos[0] < 0 || pos[0] >= this.matrix.length || pos[1] < 0 || pos[1] >= this.matrix[0].length) {
		return false;
	} else {
		return true;
	}
};

Matrix.prototype.toString = function () {
	for (var i = 0; i < this.matrix.length; i++) {
		console.log(this.matrix[i]);
	}
};

m = new Matrix(3, 3);
m.traverse();
m.toString();


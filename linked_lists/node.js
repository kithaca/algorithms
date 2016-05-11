var Node = function (value) {
	this.value = value;
	this.prev = null;
	this.next = null;
};

Node.prototype.toString = function () {
	var prev = this.prev ? this.prev.value : null;
	var next = this.next ? this.next.value : null;
	return {value: this.value, prev: prev, next: next};
};

module.exports = Node;
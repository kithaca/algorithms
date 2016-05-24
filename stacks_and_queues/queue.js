var Queue = function () {
	this.data = [];
	this.top = null;
};

Queue.prototype.add = function (item) {
	if (this.isEmpty()) {
		this.top = item;
	}
	this.data.push(item);
};

Queue.prototype.dequeue = function () {
	if (this.isEmpty()) {
		return null;
	} else {
		if (this.data.length === 1) {
			this.top = null;
		}
		var result = this.data.shift();
		this.top = this.data[0] ? this.data[0] : null;
		return result;
	}
};

Queue.prototype.isEmpty = function () {
	return (this.data.length === 0);
};

Queue.prototype.peek = function () {
	return this.top;
};

Queue.prototype.toString = function () {
	return this.data;
};

module.exports = Queue;
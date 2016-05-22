var Stack = function () {
	this.data = [];
	this.top = null;
};

Stack.prototype.push = function (item) {
	this.data.push(item);
	this.top = item;
};

Stack.prototype.pop = function () {
	if (this.isEmpty()) {
		return null;
	} else {
		if (this.data.length === 1) {
			this.top = null;
		}
		return this.data.pop();
	}
};

Stack.prototype.isEmpty = function () {
	return (this.data.length === 0);
};

Stack.prototype.peek = function () {
	return this.top;
};

Stack.prototype.toString = function () {
	return this.data;
};

module.exports = Stack;
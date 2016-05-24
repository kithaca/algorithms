/* Design a stack, which, in addition to push and pop, has a function
min that returns the minimum element? Push, pop, and min should all
operate in O(1) time. */

 Function.prototype.inherits = function (superClass) {
    function Surrogate () {}
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate ();
    this.prototype.constructor = this;
  };


var Stack = require('./stack');

var MinStack = function () {
	Stack.call(this);
	this.minimum = new Stack();
};

MinStack.inherits(Stack);

MinStack.prototype.push = function (item) {
	this.data.push(item);
	this.top = item;
	if (this.min() === null || this.min() >= item) {
		this.minimum.push(item);
	}
};

MinStack.prototype.pop = function () {
	if (this.isEmpty()) {
		return null;
	} else {
		if (this.peek() === this.min()) {
			this.minimum.pop();
		}
		if (this.data.length === 1) {
			this.top = null;
		} else {
			this.top = this.data[this.data.length - 2];
		}

		return this.data.pop();
	}
};

MinStack.prototype.min = function () {
	return this.minimum.peek() !== null ? this.minimum.peek() : null;
};


var a = new MinStack();

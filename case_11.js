
function addAsync(fn, x, y) {
	setTimeout(function() {
		fn(x + y);
	}, 1000);
}

function makeThunk(fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function(cb) {
		args.unshift(cb);
		fn.apply(null, args);
	};
}

var thunk = makeThunk(addAsync, 10, 15);

thunk(function(sum) {
	console.log(sum);
});

//--------------------------------------------------

function getData(fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	fn.apply(null, args);
}

var get10 = makeThunk(getData, 10);
var get30 = makeThunk(getData, 30);

get10(function(num1) {
	var x = 1 + num1;
	get30(function(num2) {
		var y = 1 + num2;
		var getAnswer = makeThunk(getData, "index: " + (x + y));
		getAnswer(function(answer) {
			console.log(answer);
		});
	});
});

//--------------------------------------------------

function add(operand1, operand2) {
	return operand1 + operand2;
}
function mult(operand1, operand2) {
	return operand1 * operand2;
}
function operate(binary) {
	return function(operand1) {
		return function(operand2) {
			return binary(operand1, operand2);
		}
	}
}
function crossAdd(input) {
	var answwer = [];
	var len = input.length;
	for(var i=0; i<len; i++) {
		var up = input[i];
		var down = input[len - 1 - i];
		answwer.push(up + down);
	}
	return answwer;
}

function not(fn) {
	return function negeate(...args) {
		return !fn(...args);
	};
}
function isOdd(v) {
	return v % 2 == 1;
}
var isEven = not(isOdd);
console.log(isEven(4));

// function output(msg) {
// 	console.log(msg);
// }
var output = console.log.bind(console);
function printIf(predicate) {
	return function(msg) {
		if(predicate(msg)) {
			output(msg);
		}
	}
}
function when(fn) {
	return function(predicate) {
		return function(...args) {
			if(predicate(...args)) {
				return fn(...args);
			}
		};
	};
}
var printIf = when(output);

var sumRecur = (function(...nums) {
	return function(...nums) {
		return recur(nums, v => v);
	};
	function recur([sum, ...nums], cont) {
		if(nums.length == 0) return cont(sum);
		return recur(nums, function(v) {
			return cont(sum + v);
		});
	}
})();
console.log(sumRecur(3, 4, 5, 6, 7, 8, 9));

//--------------------------------------------------

function tuple(input) {
	var answwer = [];
	var len = input.length;
	for(var i=0; i<len; i++) {
		for(var j=0; j<len; j++) {
			answwer.push([input[i], input[j]]);
		}
	}
	return answwer;
}


//--------------------------------------------------

const prop = "var";
const obj = {
	*[Symbol.iterator]() {
		for(var i=this.start; i<=this.end; i++) {
			yield this.values[i];
		}
	},
	values: [2, 3],
	start: 0,
	end: 3,
	[prop]: "description",
};
var vals = [...obj];
console.log(vals);
console.log(obj[prop]);

//--------------------------------------------------

function Graph() {
	this._nodes = {};
}
Graph.prototype.addNode = function(vertex) {
	if(vertex === undefined) return;
	this._nodes[vertex] = this._nodes[vertex] || [];
}
const myGraph = new Graph();
myGraph.addNode("pickles");
myGraph.addNode("dobby");

Graph.prototype.addEdge = function(vertex1, vertex2) {
	if(!this._nodes[vertex1] || !this._nodes[vertex2]) {
		return 'Invalid vertex value';
	}
	this._nodes[vertex1].push(vertex2);
	this._nodes[vertex2].push(vertex1);
}
myGraph.addEdge("dobby", "pickles");

//--------------------------------------------------
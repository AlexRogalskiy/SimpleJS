
if(!Object.is) {
	Object.is = function(v1, v2) {
		// contains -0
		if(0 === v1 && 0 === v2) {
			return 1 / v1 === 1 / v2;
		}
		// NaN
		if(v1 !== v1) {
			return v2 !== v1;
		}
		return v1 === v2;
	}
}

{

	if(typeof a === "undefined") {
		console.log("a is undefined");
	}
	if(typeof b === "undefined") { //ReferenceError
		console.log("b is undefined");
	}
	let b;
}

function foo(...args) {
	args.shift()
	console.log(...args);
}

var [a, b, c] = foot();
var {x: x, y: y, z: z} = foot();
var {x, y, z} = foot();

function foot() {
	return [1, 2, 3];
}

var x = 10, y = 20;
[y, x] = [x, y];

var [, b] = [1, 2, 3];
var {x, z} = {x: 1, y: 2, z: 3};

var a = [2, 3, 4];
var b = [1, ...a, 5];

var [b, ...c] = a;

function foo([x, y]) { // {x, y}
	console.log(x, y);
}

function f3([x, y, ...z], ...w) {
	console.log(x, y, z, w);
}

function f6({x = 10} = {}, {y} = {y: 10}) {
	console.log(x, y);
}
f6(); //10, 10
f6({}, {}); // 10, undefined
f6(undefined, undefined); // 10 10
f6({}, undefined); // 10 10
f6(undefined, {}); //10 undefined
f6({x: 2}, {y: 5});

{
	let {
		options: {
			remove = defaults.options.remove,
		} = {},
		log: {
			warn = defaults.options.warn,
			error: defaults.options.error,
		} = {},
	} = config;

	config = {
		options: {remove},
		log: {warn, error},
	};
}
//shallow
config = Object.assign({}, defaults, config);

function runFunction(0) {
	var x = Math.random(), y = Math.random();
	return o.function_(x, y);
}
runFunction({
	function_: function function_(x, y) {
		if(x > y) {
			return function_(y, x);
		}
		return y - x;
	}
});

var 0 = {
	__id: 10,
	get id() {return this.__id++},
	set id(v) {this.__id = v;},
	set id({id: v = 0}) {}
};

var prefix = "user_";
var o = {
	baz: function() {},
	[prefix + "foo"]: function() {},
	[prefix + "bar"]: function() {},
};

var o = {
	[Symbol.toStringTag]: "really cool thing",
};

var o = {
	["f" + "oo"]() {},
	*["b" + "ar"]() {},
};


var o1 = {
	foo() {
		console.log("o1: foo");
	}
	//..
};
var o2 = {
	__proto__: o1,
	foo() {
		super.foo();
		console.log("o2: foo");
	}
	//..
};
//for existing Object
Object.setPrototypeOf(o2, o1);

var name = "Kate";
var greeting = `Hello ${name}`;

function foo() {
	return function bar(strings, ...values) {
		console.log(strings);
		console.log(values);
	}
}
var desc = "awesome";
bar()`Everything is ${desc}!`;

function symbols(strings, ...values) {
	return strings.reduce(function(s, v, idx) {
		if(idx > 0) {
			if(typeof values[idx-1] == "number") {
				s += `$${values[idx-1]j.toFixed(2)}`;
			} else {
				s += values[idx-1];
			}
		}
		return s + v;
	}, "");
}

function showRaw(strings, ...values) {
	console.log(strings);
	console.log(strings.raw);
}

console.log(String.raw'Hello/nworld!');

var a = ["a", "b", "c", "d", "e"];

for(var idx in a) {
	console.log(idx);
}
for(var val of a) {
	console.log(val);
}

for(var val, ret, it = a[Symbol.iterator](); (ret = it.next()) && !ret.done;) {
	console.log(ret.value);
}

//arrays, strings, *, collections

var o = {};
for(o.a of [1, 2, 3]) {
	console.log(o.a);
}
for({x: o.a} of [{x: 1}, {x: 2}, {x: 3}]) {
	console.log(o.a);
}

var re1 = /^.-clef/u;
var re2 = /foo/y;

var re = /\d+\.\s(.*?)(?:\s|$)/y;
var str = "1. foo 2. bar 3. baz";
str.match(re); re.lastIndex;
console.log(re.source);
console.log(re.flags);// gimuy

var num = Number("42"); //Number("0o52"), Number("0x2a"), Number("0b101010");
num.toString()// toString(8|16|2);

//basic multilingual plane
//0x0000 - 0xFFFF
//astral - 0X10FFFF

var gclef = "\uD834\uDD1e"; //"\u{1D11E}", "\u{10FFFF}"

[...gclef].length;
Array.from(gclef).length;

var s1 = "\xE9", s2 = "e\u0301";
s1.normalize().length;
s2.normalize().length;
[...s1.normalize()][2];

s1.normalize().codePointAt(2).toString(16);
String.fromCodePoint(s1.normalize().codePointAt(2));

var sym = Symbol("");
typeof sym === "symbol";

ymvar symObj = Object(sym);
symObj instanceOf Symbol;
symObj.valueOf() === sym;


const EVT_LOGIN = Symbol("event.login");

function Singleton() {
	const INSTANCE = Symbol.for("instance");
	if(Singleton[INSTANCE]) {
		return Singleton[INSTANCE];
	}
	function test() {
		//..
	}
	return Singleton[INSTANCE] = {
		test: test;
	};
}

function extractValues(str) {
	var key = Symbol.for("extractValues.pattern"),
		re = extractValues[key] || //g,
		values = [], match;

		while(match = re.exec(str)) {
			values.push(match[1]);
		}
		return values;
}
extractValues[Symbol.for("extractValues.pattern")] = //g;
extractValues("test string");

var s = Symbol.for("");
var d = Symbol.keyFor(s);

var o = {
	foo: 42,
	[Symbol("bar")]: "",
	baz: true,
};
Object.getOwnPropertyNames(o);

var arr = [1, 2, 3];
var it = arr[Symbol.iterator]();

var m = new Map();
m.set("foo", 42);
m.set({cool: true}, "hello world");
var it1 = m[Symbol.iterator]();
var it2 = m.entries();
//--------------------------------------------------
var it = {
	[Symbol.iterator]() {return this;};
	next() {},
};
it[Symbol.iterator]() === it;

var Fib = {
	[Symbol.iterator]() {
		var n1 = 1, n2 = 1;
		return {
			[Symbol.iterator()] {
				return this;
			},
			next() {
				var current = n2;
				n2 = n1;
				n1 = n1 + current;
				return {value: current, done: false};
			},
			return(v) {
				console.log("Ended");
				return {value: v, done: true};
			}
		};
	}
};

for(var v of Fib) {
	console.log(v);
	if(v > 50) break;
}

var taskSchedule = {
	[Symbol.iterator]() {
		var steps = this.actions.slice();
		return {
			[Symbol.iterator]() {
				return this;
			},
			next(...args) {
				if(steps.length > 0) {
					let res = steps.shift()(...args);
					return {value: res, done: false};
				} else {
					return {done: true};
				}
			},
			return(v) {
				steps.length = 10;
				return {value: v, done: true};
			}
		};
	},
	actions: [],
};

tasks.actions.push(function step1(x) {}, function step2(x, y){}, function step3(x, y, z) {]});
var it = tasks[Symbol.iterator]();
it.next(10);
it.next(10, 20);
it.next(20, 50, 120);
it.next();

if(!Number.prototype[Symbol.iterator]) {
	Object.defineProperty(Number.prototype, Symbol.iterator, {
		writable: true,
		configurable: true,
		enumerable: false,
		value: function iterator() {
			var i, inc, done = false, top = +this;
			inc = 1 * (top < 0 ? -1 : 1);

			return {
				[Symbol.iterator]() {return this;},
				next() {
					if(!done) {
						if(i == null) {
							i = 0;
						} else if(top >= 0) {
							i = Math.min(top, i + inc);
						} else {
							i = Math.max(top, i + inc);
						}
						if(i == top) done = true;
						return {value: i, done: false};
					} else {
						return {done: true};
					}
				},
			};
		}
	});
}

var it = a[Symbol.iterator]();
var [x, y] = it;
it.next();


function *foo() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}
for(var v of foo() {
	console.log(v);
})

function *bar() {
	var x = yield *foo();
	//yield *foo();
	console.log("x: ", x);
}
for(var v of bar() {
	console.log(v);
})

function *foo (x) {
	if(x < 3) {
		x = yield *foo(x + 1);
	}
	return x * 2;
}
foo(1);

function *foo() {
	var x = yield 1;
	var y = yield 2;
	var z = yield 3;
	console.log(x, y, z);
}
var it = foo();
it.next();
it.next("foo");
it.next("bar");
it.next("baz");

function *foo() {
	var x = yield 42;
	console.log(x);
}

function foo() {
	function nextState(v) {
		switch(state) {
			case 0:
				state++;
				return 42;
			case 1:
				state++;
				x = v;
				console.log(x);
				return undefined;
		}
	}
	var state = 0, x;
	return {
		next: function(v) {
			var ret = nextState(v);
			return {value: ret, done: (state == 2)};
		},
		// return(..),
		// throw(..),
	};
}
//--------------------------------------------------
var singleton = (function T(name) {
	function f1() {}
	return {
		f1: f1,
	};
})("name");

class Foo {
	static cool() { consol.log("cool"); }
	wow() { console.log("wow"); }
	static get [Symbol.species]() { return this; }
	spawn() {
		return new this.constructor[Symbol.species]();
	}
}

class Bar {
	static awesome() {
		super.cool();
		console.log("awesome");
	}
	neat() {
		super.wow();
		console.log("neat");
	}
	static get [Symbol.species]() { return Foo; }
}

class CustomArray extends Array {
	static get [Symbol.species]() { return Array; }
}
//--------------------------------------------------
function ajax(url) {
	return new Promise(function pr(resolve, reject)
		 {

		 });
}

ajax("url")
.then(function ok(data)
	 {
	 	//return contents.toUpperCase();
	 	return ajax("url=" + data);
	 },
	 function error(reason) {
	 	//return "default";
	 	return ajax("url=" + reason);
	 },
)
.then(function process(data) {
	//
});

function *main() {
	var ret = yield step1();
	try {
		ret = yield step2(ret);
	} catch (err) {
		ret = yield step2Failed(err);
	}
	ret = yield Promise.all([step3a(ret), step3b(ret), step3c(ret)]);
	yield step4(ret);
}

function run(gen) {
	var args = [].slice.call(arguments, 1), it;
	it = gen.apply(this, args);
	return Promise.resolve()
	.then(function next(value) {
		var next = it.next(value);
		return (function result(next) {
			if(next.done) {
				return next.value;
			} else {
				return Promise.resolve(next.value)
				.then(next, function error(err) {
					return Promise.resolve(it.throw(err))
					.then(result);
				});
			}
		})(next);
	});
}

run(main)
.then(function ok() {}, function error(reason) {});


var p1 = Promise.resolve(42);
var p2 = new Promise(function pr(resolve) {
	setTimeout(function() {
		resolve(43);
	}, 100);
});
var v3 = 44;
var p4 = new Promise(function pr(resolve, reject) {
	setTimeout(function() {
		reject("Error");
	}, 10);
});
Promise.all([p1, p2, v3])
.then(function ok(values) {
	console.log(values);
});
Promise.all([p1, p2, p3, p4])
.then(function ok() {}, function error(reason) {});

Promise.race([p1, p2, v3])
.then(function ok(values) {
	console.log(values);
});
Promise.race([p2, p4])
.then(function ok() {}, function error(reason) { console.log(reason); });

//--------------------------------------------------
var buf = new ArrayBuffer(32);
buf.byteLength;
var arr = new Uint16Array(buf);
arr.length;

var littleEndian = function() {
	var buffer = new ArrayBuffer(2);
	new DataView(buffer).setInt16(0, 256, true);
	return new Int16Array(buffer)[0] === 256;
}

var buf = new ArrayBuffer(2);
var view8 = new Uint8Array(buf);
var view16 = new Uint16Array(buf);

view16[0] = 3085;
//view8[0].toString(16); view8[1].toString(16);


var a = new Uint8Array(3);
a[0] = 10;
a[1] = 20;
a[3] = 30;
var b = Uint16Array.from(a, function(v) {
	return v * v;
});
b.sort();

var x = {id: 1}, y = {id: 2};
var m = new Map([[x, "foo"], [y, "bar"]]);
m.get(x); m.get(y);

var vals = [...m.values()];
var keys = [...m.keys()];
var entries = [...m.entries()];
Array.from(m.values());

var c = Array.of(1, 2, 3);
class CustomArray extends Array {
	sum() {
		return this.reduce(function reducer(acc, curr) {
			return acc + curr;
		}, 0);
	}
}
CustomArray.of(3);

var arr = Array.prototype.slice.call(arrLike);
var arr = Array.from(arrLike);

var b = Array.apply(null, {length: 4});
var c = Array.from({length: 4});

Array.from(arrLike, function mapper(val, idx) {
	if(typeof val == "string") {
		return val.toUpperCase();
	} else {
		return idx;
	}
});

[1, 2, 3, 4, 5].copyWintin(3, 0); // [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWintin(3, 0, 1); // [1, 2, 3, 1, 5]
[1, 2, 3, 4, 5].copyWintin(0, -2); // [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWintin(0, -2, -1); // [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWintin(2, 1);

var a = Array(4).fill(undefined);
var a = [null, null, null, null].fill(42, 1, 3);

var a = [1, 2, 3, 4, 5];
a.some(function matcher(v) {
	return (v == "2");
});
a.find(function matcher(v) {
	return (v == "2");
});
var points = [{x: 10, y: 20}, {x: 20, y: 30}, {x: 30, y: 40}, {x: 40, y: 50}];
points.find(function matcher(point) {
	return {
		point.x % 3 == 0 && point.y % 4 == 0
	};
});
points.findIndex(function matcher(point) {
	return {
		point.x % 3 == 0 && point.y % 4 == 0;
	};
});


var a = [1, 2, 3];
[...a.values()];
[...a.keys()];
[...a.entries()];
[...a[Symbol.iterator]()];

//--------------------------------------------------
x == 0 && 1 / x === -Infinity
Object.is(x, -0);

var target = {}, o1 = {a: 1}, o2 = {b: 2},
	o3 = {c: 3}, o4 = {d: 4};
Object.defineProperty(o3, "e", {
	value: 5,
	enumerable: true,
	writable: false,
	configurable: false,
});
Object.defineProperty(o3, "f", {
	value: 6,
	enumerable: false,
});
o3[Symbol("g")] = 7;
Object.defineProperty(o3, Symbol("h"), {
	value: 8,
	enumerable: false,
})
Object.setPrototypeOf(o3, o4);
Object.assign(target, o1, o2, o3);
Object.getOwnPropertyDescriptor(target, "e");
Object.getOwnPropertySymbols(target);


var o1 = {};
var o2 = Object.assing(Object.create(o1), {});
Object.setPrototypeOf(o2, o1);
var o2 = Object.setPrototypeOf({}, o1);

isFinite("42");
Number.isFinite(a);
Number.isFInite(+"42");

function isFloat(x) {
	return Number.isFinite(x) && !Number.isInteger(x);
}

arr[Symbol.iterator] = function*() {
	var idx = 1;
	do {
		yield this[idx];
	} while((idx += 2) < this.legth);
};

function Foo (message) {
	this.message = message;
}
Foo.prototype[Symbol.toStringTag] = "Foo";
Object.defineProperty(Foo, Symbol.hasInstance, {
	value: function(ins) {
		return ins.message == "in";
	}
});
var a = new Foo("in"), b = new Foo("w");
b[Symbol.toStringTag] = "nice";

class A {
	static get [Symbol.species]() { return this; }
	againt() {
		return new this.constructor[Symbol.species]();
	}
}

class B extends A {};
class c extends A {
	static get [Symbol.species]() { return A; }
}

arr[Symbol.toPrimitive] = function(hint) {
	if(hint == "default" || hint == "number") {
		return this.reduce(function(acc, curr) {
			return acc + curr;
		}, 0);
	}
};
//arr + 10;

"abaca".replace(/a/g, [1, 2, 3]);

var a = [1, 2, 3], b = [4, 5, 6];
b[Symbol.isConcatSpreadable] = false;
[].concat(a, b);

var obj1 = {a: 1},
	handlers = {
		get(target, key, context) {
			console.log("accesing: ", key);
			return Reflect.get(target, key, context);
		}
	},
	pobj = new Proxy(obj, handlers);
obj.a;
pobj.a;

var handlers = {
	getOwnPropertyDescriptor(target, prop) {
		console.log("getOwnPropertyDescriptor");
		return Object.getOwnPropertyDescriptor(target, prop);
	},
	defineProperty(target, prop, desc) {
		console.log("defineProperty");
		return Object.defineProperty(target, prop, desc);
	}
},
proxy = new Proxy({}, handlers);
proxy.a = 2;

var obj = {a: 1};
var handlers = {
	get(target, key, context) {
		console.log("accesing: ", key);
		return target[key];
	}
},
{proxy: pobj, revoke: prevoke} = Proxy.revocable(obj, handlers);
//pobj.a;
//prevoke();
//pobj.a;
//--------------------------------------------------

var messages = [];
var handlers = {
	get(target, key) {
		if(typeof target[key] == "string") {
			return target[key].replace(/[^\w]/g, "");
		}
		return target[key];
	},
	set(target, key, value) {
		if(typeof value == "string") {
			value = value.toLowerCase();
			if(target.indexOf(value) == -1) {
				target.push(value);
			}
		}
		return true;
	},
	messages_proxy = new Proxy(messages, handlers);
};

messages_proxy.push("asdf", 43, "KJid", "saj@");
messages_proxy.forEach(function(value) {
	console.log(value);
});


var handlers = {
	get(target, key, context) {
		return function() {
			context.speak(key + "!");
		};
	}
},
catchAll = new Proxy({}, handlers),
greeter = {
	speak(who = "someone") {
		console.log("hello, ", who);
	}
};
Object.setPrototypeOf(greeter, catchAll);
greeter.speak();
greeter.eveyone();


var obj = {
	a: 1,
	foo() {
		console.log("a: ", this.a);
	},
};
var handlers = {
		get(target, key, context) {
			if(Reflect.has(target, key)) {
				return Reflect.get(target, key, context);
			} else {
				throw "No such method/property: " + key;
			}
		},
		set(target, key, value, context) {
			if(Reflect.has(target, key)) {
				return Reflect.set(target, key, value, context);
			} else {
				throw "No such method/property: " + key;
			}
		},
	},
	pobj = new Proxy(obj, handlers);
pobj.a = 3;
pobj.foo()	;
pobj.b = 4;
pobj.bar();

var handlers = {
	get() {
		throw "No such method/property";
	}
	set() {
		throw "No such method/property";
	}
},
pobj = new Proxy({}, handlers),
obj = {
	a: 1,
	foo() {
		console.log("a: ", this.a);
	}
};
Object.setPrototypeOf(obj, pobj);
obj.a = 3;
obj.foo();
obj.b = 4;
obj.foo();


var handlers = {
		get(target, key, context) {
			if(Reflect.has(target, key)) {
				return Reflect.get(target, key, context);
			} else {
				return Reflect.get(target[Symbol.for("[[Prototype]]")], key, context);
			}
		},
	},
	obj1 = new Proxy({
		name: "obj-1",
		foo() {
			console.log("foo: ", this.name);
		}
	}, handlers),
	obj2 = Object.assign(Object.create(obj1), {
		name: "obj-2",
		bar() {
			console.log("bar: ", this.name);
			this.foo();
		}
	});

obj1[Symbol.for("[[Prototype]]")] = obj2;
obj1.bar();
obj2.foo();


var obj1 = {
	name: "obj-1",
	foo() {
		console.log("obj1.foo: ", this.name);
	},
},
obj2 = {
	name: "obj-2",
	foo() {
		console.log("obj2.foo: ", this.name);
	},
	bar() {
		console.log("obj2.bar: ", this.name);
	},
},
handlers = {
		get(target, key, context) {
			if(Reflect.has(target, key)) {
				return Reflect.get(target, key, context);
			} else {
				for(var p of target[Symbol.for("[[Prototype]]")]) {
					if(Reflect.has(p, key)) {
						return Reflect.get(p, key, context);
					}
				}
			}
		},
	},
	obj3 = new Proxy({
		name: "obj-3",
		baz() {
			this.foo();
			this.bar();
		}
	}, handlers);

obj3[Symbol.for("[[Prototype]]")] = [obj1, obj2];
obj3.baz();

Reflect.apply(foo, thisObj, [4, "bar"]);
Reflect.construct(foo, [4, "bar"]);

Reflect.get(o, "foo");
Reflect.set(o, "foo", 42);
Reflect.deleteProperty(o, "foo");

Reflect.ownKeys(o);
Reflect.getOwnPropertyNames(o);
Reflect.getOwnPropertySymbols(o);

var p = Object.create(o);
p.c = 3, p.d = 4;
for(var prop of Reflect.enumerage(p)) {
	console.log(prop);
}
for(var prop in p) {
	console.log(prop);
}
JSON.stringiy(p);
Object.keys(p);

"use strict";
var foo = (function() {
	function _foo(acc, x) {
		if(x <= 1) return acc;
		return _foo((x / 2) + acc, x - 1);
	}
	return function(x) {
		return _foo(1, x);
	}
}());

function trampoline(res) {
	while(typeof res == "function") {
		res = res();
	}
	return res;
}
var foo = (function() {
	function _foo(acc, x) {
		if(x <= 1) return acc;
		return function partial() {
			return _foo(x / 2) + acc, x - 1);
		};
	}
	return function(x) {
		return trampoline(_foo(1, x));
	};
}());

function foo(x) {
	var acc = 1;
	while(x > 1) {
		acc = (x / 2) + acc;
		x = x - 1;
	}
	return acc;
}

function foo(x) {
	function _foo() {
		if(x > 1) {
			acc = acc + (x / 2);
			x = x - 1;
			return _foo();
		}
	}
	var acc = 1;
	while(x > 1) {
		try {
			_foo();
		} catch(err) {}
	}
	return acc;
}

//--------------------------------------------------

async function main() {
	var ret = await step1();
	try {
		ret = await step2(ret);
	} catch (err) {
		ret = await step2Failed(err);
	}
	ret = await Promise.all([step3a(ret), step3b(ret), step3c(ret)]);
	await step4(ret);
}
main()
.then(function ok() {

}, function error(reason) {

});


var obj = {a: 1, b: 2};
Object.reserve(obj, function(changes) {
	for(var change of changes) {
		console.log(change);
	}
}, ["add", "update", "delete"]);
//reconfigure -> Object.defineProperty()
//preventExtensions -> Object.preventExtensions() [Object.seal(), Object.freeze()]
//setPrototype -> __proto__ || Object.setPrototypeOf()
obj.c = 3;
obj.a = 24;
delete obj.b;


function observer(changes) {
	for(var change of changes) {
		if(change.type == "recalc") {
			change.object.c = change.object.oldValue + change.object.a + change.object.b;
			break;
		}
		if(change.type == "setPrototype") {
			Object.unobserve(change.object, observer);
			break;
		}
	}
}
function changeObj(a, b) {
	var notifier = Object.getNotifier(obj);
	obj.a = a * 2;
	obj.b = b * 3;
	//notifier.notify({type: "recalc", name: "c", oldValue: obj.c});
	notifier.performChange("recalc", function() {
		return {
			name: "c",
			oldValue: this.c,
		};
	})
}
var obj = {a: 1, b: 2, c: 3};
Object.observe(obj, observer, ["recalc"]);
//Object.deliverChangeRecords(observer);
changeObj(3, 11);

a **= 3;
var o1 = {b: 2, c: 3, d: 4};
var {b, ...o2} = o1;
console.log(b, o2.c, o2.d);
if(~vals.indexOf(42)) {
	console.log("found");
}
if(vals.includes(42)) {
	console.log("found");
}

var v1 = SIMD.float32x4(3, 4, 5, 6);
var v2 = SIMG.float32x4(5, 6, 7, 8);
SIMD.float32x4.mul(v1, v2); //sub, div, abs, neg, sqrt;

function getInitials(name) {
	return name.split(' ').map(word => `${word.charAt(0).toUpperCase()}.`).join('');
}

//--------------------------------------------------

const output = (str, regex, target) => {
	target.innerHTML = str.replace(regex, str => '<span>${str}</span>');
}
var str = 'String to search for';
var regex = /is/gi;
output(str, regex, document.querySelector('pre'));

//--------------------------------------------------

function fill(array, value) {
  return Array.apply(null, array).map(value.constructor.prototype.valueOf, value)
}

const newstr = str.replace(/[\W_]/g, '').toLowerCase()

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1
}

function flatten(...args) {
  return args.reduce(function flattenReducer(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(...toFlatten) : toFlatten)
  }, [])
}

function getQueryStringParam(url, name) {
  const regexReadyName = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp(`[\\?&]${regexReadyName}=([^&#]*)`)
  const results = regex.exec(url)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

function hex2rgb(hex, opacity) {
  let h = hex.replace('#', '')
  h = h.match(new RegExp(`(.{${h.length / 3}})`, 'g'))

  for (let i = 0; i < h.length; i++) {
    h[i] = parseInt(h[i].length === 1 ? h[i] + h[i] : h[i], 16)
  }
  if (typeof opacity !== 'undefined') {
    h.push(opacity)
  }

  return `rgba(${h.join(',')})`
}

function initArray(len, value) {
  return new Array(len).fill(value)
}

function isArray(someObject) {
  const objectToString = Object.prototype.toString.call(someObject)
  return objectToString === '[object Array]'
}

n === parseFloat(n) && !(n % 2)

function isFunction(functionToCheck) {
  const getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

list.reduce(__getMax, Number.NEGATIVE_INFINITY)

function mod(dividend, divisor) {
  return ((dividend % divisor) + divisor) % divisor
}

function objectValuesToString(obj) {
  if (!obj) {
    return ''
  } else if (typeof obj !== 'object' || obj instanceof Date) {
    return ''
  }

  return Object.keys(obj).map(key => obj[key])
    .filter(val => val || val === 0 || val === '0' || val === false)
    .join(', ')
}

Math.floor(Math.random() * (max - min + 1)) + min

function removeDuplicates(arr) {
  return arr.filter((item, index, inputArray) => {
    return inputArray.indexOf(item) === index
  })
}

str.replace(new RegExp(find, 'g'), replace)

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line max-len


//--------------------------------------------------

const lessons = [
	{
		title: '',
		views: 1,
		tags: []
	}
]

var filtered = lessons
				.filter(x => x.tags.indexOf(searchTerm) > -1)
				.filter(x => x.views > minViews)
				.sort((a, b) => b.views - a.views)
				.map(x +> '<li>${x.title}</li>')
				.join('\n')

//--------------------------------------------------

data.reduce(function(acc, value) {
	acc.push(value * 2);
	return acc;
}, []) 

data.map(function(item) {
	return item * 2;
});

data.reduce(function(acc, value) {
	if(value % 2 === 0) {
		acc.push(value);
	}
	return acc;
}, []);


console.time('bigData');
var eventFiltered = data.filter(function(item) {
	return (item % 2 === 0);
}).map(function(value) {
	return value * 2;
});
console.timeEnd('bigData');

//--------------------------------------------------

var initValue = {};
var reducer = function(tally, vote) {
	if(!tally[vote]) {
		tally[vote] = 1;
	} else {
		tally[vote] = tally[vote] + 1;
	}
	return tally;
}
var result = votes.reduce(reducer, initValue);

//--------------------------------------------------

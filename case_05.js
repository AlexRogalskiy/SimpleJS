//const { Map, List } = require("immutable-ext")
// const {Sum} = require("../monoid")

const Sum = x => ({
	x,
	of: x => Sum(x),
	concat: ({x: y}) => Sum(x + y),
	inspect: () => 'Sum(${x})'
})
Sum.empty = () => Sum(0)

const Product = x => ({
	x,
	of: x => Product(x),
	concat: ({x: y}) => Product(x * y),
	inspect: () => 'Product(${x})'
})
Product.empty = () => Product(1)

const All = x => ({
	x,
	of: x => All(x),
	concat: ({x: y}) => All(x && y),
	inspect: () => 'All(${x})'
})
All.empty = () => All(true)

const Any = x => ({
	x,
	of: x => Any(x),
	concat: ({x: y}) => Any(x || y),
	inspect: () => 'Any(${x})'
})
Any.empty = () => Any(false)

const Max = x => ({
	x,
	of: x => Max(x),
	concat: ({x: y}) => Max(x > y ? x : y),
	inspect: () => 'Max(${x})'
})
Max.empty = () => Max(-Infinity)

const Min = x => ({
	x,
	of: x => Min(x),
	concat: ({x: y}) => Min(x < y ? x : y),
	inspect: () => 'Min(${x})'
})
Min.empty = () => Min(Infinity)

const First = x => ({
	//x,
	of: x => First(x),
	fold: f => f(x),
	//concat: _ => First(x),
	concat: o => x.isLeft ? o : First(x)
	inspect: () => 'First(${x})'
})
First.empty = () => First(Left())

const Intersecetion = xs => ({
	xs,
	concat: ({xs: ys}) => Intersecetion(xs.filter(x => ys.some(y => x === y)))
})

const result6 = Sum(1).concat(Sum(2))
console.log(result6)

const result7 = All(true).concat(All(false))
console.log(result7)

const result8 = First("true").concat(First("false"))
console.log(result8)

const find = (xs, f) =>
				List(xs)
				.foldMap(x => First(f(x) ? Right(x) : Left()), First.empty())
				.fold(x => x)
find([3, 4, 5, 6, 7], x => x > 4)

const Fn = f => ({
	of: x => Fn(x),
	fold: f,
	concat: o => Fn(x => f(x).concat(o.fold(x)))
})
const hasVowels = x => !!x.match(/[aeiou/ig)
const longWord = x => x.length >= 5
const both = Fn(compose(Any, hasVowels))
			.concat(Fn(compose(Any, longWord)))
['gym', 'bird', 'lilac'].filter(x => both.fold(x).x)

const Pair = (x, y) => ({
	x,
	y,
	of: (x, y) => Pair(x, y),
	concat: ({x: x1, y: y1}) => Pair(x.concat(x1), y.concat(y1))
})

// const actor1 = Map({name: First('Nico'), isPaid: All(true), points: Sum(10), friends: ['Franklin']})
// const actor2 = Map({name: First('Nico'), isPaid: All(false), points: Sum(2), friends: ['Gatsby']})
// const result9 = actor1.concat(actor2);
// console.log(result9);
// console.log(result9.toJS());
//--------------------------------------------------

const result9 = Sum.empty().concat(Sum(1).concat(Sum(2)))
console.log(result9)

const result10 = All(true).concat(All(true).concat(All.empty()))
console.log(result10)

// const result11 = List.of([Sum(1), Sum(2), Sum(3))
// 					.fold(Sum.empty())
// console.log(result11)
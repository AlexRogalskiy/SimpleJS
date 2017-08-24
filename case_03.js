const fs = require("fs")

const Left = x => ({
	of: x => Left(x),
	map: f => Left(x),
	chain: f => Left(x),
	fold: (f, g) => f(x),
	inspect: () => 'Left(${x})',
	concat: o => Left(x)
});

const Right = x => ({
	of: x => Right(x),
	map: f => Right(f(x)),
	chain: f => f(x),
	fold: (f, g) => g(x),
	inspect: () => 'Right(${x})',
	concat: o => o.fold(e => Left(e), r => Right(x.concat(r)))
});

const Either = Right || Left;

const fromNullable = x => 
					x != null ? Right(x) : Left(null);

const result3 = Right(3).map(x => x + 1).map(x => x / 2);
const result4 = Right(3).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x);
console.log(result3);
console.log(result4);

const findColor = name =>
				fromNullable({red: '#ff4444', blue: '$3b5998', yellow: '#fff68f'}[name])

const result5 = findColor('green')
				.map(c => c.slice(1))
				.fold(e => 'no color', c => c.toUpperCase());
console.log(result5);

const getPort = () => {
	try {
		const str = fs.readFileSync('config.json')
		const config = JSON.parse(str)
		return config.port
	} catch (e) {
		return 3000
	}
}
const tryCatch = f => {
	try {
		return Right(f())
	} catch(e) {
		return Left(e)
	}
}
const getPort2 = () =>
					tryCatch(() => fs.readFileSync('config.json'))
					.chain(c => tryCatch(() => JSON.parse(c)))
					.fold(e => 3000, c => c.port)
const result6 = getPort()
console.log(result6)

//--------------------------------------------------

const stats = List.of({page: '', views: 1})
stats.foldMap(x => fromNullable(x.views).map(Sum), Right(Sum(0)))
const Box = x => ({
	ap: box_ => box_.map(x),
	of: x => Box(x),
	map: f => Box(f(x)),
	fold: f => f(x),
	inspect: () => 'Box(${x})',
});

const nextChar = str => [str]
						.map(s => s.trim())
						.map(s => parseInt(s))
						.map(i => i + 1)
						.map(i => String.fromCharCode(i));

const result = nextChar(' 64 ');

const currencyToFloat = str =>
						parseFloat(str.replace(/\$/g, ''));
const currencyToFloat2 = str =>
						Box(str)
						.map(s => s.replace(/\$/g, ''))
						.map(r => parseFloat(r));

const percentToFloat = str => {
						const replaced = str.replace(/\%/g, '')
						const number = parseFloat(replaced)
						return number * 0.01
};
const percentToFloat2 = str =>
						Box(str)
						.map(s => s.replace(/\%/g, ''))
						.map(replaced => parseFloat(replaced))
						.map(number => number * 0.01);

const applyDiscount = (price, discount) => {
						const cost = currencyToFloat(price)
						const savings = percentToFloat(discount)
						return cost - cost * savings
};
const applyDiscount2 = (price, discount) =>
						currencyToFloat2(price)
						.map(cost => percentToFloat2(discount)
							.map(savings => cost - cost * savings));

const LazyBox = g => ({
	of: x => LazyBox(x),
	fold: f => f(g()),
	map: f => LazyBox(() => f(g()))
})

const nextChar2 = str => Box(str)
						.map(s => s.trim())
						.map(s => parseInt(s))
						.map(i => i + 1)
						.map(i => String.fromCharCode(i))
						.fold(c => c.toLowerCase());

const result2 = applyDiscount('55.00', '30%');
console.log(result2);

const nextChar3 = str => LazyBox(() => str)
						.map(s => s.trim())
						.map(s => parseInt(s))
						.map(i => i + 1)
						.map(i => String.fromCharCode(i))
						.fold(c => c.toLowerCase());

const result3 = nextChar3(' 55.00 ');
console.log(result3);
//--------------------------------------------------



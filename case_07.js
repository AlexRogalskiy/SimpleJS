const Task = require("data.task")

Task.of(1) //Task.rejected(1)
.map(x => x + 1)
.chain(x => Task.of(x + 1))
.fork(e => console.log("error", e), x => console.log("success", x))

 const lauch = () =>
 				new Task((reject, response) => {
 					console.log("lauched")
 					response("lauched")
 				})
const app = lauch().map(x => x + "!")

app.map(x => x + "!").fork(e => console.log("error", e), x => console.log("success", x))

//--------------------------------------------

const join = m =>
			m.chain(x => x)
const m = Box('wonder')
const res1 = join(Box.of(m))
const res2 = join(m.map(Box.of))
console.log(res1, res2)

//--------------------------------------------

const add = (x, y) => x + y
const add2 = x => (y => x + y)
const inc = add(1)
console.log(inc(2))

const modulo = diviser => divider => divider % diviser
const isOdd = modulo(2)

const filter = pred => xs => xs.filter(pred)
console.log(filter(isOdd))

const replace = regex => replacer => str => str.replace(regex, replacer)
const censor = replace(/[aeiou]/ig)('*')
console.log(censor('hello world'))

const censorAll = map(censor)
console.log(censorAll(['hello', 'world']))

//--------------------------------------------

const liftA2 = (f, fx, fy) => fx.map(f).ap(fy)
const liftA3 = (f, fx, fy, fz) => fx.map(f).ap(fy).ap(fz)

const $ = selector => Either.of({selector, height: 10})
const getScreenSize = screen => head => foot => screen - (head.height + foot.height)

const res = Either.of(getScreenSize(800)).ap($('header')).ap($('foot'))
const res1 = liftA2(getScreenSize(800)), $('header'), $('footer'))
console.log(res1)
$('header').chain(head => $('footer').map(footer => getScreenSize(800, head, footer)))

//--------------------------------------------

const res3 = Box(x => y => x + y).ap(Box(2))
console.log(res3)
const res4 = liftA2(add, Box(2), Box(4))
console.log(res4)
const res5 = liftA3(add, Box(2), Box(4), Box(5))
console.log(res5)

//--------------------------------------------

const merch = () =>
			List.of(x => y => z => '${x}-${y}-${z}')
			.ap(List(['teeshirt', 'sweater']))
			.ap(List(['large', 'medium', 'small']))
			.ap(List(['black', 'white']))

//--------------------------------------------

const readFile = futurize(fs.readFile)
List().traverse(Task.of, fn => readFile(fn, "utf-8")).fork(console.error, console.log)

//--------------------------------------------


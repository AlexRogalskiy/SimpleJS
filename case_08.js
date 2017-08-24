cosnt Task = require('data.task')

const DB = ({
	find: id => new Task((reject, response) =>
				//setTimeOut(() => response({id: id, title: '${id}'}), 10))
				response(id > 2 ? Right(fake(id)) : Left('not found')))
})

const report = (p1, p2) => 'Report: ${p1.title} compared to ${p2.title}'
Task.of(p1 => p2 => report(p1, p2))
		.ap(DB.find(20))
		.ap(DB.find(8))
		.fork(console.error, console.log)

//-------------------------------

const res = List().chain(x => List(x.split('')))

//-------------------------------

const first = xs => fromNullable(xs[0])
const largeNumbers = xs => xs.filter(x => x > 100)
const larger = x => x * 2
const app = xs => first(largeNumbers(xs)).map(larger)

console.log(app([2, 400, 5, 1000]))

//-------------------------------

const fake = id => ({id: id, name: "name", gid: id + 1})
const eitherToTask = e => e.fold(Task.rejected, Task.of)

DB.find(2)
.chain(eitherToTask)
.chain(user => DB.find(user.gid))
.chain(eitherToTask)
.fork(e => console.error(e), r => console.log(r))

//-------------------------------

const httpGet = (path, params) =>
				Task.of('${path} result')
Map({home: ['/', '/about'], about: ['/about-us']})
.traverse(Task.of, routes => List(routes).traverse(Task.of, route => httpGet(route, {})))
.fork(console.error, console.log)

//-------------------------------

const ISO = (to, from) => ({
	to,
	from
})

const chars = ISO(s => s.split(''), c => c.join(''))
const truncate = str => chars.from(chars.to(str).slice(0, 3)).concat('...')
const singleton = ISO(e => e.fold(() => [], x => [x]), ([x]) => x ? Right(x) : Left(x))
const filterEither = (e, pred) => singleton.from(singleton.to(e).filter(pred))
const res = filterEither(Right('hello world'), x => x.match(/h/ig))
			.map(x => x.toUpperCase())

const res = chars.from(chars.to(''))

//-------------------------------


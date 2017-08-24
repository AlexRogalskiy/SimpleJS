const Task = require("data.task")
const fs = require("fs")

const readFile = (filename, encoding) => 
				new Task((reject, response) =>
				fs.readFile(filename, encoding, (err, contents) => 
					err ? reject(err) : response(contents)))
const writeFile = (filename, encoding) => 
				new Task((reject, response) =>
				fs.writeFile(filename, encoding, (err, success) => 
					err ? reject(err) : response(success)))

const app = () =>
			readFile("package.json", 'utf-8')
			.map(contents => contents.replace('/8/g', '6'))
			.chain(contents => writeFile('package2.json', contents))

app().fork(e => console.log(e), x => console.log('success'))
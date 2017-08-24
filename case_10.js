
const obj = {
	name: "name",
	handle: (message, handler) => handler(message),
	receive: () => obj.handle("test", message => console.log(message + ' ' + obj.name)),
}
obj.receive()

//--------------------------------------------------

$('tag').autocomplete({
	//source: ["JS", "Java", "Clojure"],
	source: "autocomplete_handler.php",
	minLength: 3,
	delay: 1000,
	change: function(ev, ui) {
		log(ui.item.label);
	}
	// source: function(req, res) {
	// 	log(req.term);
	// 	res([""]);
	// }
}).height(100);

//--------------------------------------------------

function getAddress() {
	return {
		city: "city",
		state: "state",
		zip: "zip",
	};
}

let {city: c, state: s, zip: z} = getAddress();

const log = (e) => console.log(e);
const error = (e) => console.log(e);


//--------------------------------------------------

function addAsync(x, y , cb) {
	setTimeout(function() {
		cb(x + y);
	}, 1000);
}

function makeThunk(fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function(cb) {
		args.push(cb);
		fn.apply(null, args);
	};
}

var thunk = makeThunk(addAsync, 10, 15);

thunk(function(sum)) {
	console.log(sum);
}
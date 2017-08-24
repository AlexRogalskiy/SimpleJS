
const obj = {
	name: "name",
	handle: (message, handler) => handler(message),
	receive: () => obj.handle("test", message => console.log(message + ' ' + obj.name)),
}
obj.receive()

//--------------------------------------------------


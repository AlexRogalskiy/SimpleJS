const openSite = () => {
	if(current_user) {
		return renderPage(current_user)
	} else {
		return showLogin()
	}
}
const openSite2 = () =>
				fromNullable(current_user)
				.fold(showLogin, renderPage)
const getPrefs = user => {
	if(user.premium) {
		return loadPrefs(user.preferences)
	} else {
		return defaultPrefs
	}
}
const getPrefs2 = user =>
					(user.premium ? Right(user) : Left('not premium'))
					.map(u => u.preferences)
					.fold(() => defaultPrefs, prefs => loadPrefs(prefs))

 const streetName = user => {
 	const address = user.address
 	if(address) {
 		const street = address.street
 		if(street) {
 			return street.name
 		}
 	}
 	return 'no street'
 }
 const streetName2 = user =>
 					fromNullable(user.address)
 					.chain(a => fromNullable(a.street))
 					.map(s => s.name)
 					.fold(e => 'no stret', n => n)
const concatUniq = (x, y) => {
	const found = y.filter(ys => yx === x)[0]
	return found ? y : y.concat(x)
}
const concatUniq2 = (x, ys) =>
					fromNullable(ys.filter(y => y === x)[0])
					.fold(() => ys.concat(x), y => ys)
const wrapExamples = example => {
	if(example.previewPath) {
		try {
			example.preview = fs.readFileSync(example.previewPath)
		} catch (e) {}
	}
	return example
}
const readFile = x => tryCatch(() => fs.readFileSync(x))
const wrapExamples2 = example =>
						fromNullable(example.previewPath)
						.chain(readFile)
						.fold(() => example, ex => Object.assign({preview: p}, ex))
const parseDbUrl = config => {
	try {
		const c = JSON.parse(config)
		if(c.url) {
			return c.url.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
		}
	} catch(e) {
		return null
	}
}
const parseDbUrl2 = config =>
					tryCatch(() => JSON.parse(config))
					.chain(c => fromNullable(c.url))
					.fold(e => null, u = u.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/))

//--------------------------------------------------
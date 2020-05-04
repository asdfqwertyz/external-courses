const openRequest = function(method, url, body) {
	const headers = {
		'Content-Type': 'application/json'
	}
	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers
	})
	.then((data) => data.json())
	.then((response) => console.log(response))
}
module.exports = openRequest

const requestUrl = 'https://jsonplaceholder.typicode.com/users';
const openRequest = function(method, url, body) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open(method, url)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.send(JSON.stringify(body))
		xhr.responseType = 'json'
		xhr.onload = function() {
			resolve(xhr.response)
		}
		xhr.onerror = function() {
			reject(xhr.reject)
		}
	})
}
module.exports = openRequest

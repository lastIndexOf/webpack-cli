import App from './components/App.js'


App()

let xhr = new XMLHttpRequest()

xhr.open('GET', '/yora/src/v1/activity/activity.php')
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		console.log(xhr.response)
	}
}
xhr.send()
// ------Alison's tiny utility js lib V.1.2------
// eff utility wrapper fns/lib for my dex issues 
// style: keep 1 underlying longname fn per fn, & underlying fn that shd be obvious. no special characters, they hurt
function id(id) {
	return document.getElementById(id);
}

function qs(selector) {
	return document.querySelector(selector);
}

function qsa(selector) {
	return document.querySelectorAll(selector);
}

function l(msg) {
	console.log(msg);
}

function a(msg) {
	alert(msg);
}

function e(msg) {
	throw new Error(msg);
}
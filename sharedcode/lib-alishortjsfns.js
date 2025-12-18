// ------Alison's tiny utility js lib V.1.3------
// eff utility wrapper fns/lib for my dex issues 
// style: keep 1 underlying longname fn per fn, & underlying fn that shd be obvious. no special characters, they hurt
function id(id_) {
	return document.getElementById(id_);
}

function qs(selector_) {
	return document.querySelector(selector_);
}

function qsa(selector_) {
	return document.querySelectorAll(selector_);
}

function l(msg_) {
	console.log(msg_);
}

function a(msg_) {
	alert(msg_);
}

function e(msg_) {
	throw new Error(msg_);
}
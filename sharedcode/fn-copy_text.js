async function copy_text(ele_) {
	let text = ele_.textContent;
	await navigator.clipboard.writeText(text);
}
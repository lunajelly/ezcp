function documentfragment_of_eles_from_text_array(textarray_, ele_) {
	
	const fragment = document.createDocumentFragment();
	
	textarray_.forEach(msg => {
		const e = document.createElement(ele_);
		e.textContent = msg;
		e.tabIndex = 0; //SR access
		fragment.append(e);
	});
		
	return fragment;
}
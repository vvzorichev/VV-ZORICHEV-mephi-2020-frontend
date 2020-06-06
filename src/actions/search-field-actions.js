const onSearch = (searchData) => {
	console.log(searchData)
	return {
		type: 'ON_SEARCH',
		payload: searchData
	};
};

export {
	onSearch
};
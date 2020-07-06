const updateFolderStatus = (state, action) => {
	console.log(state);
	if (state === undefined) {
		
		return {
			isOpen: false,
			id: null,
		};
	}

	switch (action.type) {

		case 'OPEN':
			return {
				isOpen: true,
				id: action.payload
			};

		case 'CLOSE':
			return {
				isOpen: false,
				id: null
			};

		default:
			console.log(state);
			return state.folderStatus;
	}
};

export default updateFolderStatus;
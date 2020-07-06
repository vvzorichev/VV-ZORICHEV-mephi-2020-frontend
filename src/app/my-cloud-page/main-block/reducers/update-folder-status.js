const updateFolderStatus = (state, action) => {
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
			return state.folderStatus;
	}
};

export default updateFolderStatus;
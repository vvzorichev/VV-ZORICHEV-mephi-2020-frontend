const updateFileList = (state, action) => {

	if (state === undefined) {
		return {
			files: [],
			loading: true,
			error: null
		};
	}

	const { type, payload } = action;

	switch (type) {

		case 'FETCH_FILES_REQUEST':
			return {
				files: [],
				loading: true,
				error: null
			};

		case 'FETCH_FILES_SUCCESS':
			return {
				files: payload,
				loading: false,
				error: null
			};
		
		case 'FETCH_FILES_FAILURE':
			return {
				files: [],
				loading: false,
				error: payload
			};

		default:
			return state.fileList;
	}
};

export default updateFileList;
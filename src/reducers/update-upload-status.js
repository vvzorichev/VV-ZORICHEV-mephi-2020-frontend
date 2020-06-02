const updateUploadStatus = (state, action) => {
	
	if (state === undefined) {
		return {
			isUpload: false
		};
	}

	const { type } = action;

	switch (type) {
		
		case 'UPLOAD_START':
			return {
				isUpload: true
			};
		
		case 'UPLOAD_FINISH':
			return {
				isUpload: false
			};

		default:
			return state.uploadStatus;
	}
};

export default updateUploadStatus;
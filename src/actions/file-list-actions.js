const filesRequested = () => {
	return {
		type: 'FETCH_FILES_REQUEST'
	};
};

const filesLoaded = (newFiles) => {
	return {
		type: 'FETCH_FILES_SUCCESS',
		payload: newFiles
	};
};

const filesError= (error) => {
	return {
		type: 'FETCH_FILES_FAILURE',
		payload: error
	};
};

const fetchFiles = (fileService) => () => (dispatch) => {
	dispatch(filesRequested());
	fileService.getFiless()
		.then((data) => dispatch(filesLoaded(data)))
		.catch((err) => dispatch(filesError(err)));
}; 

export default fetchFiles;
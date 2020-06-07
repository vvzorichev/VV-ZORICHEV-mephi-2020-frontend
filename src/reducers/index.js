import updateFileList from './update-file-list';
import updateMemory from './update-memory';
import updateSearchField from './update-search-field';
import updateLogStatus from './update-log-status';
import updateUploadStatus from './update-upload-status';

const reducer = (state, action) => {
	const fileList = updateFileList(state, action);
	const memory = updateMemory(state, action);
	const logStatus = updateLogStatus(state, action);

	const searchField =
		logStatus.isLoggedIn ?
		updateSearchField(state, action) :
		updateSearchField(undefined, action);
	
	const uploadStatus = 
		logStatus.isLoggedIn ? 
		updateUploadStatus(state, action) :
		updateUploadStatus(undefined, action);

	return {
		fileList,
		memory,
		searchField,
		logStatus,
		uploadStatus
	}
};

export default reducer;
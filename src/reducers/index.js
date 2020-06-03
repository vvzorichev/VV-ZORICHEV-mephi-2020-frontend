import updateFileList from './update-file-list';
import updateMemory from './update-memory';
import updateLogStatus from './update-log-status';
import updateUploadStatus from './update-upload-status';
 
const reducer = (state, action) => {
	const fileList = updateFileList(state, action);
	const memory = updateMemory(state, action)
	const logStatus = updateLogStatus(state, action);
	const uploadStatus = 
		logStatus.isLoggedIn && 
		updateUploadStatus(state, action);

	return {
		fileList,
		memory,
		logStatus,
		uploadStatus
	}
};

export default reducer;
import updateFileList from './update-file-list';
import updateLogStatus from './update-log-status';
import updateUploadStatus from './update-upload-status';
 
const reducer = (state, action) => {
	return {
		fileList: updateFileList(state, action),
		logStatus: updateLogStatus(state, action),
		uploadStatus: updateUploadStatus(state, action)
	}
};

export default reducer;
import updateFileList from '../app/my-cloud-page/file-list/reducers/update-file-list';
import updateMemory from './update-memory';
import updateSearchField from '../app/header/search-panel/reducers';
import updateLogStatus from './update-log-status';
import updateUploadStatus from '../app/my-cloud-page/toolbar/reducers';

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
import updateFileList from '../my-cloud-page/main-block/file-list/reducers/update-file-list';
import updateMemory from './update-memory';
import updateSearchField from '../header/search-panel/reducers';
import updateLogStatus from './update-log-status';
import updateUploadStatus from '../my-cloud-page/main-block/toolbar/upload-menu/reducers';
import updateFolderStatus from '../my-cloud-page/main-block/reducers';


const reducer = (state, action) => {
	const fileList = updateFileList(state, action);
	const memory = updateMemory(state, action);
	const logStatus = updateLogStatus(state, action);
	const folderStatus = updateFolderStatus(state, action);

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
		logStatus,
		folderStatus,
		searchField,
		uploadStatus
	}
};

export default reducer;
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onOpenFolder } from '../../actions';
import { changeFileTag } from '../actions';

import FileListItem from './file-list-item.jsx';

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changeFileTag,
		onOpenFolder
	}, dispatch);
};

const FileListItemContainer = ({ file = {}, changeFileTag, onOpenFolder }) => {

	return (
		<FileListItem 
			file={file}
			changeFileTag={changeFileTag}
			onOpenFolder={onOpenFolder} />
	);
};

export default connect(null, mapDispatchToProps)(FileListItemContainer);
import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from '../../../../../utils';

import { onOpenFolder } from '../../actions';
import { changeFileTag } from '../actions';

import FileListItem from './file-list-item.jsx';

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changeFileTag,
		onOpenFolder
	}, dispatch);
};

const FileListItemContainer = ({ file = {}, changeFileTag, onOpenFolder, history }) => {

	const handleOpening = () => {
		if (history.location.pathname !== '/mycloud/drive') {
			history.replace('/mycloud/drive');
		}
		onOpenFolder(file.id);
	};

	return (
		<FileListItem 
			file={file}
			changeFileTag={changeFileTag}
			onOpenFolder={handleOpening} />
	);
};

export default compose(
	connect(null, mapDispatchToProps),
	withRouter
)(FileListItemContainer);
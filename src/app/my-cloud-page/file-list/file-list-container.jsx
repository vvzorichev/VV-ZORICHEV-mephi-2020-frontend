import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withFileService } from '../../common/hoc-helpers';
import { compose } from '../../../utils';
import { fetchFiles, changeFileTag } from './actions';

import Spinner from '../../common/spinner';
import ErrorIndicator from '../../common/error-indicator';

import FileList from './file-list.jsx'

const mapStateToProps = ({
	fileList: { files, loading, error }, 
	searchField: { searchField } 
}) => {
	return { files, loading, error, searchField };
};

const mapDispatchToProps = (dispatch, { fileService }) => {
	return bindActionCreators({
		fetchFiles: fetchFiles(fileService),
		changeFileTag
	}, dispatch);
};

class FileListContainer extends Component {

	componentDidMount() {
		this.props.fetchFiles();		
	}

	render() {
		const { 
			files, 
			loading, 
			error, 
			section, 
			searchField,
			changeFileTag } = this.props;

		if (loading) {
			return <Spinner />;
		}

		if (error) {
			return <ErrorIndicator />;
		}

		return (
			<FileList 
				section={section} 
				files={files} 
				searchField={searchField}
				changeFileTag={changeFileTag} /> 
		);
	}
};

export default compose(
	withFileService(),
	connect(mapStateToProps, mapDispatchToProps)
)(FileListContainer);
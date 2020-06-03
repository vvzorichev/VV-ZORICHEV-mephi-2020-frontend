import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withFileService } from '../../common/hoc-helpers';
import { compose } from '../../../utils';
import { fetchFiles } from '../../../actions';

import Spinner from '../../common/spinner';
import ErrorIndicator from '../../common/error-indicator';

import FileList from './file-list.jsx'

const mapStateToProps = ({ fileList: { files, loading, error }}) => {
	return { files, loading, error };
};

const mapDispatchToProps = (dispatch, { fileService }) => {
	return bindActionCreators({
		fetchFiles: fetchFiles(fileService)
	}, dispatch);
};

class FileListContainer extends Component {

	componentDidMount() {
		this.props.fetchFiles();		
	}

	render() {
		const { files, loading, error, section } = this.props;

		if (loading) {
			return <Spinner />;
		}

		if (error) {
			return <ErrorIndicator />;
		}

		return <FileList section={section} files={files}/>;
	}
};

export default compose(
	withFileService(),
	connect(mapStateToProps, mapDispatchToProps)
)(FileListContainer);
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onUploadFinish } from '../../../actions';

const mapStateToProps =  ({ uploadStatus: { isUpload } }) => {
	return { isUpload	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onUploadFinish
	}, dispatch);
};

const UploadFileForm = ({ onUploadFinish, isUpload }) => {
	return (
		!isUpload ||
		<form>
			<input type="file"/>
			<button 
				type="submit" 
				className="btn btn-sm btn-secondary"
				onClick={onUploadFinish}>
				Upload
			</button>
		</form>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadFileForm);
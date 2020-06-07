import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onUploadStart } from '../actions';

const mapStateToProps =  ({ uploadStatus: { isUpload } }) => {
	return { isUpload	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onUploadStart
	}, dispatch);
};

const UploadBtn = ({ value, onUploadStart, isUpload }) => {

	return (
		isUpload ||
		<button 
			className="btn btn-sm btn-secondary"
			onClick={onUploadStart}>
			{value}
		</button>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadBtn);
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onUploadStart } from '../../actions';

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

const mapStateToProps =  ({ isUpload }) => {
	return { isUpload	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onUploadStart
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadBtn);
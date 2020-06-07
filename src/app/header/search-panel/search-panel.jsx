import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from '../../../utils';

import { onSearch } from '../../../actions';

import './search-panel.css';

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onSearch
	}, dispatch);
};

const SearchPanel = ({ onSearch, history }) => {
	
	const handleChange = (event) => {
		if (history.location.pathname !== '/mycloud/drive') {
			history.replace('/mycloud/drive');
		}
		onSearch(event.target.value);
	};

	return (
		<div className="search-panel mr-auto col-6 mt-2">
			<input 
				type="text" 
				className="form-control"
				placeholder="Search in Cloud"
				onChange={handleChange}/>
		</div>
	);
};

export default compose(
	connect(null, mapDispatchToProps),
	withRouter
)(SearchPanel);
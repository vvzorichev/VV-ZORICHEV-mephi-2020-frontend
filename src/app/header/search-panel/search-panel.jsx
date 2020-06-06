import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { onSearch } from '../../../actions';

import './search-panel.css';

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onSearch
	}, dispatch);
};

const SearchPanel = ({ onSearch }) => {

	const handleChange = (event) => {
		onSearch(event.target.value);
	};

	return (
		<div class="search-panel mr-auto col-6 mt-2">
			<input 
				type="text" 
				class="form-control"
				placeholder="Search in Cloud"
				onChange={handleChange}/>
		</div>
	);
};

export default connect(null, mapDispatchToProps)(SearchPanel);
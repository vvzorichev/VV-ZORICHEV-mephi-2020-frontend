import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onLogout } from '../../actions';

import Header from './header.jsx';

const mapStateToProps =  ({ logStatus: { isLoggedIn } }) => {
	return { isLoggedIn	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onLogout
	}, dispatch);
};

const HeaderContainer = ({ isLoggedIn, onLogout }) => {
	return (
		<Header
			isLoggedIn={isLoggedIn}
			onLogout={onLogout} />
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onLogout, onRegistration } from '../../../../actions';

import LogBtns from './log-btns.jsx';

const mapStateToProps =  ({ logStatus: { isLoggedIn, isRegistered } }) => {
	return { isLoggedIn, isRegistered	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onLogout,
		onRegistration
	}, dispatch);
};

const LogBtnsContainer = ({ 
	isLoggedIn, 
	isRegistered, 
	onLogout, 
	onRegistration }) => {
	
	return (
		<LogBtns
			isLoggedIn={isLoggedIn}
			isRegistered={isRegistered}
			onRegistration={onRegistration}
			onLogout={onLogout} />
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(LogBtnsContainer);
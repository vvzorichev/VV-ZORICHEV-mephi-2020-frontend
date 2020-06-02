import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { LogBtn } from '../common/buttons';
import { onLogout } from '../../actions';

import './header.css';

const Header = ({ isLoggedIn, onLogout }) => {
	const createAccount = 
		<LogBtn 
			logState={isLoggedIn} 
			to="/register" 
			value="Create Account" />;

	const login = 
		<LogBtn 
			logState={isLoggedIn} 
			to="/login" 
			value="Login" />;
	
	const logout = 
		<LogBtn 
			logState={!isLoggedIn} 
			to="/login" 
			value="Logout" 
			onLog={onLogout} />;

  return (
		<div className="header d-flex">
			<h3 className="mr-auto pt-1">
      	<Link className="ml-2 mt-2" to="/mycloud/drive">SafeCloud</Link>
			</h3>
			<ul className="d-flex mr-1">
				{createAccount}
				{login}
				{logout}
			</ul>
    </div>
  );
};

const mapStateToProps =  ({ isLoggedIn }) => {
	return { isLoggedIn	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onLogout
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
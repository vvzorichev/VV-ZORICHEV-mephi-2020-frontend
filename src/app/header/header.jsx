import React from 'react';
import { Link } from 'react-router-dom';

import SearchPanel from './search-panel';
import LogBtn from './log-btn';

import './header.css';

const Header = ({ isLoggedIn, isRegistered, onLogout, onRegistration }) => {
	const createAccount = isLoggedIn || isRegistered ||
		<LogBtn 
			to="/register" 
			value="Create Account" 
			onLog={onRegistration} />;

	const login = isLoggedIn || !isRegistered ||
		<LogBtn 
			to="/login" 
			value="Login" 
			onLog={onLogout} />;
	
	const logout = !isLoggedIn ||
		<LogBtn	
			to="/login" 
			value="Logout" 
			onLog={onLogout} />;

	const searchPanel = isLoggedIn && <SearchPanel />

  return (
		<div className="header">
			<h3 className="header-h3">
      	<Link className="header-h3-link" to="/mycloud/drive">
					SafeCloud
				</Link>
			</h3>
			{searchPanel}
			<ul className="header-btns-li">
				{createAccount}
				{login}
				{logout}
			</ul>
    </div>
  );
};

export default Header;
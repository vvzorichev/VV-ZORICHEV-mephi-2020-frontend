import React from 'react';
import { Link } from 'react-router-dom';

import SearchPanel from './search-panel';
import LogBtn from './log-btn';

import './header.css';

const Header = ({ isLoggedIn, onLogout }) => {
	const createAccount = isLoggedIn ||
		<LogBtn 
			to="/register" 
			value="Create Account" />;

	const login = isLoggedIn ||
		<LogBtn
			to="/login" 
			value="Login" />;
	
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
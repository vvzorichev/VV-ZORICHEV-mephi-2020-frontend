import React from 'react';
import { Link } from 'react-router-dom';

import SearchPanel from './search-panel';
import LogBtn from './log-btn';

import './header.css';

const Header = ({ isLoggedIn, onLogout }) => {
	const createAccount = 
		<LogBtn 
			logStatus={isLoggedIn} 
			to="/register" 
			value="Create Account" />;

	const login = 
		<LogBtn 
			logStatus={isLoggedIn} 
			to="/login" 
			value="Login" />;
	
	const logout = 
		<LogBtn 
			logStatus={!isLoggedIn} 
			to="/login" 
			value="Logout" 
			onLog={onLogout} />;

	const searchPanel = isLoggedIn && <SearchPanel />

  return (
		<div className="header d-flex">
			<h3 className="mr-auto pt-1">
      	<Link className="ml-2 mt-2" to="/mycloud/drive">SafeCloud</Link>
			</h3>
			{searchPanel}
			<ul className="d-flex mr-1">
				{createAccount}
				{login}
				{logout}
			</ul>
    </div>
  );
};

export default Header;
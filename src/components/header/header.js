import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onLogout }) => {
  return (
		<div className="header d-flex">
			<h3 className="mr-auto pt-1">
      	<Link className="ml-2 mt-2" to="/">SafeCloud</Link>
			</h3>
			<ul className="d-flex mr-1">
				<li>
					<Link className="btn" to="/register">Create Account</Link>
				</li>
				<li>
					<Link className="btn" to="/login">Login</Link>
				</li>
				<li>
					<Link className="btn" to="/login" onClick={onLogout}>Logout</Link>
				</li>
			</ul>
    </div>
  );
};

export default Header;
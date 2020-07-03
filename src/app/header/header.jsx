import React from 'react';
import { Link } from 'react-router-dom';

import SearchPanel from './search-panel';
import LogBtns from './log-btns';

import './header.css';

const Header = () => {
  return (
		<div className="header">
			<Link className="header-h3-link" to="/mycloud/drive">
				SafeCloud
			</Link>
			<SearchPanel />
			<LogBtns />
    </div>
  );
};

export default Header;
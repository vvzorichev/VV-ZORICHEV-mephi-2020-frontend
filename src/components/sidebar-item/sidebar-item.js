import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './sidebar-item.css'

const SidebarItem = ({ value, nav, section }) => {

	const [ active, setActive ] = useState(false);

	useEffect(() => {
		setActive(section === nav);
	}, [ section, nav ]);

	return (
		<li className="nav-item">
			<Link 
				className={`nav-link ${active ? "active" : null}`} 
				to={nav} >
				{value}
			</Link>
		</li>
	)
};

export default SidebarItem;

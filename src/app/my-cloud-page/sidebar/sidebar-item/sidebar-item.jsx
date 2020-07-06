import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar-item.css'

const SidebarItem = ({ value, section, active }) => {
	return (
		<Link 
			className={`nav-link ${active ? "active" : null}`} 
			to={section} >
			{value}
		</Link>
	)
};

export default SidebarItem;

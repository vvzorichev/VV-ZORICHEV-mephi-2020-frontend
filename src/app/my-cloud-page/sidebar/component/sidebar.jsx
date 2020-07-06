import React from 'react';
import SidebarItem from '../sidebar-item';
import Memory from '../memory';

import './sidebar.css';

const Sidebar = ({ section }) => {
	return (
		<nav className="col-md-2 d-none d-md-block sidebar">
			<div className="sidebar-sticky">
				<ul className="nav flex-column">
					<SidebarItem value="Cloud Drive" nav="drive" section={section}/>
					<SidebarItem value="Folders" nav="folders" section={section}/>
					<SidebarItem value="Recents" nav="recents" section={section}/>
					<SidebarItem value="Tagged" nav="tagged" section={section}/>
				</ul>
				<Memory />
			</div>
		</nav>
	);
};

export default Sidebar;
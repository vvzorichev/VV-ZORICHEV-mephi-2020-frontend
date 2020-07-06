import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import SidebarItem from './sidebar-item';

const SidebarItemContainer = ({ value, section, match }) => {
	
	const nav = match.params.nav || 'drive';

	const [ active, setActive ] = useState(false);

	useEffect(() => {
		setActive(section === nav);
	}, [ section, nav ]);

	return <SidebarItem active={active} section={section} value={value} />;
};

export default withRouter(SidebarItemContainer);

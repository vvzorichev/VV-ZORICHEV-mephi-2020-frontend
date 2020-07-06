import React from 'react';

import Sidebar from '../sidebar/component';
import MainBlock from '../main-block/component';

const MyCloudPage = ({ nav }) => {
	return (
		<div className="container-fluid row">
			<Sidebar section={nav} />
			<MainBlock section={nav} />
		</div>
	);
};

export default MyCloudPage;
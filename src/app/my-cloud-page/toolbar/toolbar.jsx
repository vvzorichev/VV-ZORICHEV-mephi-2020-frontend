import React from 'react';

import UploadMenu from './upload-menu';

const Toolbar = () => {
	return (
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
			<h4 className="h4">Cloud Drive &rsaquo;</h4>
			<UploadMenu />
		</div>
	);
};

export default Toolbar;
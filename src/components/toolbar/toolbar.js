import React from 'react';

const Toolbar = () => {
	return (
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
			<h4 className="h4">Cloud Drive &rsaquo;</h4>
			<div className="btn-toolbar mb-2 mb-md-0">
				<div className="btn-group mr-2">
					<button className="btn btn-sm btn-secondary">New Folder</button>
					<button className="btn btn-sm btn-secondary">File Upload</button>
					<button className="btn btn-sm btn-secondary">Folder Upload</button>
				</div>
			</div>
		</div>
	);
};

export default Toolbar;
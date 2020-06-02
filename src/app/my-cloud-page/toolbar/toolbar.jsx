import React from 'react';

import { UploadBtn } from '../../common/buttons';
import { UploadFileForm } from '../../common/forms';

const Toolbar = () => {
	return (
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
			<h4 className="h4">Cloud Drive &rsaquo;</h4>
			<div className="btn-toolbar form-toolbar mb-2 mb-md-0">
				<div className="btn-group mr-2">
					<UploadBtn value="New Folder" />
					<UploadBtn value="File Upload" />
					<UploadBtn value="Folder Upload" />
				</div>
				<div className="btn-group mr-2">
					<UploadFileForm />
				</div>
			</div>
		</div>
	);
};

export default Toolbar;
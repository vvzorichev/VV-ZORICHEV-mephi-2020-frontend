import React from 'react';

import Sidebar from './sidebar';
import FileList from './file-list';
import Toolbar from './toolbar';

const MyCloudPage = ({ nav }) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<Sidebar section={nav}/>
				<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
					<Toolbar />					
					<FileList section={nav} />
				</main>

			</div>
		</div>
	);
};

export default MyCloudPage;
import React from 'react';

import Toolbar from '../toolbar/component';
import FileList from '../file-list/component';

const MainBlock = ({ section }) => {
	return (
		<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
			<Toolbar />					
			<FileList section={section} />
		</main>
	);
};

export default MainBlock;
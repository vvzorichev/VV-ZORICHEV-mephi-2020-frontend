import React, { useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './sidebar';
import FileList from './file-list';
import Toolbar from './toolbar';

const MyCloudPage = ({ isLoggedIn, match }) => {

	const { nav } = match.params.nav ? match.params : { nav: 'drive'};
	
	useEffect(() => {
		document.title = 'MyCloud - SafeCloud'
	});
	
	if (!isLoggedIn) {
		return <Redirect to="/login" />;
	}

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

const mapStateToProps =  ({ isLoggedIn }) => {
	return { isLoggedIn	};
};

export default connect(mapStateToProps)(withRouter(MyCloudPage));
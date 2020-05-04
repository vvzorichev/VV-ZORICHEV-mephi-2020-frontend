import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import FileList from '../file-list';

const MyCloudPage = ({ isLoggedIn }) => {

	if (!isLoggedIn) {
		return <Redirect to="/login" />;
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<nav className="col-md-2 d-none d-md-block sidebar">
					<div className="sidebar-sticky">
						<ul className="nav flex-column">
							<li className="nav-item">
								<a className="nav-link active" href="#">
									Cloud Drive
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Recents
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Tagged
								</a>
							</li>
						</ul>
						<h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
							<span>Memory used</span>
						</h5>
					</div>
				</nav>

				<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
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

					<FileList />
				</main>
			</div>
		</div>
	);
};

const mapStateToProps =  ({ isLoggedIn }) => {
	return { isLoggedIn	};
};

export default connect(mapStateToProps)(MyCloudPage);
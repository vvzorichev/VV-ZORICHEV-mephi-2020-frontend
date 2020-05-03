import React from 'react';
import { Redirect } from 'react-router-dom';

const MyCloudPage = ({ isLoggedIn }) => {

	if (!isLoggedIn) {
		return <Redirect to="/login" />;
	}

	return (
		<div class="container-fluid">
			<div class="row">
				<nav class="col-md-2 d-none d-md-block sidebar">
					<div class="sidebar-sticky">
						<ul class="nav flex-column">
							<li class="nav-item">
								<a class="nav-link active" href="#">
									Cloud Drive
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Recents
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Tagged
								</a>
							</li>
						</ul>
						<h5 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
							<span>Memory used</span>
						</h5>
					</div>
				</nav>

				<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
					<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
						<h4 class="h4">Cloud Drive &rsaquo;</h4>
						<div class="btn-toolbar mb-2 mb-md-0">
							<div class="btn-group mr-2">
								<button class="btn btn-sm btn-secondary">New Folder</button>
								<button class="btn btn-sm btn-secondary">File Upload</button>
								<button class="btn btn-sm btn-secondary">Folder Upload</button>
							</div>
						</div>
					</div>

					<div class="table-responsive">
						<table class="table table-striped table-sm">
							<thead>
								<tr>
									<th>&#9872;</th>
									<th>Name</th>
									<th>Size</th>
									<th>Type</th>
									<th>Date added</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="customControlAutosizing" />
											<label class="custom-control-label" for="customControlAutosizing">
											</label>
										</div>
									</td>
									<td>file</td>
									<td>55 B</td>
									<td>pdf</td>
									<td>20/4/2020</td>
								</tr>
							</tbody>
						</table>
					</div>
				</main>
			</div>
		</div>
	);
};

export default MyCloudPage;
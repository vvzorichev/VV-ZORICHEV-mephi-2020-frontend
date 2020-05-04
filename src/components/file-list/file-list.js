import React from 'react';
import FileListItem from '../file-list-item';

const FileList = ({ files = [{id: 1, name: 'file', size: '50 B', type: 'pdf', date_added: '20/04/2020' },
														 {id: 2, name: 'msg', size: '100 MB', type: 'pdf', date_added: '1/05/2020' }] }) => {


	return (
		<div className="table-responsive">
			<table className="table table-sm">
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
					{
						files.map((file) => {
							return (
								<FileListItem key={file.id} file={file}/>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
};

export default FileList;

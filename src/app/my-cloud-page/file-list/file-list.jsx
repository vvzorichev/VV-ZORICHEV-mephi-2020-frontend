import React from 'react';

import FileListItem from './file-list-item';
import { filesFilter } from '../../../utils';

const FileList = ({ section, files, searchField }) => {

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
						files
							.filter((file) => filesFilter(file, searchField, section))
							.sort((fileA, fileB) => {
								return fileA.name.localeCompare(fileB.name);
							})
							.map((file) => {
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
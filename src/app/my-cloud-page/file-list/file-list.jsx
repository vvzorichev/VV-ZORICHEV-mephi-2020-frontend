import React from 'react';

import FileListItem from './file-list-item';
import { withFileService } from '../../common/hoc-helpers';
import { filesFilter } from '../../../utils';

const mapMethodsToProps = (fileService) => {
	return {
		getFiles: fileService.getFiles
	};
};

const FileList = ({ section, getFiles }) => {
	
	const files = getFiles();

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
							.filter((file) => filesFilter(file, section))
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

export default withFileService(mapMethodsToProps)(FileList);
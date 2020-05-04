import React from 'react';
import FileListItem from '../file-list-item';
import { withFileService } from '../hoc-helpers';


const FileList = ({ getFiles }) => {

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

const mapMethodsToProps = (fileService) => {
	return {
		getFiles: fileService.getFiles
	};
};

export default withFileService(mapMethodsToProps)(FileList);

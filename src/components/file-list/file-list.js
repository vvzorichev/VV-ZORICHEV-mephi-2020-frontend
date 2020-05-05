import React from 'react';
import FileListItem from '../file-list-item';
import { withFileService } from '../hoc-helpers';


const FileList = ({ section, getFiles }) => {

	const files = getFiles();

	const filter = (file, section) => {
		switch (section) {
			case 'drive':
				return true;

			case 'folders':
				return file.type === 'folder';

			case 'recents':
				const month = (new Date()).getMonth();
				const reg1 = new RegExp(`/${month}/`);
				const reg2 = new RegExp(`/${month + 1}/`);
				return reg1.test(file.date_added) || reg2.test(file.date_added);

			case 'tagged':
				return file.isTagged;

			default:
				return true;
		}
	}

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
							.filter(file => filter(file, section))
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

const mapMethodsToProps = (fileService) => {
	return {
		getFiles: fileService.getFiles
	};
};

export default withFileService(mapMethodsToProps)(FileList);

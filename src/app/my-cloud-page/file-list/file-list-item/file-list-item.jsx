import React from 'react';
import Checkbox from '../../../common/checkbox';

const FileListItem = ({ file = {}, changeFileTag }) => {
	const { id, name, size, type, dateAdded, isTagged } = file;

	return (
		<tr>
			<td>
				<Checkbox 
					id={id} 
					isTagged={isTagged} 
					changeFileTag={changeFileTag} />
			</td>
			<td>{name}</td>
			<td>{size}</td>
			<td>{type}</td>
			<td>{dateAdded}</td>
		</tr>
	);
};

export default FileListItem;
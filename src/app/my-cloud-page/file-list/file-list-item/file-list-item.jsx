import React from 'react';
import Checkbox from '../../../common/checkbox';

const FileListItem = ({ file = {}, changeFileTag }) => {
	const { id, name, size, type, date_added, isTagged } = file;

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
			<td>{date_added}</td>
		</tr>
	);
};

export default FileListItem;
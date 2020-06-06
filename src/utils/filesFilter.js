const filesFilter = (file, searchField, section) => {

	const isNameEqual = () => {
		if (!searchField) {
			return true;
		}
		const reg = new RegExp(`${searchField}`);
		return reg.test(file.name);
	}

	switch (section) {
		
		case 'drive':
			return isNameEqual();

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
};

export default filesFilter;
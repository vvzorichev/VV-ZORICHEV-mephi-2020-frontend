const filesFilter = (file, section) => {
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
};

export default filesFilter;
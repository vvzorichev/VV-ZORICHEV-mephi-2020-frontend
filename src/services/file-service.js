export default class fileService {

	getFiles() {
		return [
			{
				id: 1, 
				name: 'file', 
				size: '50 B', 
				type: 'pdf', 
				date_added: '20/04/2020',
				isTagged: false },
			{
				id: 2, 
				name: 'msg', 
				size: '100 MB', 
				type: 'pdf', 
				date_added: '1/05/2020',
				isTagged: true }
		];
	};
	
};
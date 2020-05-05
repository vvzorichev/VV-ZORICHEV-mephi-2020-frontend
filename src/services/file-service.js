export default class fileService {

	getFiles() {
		return [
			{
				id: 1, 
				name: 'NIR', 
				size: '50 KB', 
				type: 'docx', 
				date_added: '20/3/2020',
				isTagged: false },
			{
				id: 2, 
				name: 'eng', 
				size: '100 MB', 
				type: 'folder', 
				date_added: '4/2/2020',
				isTagged: true },
			{
				id: 3, 
				name: 'data_base', 
				size: '16 KB', 
				type: 'csv', 
				date_added: '11/5/2020',
				isTagged: true },
			{
				id: 4, 
				name: 'Crypto', 
				size: '220 MB', 
				type: 'folder', 
				date_added: '3/4/2020',
				isTagged: false },
			{
				id: 5, 
				name: 'memes', 
				size: '1 MB', 
				type: 'jpeg', 
				date_added: '29/11/2019',
				isTagged: true },
			{
				id: 6, 
				name: 'script', 
				size: '10 KB', 
				type: 'js', 
				date_added: '5/5/2020',
				isTagged: false },
			{
				id: 7, 
				name: 'Загрузки', 
				size: '100 MB', 
				type: 'folder', 
				date_added: '1/6/2019',
				isTagged: false }
		];
	};
};
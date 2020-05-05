const initialState = {
	isLoggedIn: false,
	isUpload: false
};
 
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isLoggedIn: true
			};

		case 'LOGOUT':
			return {
				...state,
				isLoggedIn: false
			};

		case 'UPLOAD_START':
			return {
				...state,
				isUpload: true
			};
		
		case 'UPLOAD_FINISH':
			return {
				...state,
				isUpload: false
			};

		default:
			return state;
	}
};

export default reducer;
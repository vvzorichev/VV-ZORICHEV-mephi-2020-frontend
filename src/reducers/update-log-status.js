const updateLogStatus = (state, action) => {
	
	if (state === undefined) {
		return {
			isLoggedIn: false
		};
	}

	switch (action.type) {

		case 'LOGIN':
			return {
				isLoggedIn: true
			};

		case 'LOGOUT':
			return {
				isLoggedIn: false
			};

		default:
			return state.logStatus;
	}
};

export default updateLogStatus;
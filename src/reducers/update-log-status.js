const updateLogStatus = (state, action) => {
	
	if (state === undefined) {
		return {
			isLoggedIn: false
		};
	}

	const { type } = action;

	switch (type) {

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

		default:
			return state.logStatus;
	}
};

export default updateLogStatus;
import React from 'react';

const LoginForm = () => {
	return (
		<form className="form-signin">
			<h1 className="h3 mb-3 font-weight-normal">
				Login
			</h1>
			<input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
			<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
			<Checkbox label="Remember me" />
			<BigBlueBtn value='Log in' onSendForm={onLogin} />
			<p className="mt-5 text-muted">
				&copy; SafeCloud 2020
			</p>
		</form>
	);
};

export default LoginForm;
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onLogin } from '../../actions';

import { BigBlueBtn } from '../buttons/';
import Checkbox from '../checkbox';

import './forms.css';

const RegisterForm = ({ onCreate = null  }) => {
	return (
		<form className="form-signin">
			<h1 className="h3 mb-3 font-weight-normal">
				Create your account
			</h1>
			<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
			<input type="password" id="inputPassword" className="form-control center" placeholder="Password" required />
			<input type="password" id="retypePassword" className="form-control" placeholder="Retype password" required />
			<Checkbox value="I understand that if I lose my password, I may lose my data." />
			<BigBlueBtn value="Create Account" onSendForm={onCreate} />
			<p className="mt-5 text-muted">
				&copy; SafeCloud 2020
			</p>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onLogin
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(RegisterForm);
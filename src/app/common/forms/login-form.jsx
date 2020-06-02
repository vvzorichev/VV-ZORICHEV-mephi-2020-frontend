import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onLogin } from '../../../actions';

import { BigBlueBtn } from '../buttons';
import Checkbox from '../checkbox';

import './forms.css';

const LoginForm = ({ onLogin  }) => {
	return (
		<form className="form-signin">
			<input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
			<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
			<Checkbox value="Remember me" />
			<BigBlueBtn value='Log in' onSendForm={onLogin} />
		</form>
	);
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onLogin
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
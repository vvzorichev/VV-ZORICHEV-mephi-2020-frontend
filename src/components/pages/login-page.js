import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onLogin } from '../../actions';

import BigBlueBtn from '../big-blue-btn';
import Checkbox from '../checkbox';

const LoginPage = ({ isLoggedIn, onLogin }) => {
	
	if (isLoggedIn) {
		return <Redirect to="/mycloud" />;
	}

  return (
    <div className="text-center">
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
		</div>
  );
};

const mapStateToProps =  ({ isLoggedIn }) => {
	return { isLoggedIn	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onLogin
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
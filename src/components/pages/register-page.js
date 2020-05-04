import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import BigBlueBtn from '../big-blue-btn';
import Checkbox from '../checkbox';

const RegisterPage = ({ isLoggedIn, onCreate }) => {

	if (isLoggedIn) {
		return <Redirect to="/mycloud" />;
	}

  return (
    <div className="text-center">
			<form className="form-signin">
				<h1 className="h3 mb-3 font-weight-normal">
					Create your account
				</h1>
				<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
				<input type="password" id="inputPassword" className="form-control center" placeholder="Password" required />
				<input type="password" id="retypePassword" className="form-control" placeholder="Retype password" required />
				<Checkbox label="I understand that if I lose my password, I may lose my data." />
				<BigBlueBtn value="Create Account" onSendForm={onCreate} />
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

export default connect(mapStateToProps)(RegisterPage);
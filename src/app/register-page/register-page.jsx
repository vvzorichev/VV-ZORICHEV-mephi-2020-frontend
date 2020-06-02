import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import RegisterForm  from './register-form';

const RegisterPage = ({ isLoggedIn }) => {

	useEffect(() => {
		document.title = 'Register - SafeCloud'
	});

	if (isLoggedIn) {
		return <Redirect to="/mycloud/drive" />;
	}

  return (
    <div className="text-center flex-column">
			<h1 className="h3 mb-1 font-weight-normal">
				Create your account
			</h1>
			<RegisterForm />
			<p className="mt-5 text-muted">
				&copy; SafeCloud 2020
			</p>
		</div>
  );
};

const mapStateToProps =  ({ isLoggedIn }) => {
	return { isLoggedIn	};
};

export default connect(mapStateToProps)(RegisterPage);
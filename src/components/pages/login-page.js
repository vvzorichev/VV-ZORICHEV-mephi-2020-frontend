import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginForm } from '../forms';

const LoginPage = ({ isLoggedIn }) => {
	
	if (isLoggedIn) {
		return <Redirect to="/mycloud" />;
	}

  return (
    <div className="text-center flex-column">
			<h1 className="h3 mb-1 font-weight-normal">
				Login
			</h1>
			<LoginForm />
			<p className="mt-5 text-muted">
				&copy; SafeCloud 2020
			</p>
		</div>
  );
};

const mapStateToProps =  ({ isLoggedIn }) => {
	return { isLoggedIn	};
};

export default connect(mapStateToProps)(LoginPage);
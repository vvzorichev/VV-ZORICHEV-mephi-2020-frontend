import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginForm } from '../forms';

const LoginPage = ({ isLoggedIn }) => {
	
	if (isLoggedIn) {
		return <Redirect to="/mycloud" />;
	}

  return (
    <div className="text-center">
			<LoginForm />
		</div>
  );
};

const mapStateToProps =  ({ isLoggedIn }) => {
	return { isLoggedIn	};
};

export default connect(mapStateToProps)(LoginPage);
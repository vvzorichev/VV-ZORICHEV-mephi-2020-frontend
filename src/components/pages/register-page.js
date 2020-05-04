import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { RegisterForm }  from '../forms';

const RegisterPage = ({ isLoggedIn }) => {

	if (isLoggedIn) {
		return <Redirect to="/mycloud" />;
	}

  return (
    <div className="text-center">
			<RegisterForm />
		</div>
  );
};

const mapStateToProps =  ({ isLoggedIn }) => {
	return { isLoggedIn	};
};

export default connect(mapStateToProps)(RegisterPage);
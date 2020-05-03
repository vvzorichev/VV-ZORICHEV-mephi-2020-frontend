import React from 'react';
import { Redirect } from 'react-router-dom';

const RegisterPage = ({ isLoggedIn }) => {

	if (isLoggedIn) {
		return <Redirect to="/mycloud" />;
	}

  return (
    <div className="text-center">
			<form className="form-signin">
				<img 
					className="logo" 
					src="https://raw.githubusercontent.com/vvzorichev/VV-ZORICHEV-mephi-2019-frontend/e568f41e5eca47ab9da93816e69e1867cd9c1a35/project/public/logo.svg" 
					alt="" width="172px" height="172x" />
				<h1 className="h3 mb-3 font-weight-normal">
					Create your account
				</h1>
				<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
				<input type="password" id="inputPassword" className="form-control center" placeholder="Password" required />
				<input type="password" id="retypePassword" className="form-control" placeholder="Retype password" required />
				<div className="custom-control custom-checkbox mb-2 mt-2">
					<input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
					<label className="custom-control-label" htmlFor="customControlAutosizing">I understand that if I lose my password, I may lose my data.</label>
      	</div>
				<button 
					className="btn btn-lg btn-primary btn-block" 
					type="submit" >
					Create Account
				</button>
				<p className="mt-5 text-muted">
					&copy; SafeCloud 2020
				</p>
			</form>
		</div>
  );
}

export default RegisterPage;
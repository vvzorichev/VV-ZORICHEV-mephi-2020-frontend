import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './header';
import MyCloudPage from './my-cloud-page';
import LoginPage from './login-page';
import RegisterPage from './register-page';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route
					path="/mycloud/:nav?" 
					component={MyCloudPage} />
				<Route 
					exact
					path="/login" 
					component={LoginPage} />
				<Route 
					exact
					path="/register"
					component={RegisterPage} />
				<Redirect to="/mycloud/drive" />
			</Switch>
		</Router>
	);
};

export default App;
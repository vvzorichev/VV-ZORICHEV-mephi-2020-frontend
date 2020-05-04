import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../header';
import { LoginPage, RegisterPage, MyCloudPage } from '../pages';

import './app.css';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route 
					path="/mycloud" 
					component={MyCloudPage} />
				<Route 
					exact
					path="/login" 
					component={LoginPage} />
				<Route 
					exact
					path="/register"
					component={RegisterPage} />
				<Redirect to="/mycloud" />
			</Switch>
		</Router>
	);
};

export default App;
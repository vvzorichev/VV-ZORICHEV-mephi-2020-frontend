import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { LoginPage, RegisterPage, MyCloudPage } from '../pages';
import './app.css';
import Header from '../header';

export default class App extends Component {

	state = {
		isLoggedIn: false
	}

	onLogin = () => {
		this.setState({
			isLoggedIn: true
		});
	};

	onLogout = () => {
		this.setState({
			isLoggedIn: false
		});
	};

	render() {

		const { isLoggedIn } = this.state;

		return (
			<React.Fragment >
				<Router>
					<Header 
						onLogout={this.onLogout}/>
					<Switch>
						<Route 
							path="/mycloud" 
							render={() => {
								return (
									<MyCloudPage 
										isLoggedIn={isLoggedIn} />
								);
							}} />
						<Route 
							path="/login" 
							render={() => {
								return (
									<LoginPage 
										isLoggedIn={isLoggedIn}
										onLogin={this.onLogin} />
								);
							}} />
						<Route 
							path="/register" 
							render={() => 
								<RegisterPage isLoggedIn={isLoggedIn} />
							} />
						<Redirect to="/mycloud" />
					</Switch>
				</Router>
			</React.Fragment>
		);
	};
};
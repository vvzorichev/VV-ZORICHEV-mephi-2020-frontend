import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundary extends Component {

	state = {
		hasError: false
	};
	
	componentDidCatch() {
		this.setState({ hasError: true });
	}
	
	render() {
		if (this.state.hasError) {
			return (
				<div className="text-center flex-column">
					<ErrorIndicator />
				</div>
			);
		}
		
		return this.props.children;
	};
};
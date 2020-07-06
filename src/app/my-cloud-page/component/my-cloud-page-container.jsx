import React, { useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from '../../../utils';

import MyCloudPage from './my-cloud-page.jsx';

const mapStateToProps =  ({ logStatus: { isLoggedIn } }) => {
	return { isLoggedIn	};
};

const MyCloudPageContainer = ({ isLoggedIn, match }) => {
	
	const { nav } = match.params.nav ? match.params : { nav: 'drive'};

	useEffect(() => {
		document.title = 'MyCloud - SafeCloud'
	});
	
	if (!isLoggedIn) {
		return <Redirect to="/login" />;
	}
	
	return <MyCloudPage nav={nav} />;
};

export default compose(
	connect(mapStateToProps),
	withRouter
)(MyCloudPageContainer);
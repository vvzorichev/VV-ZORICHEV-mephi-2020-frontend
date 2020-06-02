import React from 'react';
import { Link } from 'react-router-dom';

import './log-btn.css'

const LogBtn = ({ logStatus, value, to, onLog }) => {
	return (
		logStatus|| 
		<li>
			<Link className="btn" to={to} onClick={onLog}>
				{value}
			</Link>
		</li>
	);
};

export default LogBtn;
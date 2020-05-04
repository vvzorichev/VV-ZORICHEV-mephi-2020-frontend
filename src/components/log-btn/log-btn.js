import React from 'react';
import { Link } from 'react-router-dom';

import './log-btn.css'

const LogBtn = ({ logState, value, to, onLog = null }) => {
	return (
		logState || 
		<li>
			<Link className="btn" to={to} onClick={onLog}>
				{value}
			</Link>
		</li>
	);
};

export default LogBtn;
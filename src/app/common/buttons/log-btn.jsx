import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css'

const LogBtn = ({ logState, value, to, onLog }) => {
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
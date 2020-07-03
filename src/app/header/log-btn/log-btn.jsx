import React from 'react';
import { Link } from 'react-router-dom';

import './log-btn.css'

const LogBtn = ({ value, to, onLog }) => {
	return (
		<li className="log-btn">
			<Link to={to} onClick={onLog}>
				{value}
			</Link>
		</li>
	);
};

export default LogBtn;
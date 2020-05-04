import React from 'react'

const Checkbox = ({ label = null, id = "checkbox" }) => {
	
	const withLabel = label && 'mb-2 mt-2';

	const tag = (
		<label className="custom-control-label" htmlFor={id}>
			{label}
		</label>
	);

	return (
		<div className={`custom-control custom-checkbox ${withLabel}`}>
			<input type="checkbox" className="custom-control-input" id={id} />
			{tag}
		</div>
	);
};

export default Checkbox;
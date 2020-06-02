import React, { useState } from 'react'

const Checkbox = ({ value = null, id = "checkbox", isTagged = false }) => {
	
	const withValue = value && 'mb-2 mt-2';

	const [ tag, setTag ] = useState(isTagged);

	const label = (
		<label className="custom-control-label" htmlFor={id}>
			{value}
		</label>
	);

	return (
		<div className={`custom-control custom-checkbox ${withValue}`}>
			<input 
				type="checkbox" 
				className="custom-control-input" 
				id={id} 
				checked={tag} 
				onChange={() => setTag(!tag)}/>
			{label}
		</div>
	);
};

export default Checkbox;
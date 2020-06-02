import React from 'react';

import { FileServiceConsumer } from '../file-service-context';

const withFileService = (mapMethodsToProps) => (Wrapped) => {
	return (props) => {
		return (
			<FileServiceConsumer>
				{
					(fileService) => {
						const serviceProps = mapMethodsToProps(fileService);

						return (
							<Wrapped {...props} {...serviceProps}/>
						);
					}
				}
			</FileServiceConsumer>
		);
	};
};

export default withFileService;
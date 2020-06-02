import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import ErrorBoundary from './app/common/error-boudary';
import { FileServiceProvider } from './app/common/file-service-context';
import FileService from './services/file-service';
import App from './app';

const fileService = new FileService();

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<FileServiceProvider value={fileService}>
					<App />
				</FileServiceProvider>
			</ErrorBoundary>
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

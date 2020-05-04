import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FileService from './services/file-service';
import { FileServiceProvider } from './components/file-service-context';

import App from './components/app';

import store from './store';

const fileService = new FileService();

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
			<FileServiceProvider value={fileService}>
    		<App />
			</FileServiceProvider>
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

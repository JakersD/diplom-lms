import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import App from './App';
import { setupStore } from './__data__/store';

const store = setupStore();

ReactDOM.render(
	<SnackbarProvider
		anchorOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		autoHideDuration={3000}
	>
		<Provider store={store}>
			<App />
		</Provider>
	</SnackbarProvider>,
	document.getElementById('root')
);

reportWebVitals();

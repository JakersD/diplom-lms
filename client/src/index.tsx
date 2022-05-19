import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import ru from 'date-fns/locale/ru';

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
			<LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
				<App />
			</LocalizationProvider>
		</Provider>
	</SnackbarProvider>,
	document.getElementById('root')
);

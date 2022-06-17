import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { user, general, formCollector } from './reducers';

const rootReducer = combineReducers({
	user,
	general,
	formCollector,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: [...getDefaultMiddleware({ serializableCheck: false })],
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppState = AppStore['getState'];
export type AppDispatch = AppStore['dispatch'];

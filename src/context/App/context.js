import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import { initialState } from './initialState';

const App = createContext();

export const useApp = () => useContext(App);

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const data = {
		...state,
		appDispatch: dispatch,
	};

	return <App.Provider value={data}>{children}</App.Provider>;
};

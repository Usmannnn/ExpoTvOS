import { AppProvider, useApp, appActions } from './App';

const GlobalContextProvider = ({ children }) => {
	return <AppProvider>{children}</AppProvider>;
};

export { GlobalContextProvider, useApp, appActions };

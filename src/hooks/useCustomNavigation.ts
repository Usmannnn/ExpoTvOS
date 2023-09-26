import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { appActions, useApp } from '../context';

const useCustomNavigation = () => {
	const { navigationStack, appDispatch } = useApp();
	const { setFocus } = useFocusable();
	const { navigate, goBack } = useNavigation();

	const navigation = (route: any, nextFocus: string) => {
		// navigationStack.slice(-1); when its context might be usefull to remove all items exept last one
		// navigationStack.slice(-1);
		// navigationStack.push(nextFocus);
		setFocus(nextFocus);
		appDispatch(appActions.onNavigate(nextFocus));
		navigate(route);
	};

	const pushToNavigationStack = (nextFocus: string) => {
		// navigationStack.push(nextFocus);
	};

	const popFromNavigationStack = () => {
		// navigationStack.pop();
	};

	const _goBack = () => {
		// navigationStack.pop();

		setFocus(navigationStack[navigationStack.length - 1]);
		goBack();
	};

	return { navigation, _goBack, pushToNavigationStack, popFromNavigationStack };
};

export default useCustomNavigation;

const styles = StyleSheet.create({});

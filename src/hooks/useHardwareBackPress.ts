import { useCallback } from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

/**
 * useHardwareBackPress custom hook
 *
 * @param {Function} backAction - function to call when the back button is pressed
 * @param {boolean} preventDefault - whether to prevent the default action from firing
 */
export const useHardwareBackPress = (
	backAction: Function,
	preventDefault: boolean = false
) => {
	/**
	 * handles the back action
	 *
	 * @returns {boolean} - true to prevent the default action from firing
	 */
	const handleBackAction = useCallback(() => {
		backAction();

		return preventDefault;
	}, [backAction, preventDefault]);

	useFocusEffect(
		useCallback(() => {
			BackHandler.addEventListener('hardwareBackPress', handleBackAction);

			return () =>
				BackHandler.removeEventListener('hardwareBackPress', handleBackAction);
		}, [handleBackAction])
	);
};

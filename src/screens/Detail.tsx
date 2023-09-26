import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
	FocusContext,
	useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useHardwareBackPress } from '../hooks/useHardwareBackPress';
import useCustomNavigation from '../hooks/useCustomNavigation';

const FocusableOne = () => {
	const { ref, focusKey, focused } = useFocusable({ focusKey: 'one' });

	return (
		<FocusContext.Provider value={focusKey}>
			<View
				ref={ref}
				style={{
					width: 200,
					height: 200,
					backgroundColor: focused ? 'red' : 'orange',
				}}></View>
		</FocusContext.Provider>
	);
};

const FocusableTwo = () => {
	const { ref, focusKey, focused } = useFocusable({ focusKey: 'two' });

	return (
		<FocusContext.Provider value={focusKey}>
			<View
				ref={ref}
				style={{
					width: 200,
					height: 200,
					backgroundColor: focused ? 'red' : 'orange',
				}}></View>
		</FocusContext.Provider>
	);
};

const Detail = () => {
	const { _goBack } = useCustomNavigation();
	useHardwareBackPress(() => {
		_goBack();
	}, true);

	return (
		<View style={styles.container}>
			<FocusableOne />
			<FocusableTwo />
		</View>
	);
};

export default Detail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		gap: 20,
		backgroundColor: 'black',
	},
});

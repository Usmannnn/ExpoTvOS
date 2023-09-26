import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import Sidebar from '../screens/Sidebar';
import { View } from 'react-native';

const RootNavigationContainer = () => {
	return (
		<NavigationContainer>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					backgroundColor: 'black',
				}}>
				<Sidebar />
				<HomeStack />
			</View>
		</NavigationContainer>
	);
};

export default RootNavigationContainer;

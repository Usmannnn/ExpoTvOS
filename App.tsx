/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { GlobalContextProvider } from './src/context';
import RootNavigationContainer from './src/navigations';
import { init, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import {
	Platform,
	Text,
	TouchableOpacity,
	View,
	useTVEventHandler,
} from 'react-native';
import { pressedKeyEventHandler } from './src/FocusHelper';

init();
const App = () => {
	const { setFocus } = useFocusable();

	if (Platform.OS !== 'web') {
		useTVEventHandler((evt) => {
			pressedKeyEventHandler(evt?.eventType);
		});
	}

	useEffect(() => {
		setFocus('section0_item0');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<GlobalContextProvider>
				<TouchableOpacity
					hasTVPreferredFocus={true}
					onPress={() => null}
					style={{ position: 'absolute', zIndex: -1 }}>
					<Text>
						This touchable opacity and text is required to catch keys of remote
						controller for android tv (This text is not visible)
					</Text>
				</TouchableOpacity>
				<RootNavigationContainer />
			</GlobalContextProvider>
		</View>
	);
};

export default App;

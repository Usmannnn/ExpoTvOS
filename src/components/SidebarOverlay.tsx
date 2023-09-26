import { Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { GetScaledValue } from '../methods';
import LinearGradient from 'react-native-linear-gradient';

const SidebarOverlay = () => {
	return (
		<Animated.View
			layout={Layout}
			entering={FadeIn.duration(1000)}
			exiting={FadeOut.duration(1000)}
			style={styles.container}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={['black', 'black', 'transparent']}
				style={{ flex: 1 }}
			/>
		</Animated.View>
	);
};

export default SidebarOverlay;

const styles = StyleSheet.create({
	container: {
		width: GetScaledValue(Dimensions.get('window').width),
		position: 'absolute',
		left: GetScaledValue(200),
		top: 0,
		bottom: 0,
		zIndex: 998,
	},
});

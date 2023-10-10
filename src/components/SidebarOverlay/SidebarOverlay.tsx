import { Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { GetScaledValue } from '../../methods';
import LinearGradient from '../Gradient';

const SidebarOverlay = ({ hasFocusedChild }: { hasFocusedChild: boolean }) => {
	if (!hasFocusedChild) {
		return null;
	}

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
				style={{ flex: 1 }}>
				<Animated.Image
					layout={Layout}
					entering={FadeIn.duration(1000)}
					exiting={FadeOut.duration(1000)}
					source={require('../../../assets/tod-logo.png')}
					style={styles.image}
				/>
			</LinearGradient>
		</Animated.View>
	);
};

export default SidebarOverlay;

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('screen').width,
		position: 'absolute',
		left: 0,
		top: 0,
		bottom: 0,
		zIndex: 998,
	},
	image: {
		width: GetScaledValue(210),
		aspectRatio: 0.1,
		position: 'absolute',
		zIndex: 997,
		right: GetScaledValue(200),
		top: GetScaledValue(100),
	},
});

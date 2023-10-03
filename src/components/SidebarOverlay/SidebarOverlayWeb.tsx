import { Dimensions, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import Animated, {
	FadeIn,
	FadeOut,
	Layout,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { GetScaledValue } from '../../methods';
import LinearGradient from '../Gradient';

const SidebarOverlayWeb = ({
	hasFocusedChild,
}: {
	hasFocusedChild: boolean;
}) => {
	const opacity = useSharedValue(0);

	const animatedOpacity = useAnimatedStyle(() => {
		return {
			opacity: withTiming(opacity.value, { duration: 1000 }),
		};
	});

	useLayoutEffect(() => {
		opacity.value = hasFocusedChild ? 1 : 0;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hasFocusedChild]);

	return (
		<Animated.View style={[styles.container, animatedOpacity]}>
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

export default SidebarOverlayWeb;

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
		width: GetScaledValue(200),
		aspectRatio: 0.1,
		position: 'absolute',
		zIndex: 997,
		right: GetScaledValue(200),
		top: GetScaledValue(100),
	},
});

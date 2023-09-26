import { StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
	SharedValue,
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';

const AnimatedBorder = ({
	borderX,
	measure,
	opacity,
}: {
	borderX: SharedValue<number>;
	measure: SharedValue<{ x: number; y: number }>;
	opacity: number;
}) => {
	const animatedStyles = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: withTiming(borderX.value, { duration: 600 }) }],
			width: withTiming(measure.value.x, { duration: 600 }),
			height: withTiming(measure.value.y, { duration: 600 }),
			opacity: withTiming(opacity, { duration: 450 }),
		};
	});

	return <Animated.View style={[styles.container, animatedStyles]} />;
};

export default AnimatedBorder;

const styles = StyleSheet.create({
	container: {
		margin: 10,
		borderWidth: 5,
		borderRadius: 10,
		borderColor: '#ffbc00',
		zIndex: 99,
		backgroundColor: 'transparent',
		opacity: 1,
		position: 'absolute',
	},
});

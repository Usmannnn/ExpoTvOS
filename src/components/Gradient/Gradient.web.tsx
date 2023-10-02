import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';

const Gradient = ({
	children,
	style,
	colors,
	start,
	end,
}: {
	children?: JSX.Element | undefined;
	colors: (string | number)[];
	style?: StyleProp<ViewStyle> | undefined;
	start?: { x: number; y: number } | undefined;
	end?: { x: number; y: number } | undefined;
}) => {
	return (
		<LinearGradient style={style} colors={colors} start={start} end={end}>
			{children}
		</LinearGradient>
	);
};

export default Gradient;

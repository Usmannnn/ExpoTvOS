import { StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import { Data } from '../../context/App/initialState';
import {
	FocusContext,
	useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import Animated, {
	SharedValue,
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';
import { GetScaledValue } from '../../methods';
import VideoPlayer from '../VideoPlayer';

const ItemOrganism = ({
	item,
	width,
	height,
	measure,
	focusKey,
	onEnterPress,
	onArrowPress,
	rightFocusKey,
	leftFocusKey,
	downFocusKey,
	upFocusKey,
}: {
	item: Data;
	width: number;
	height: number;
	measure: SharedValue<{ x: number; y: number }>;
	focusKey: string;
	onEnterPress: any;
	onArrowPress: any;
	rightFocusKey: string;
	leftFocusKey: string;
	downFocusKey: string;
	upFocusKey: string;
}) => {
	const {
		ref,
		focused,
		focusKey: _focusKey,
	} = useFocusable({
		focusKey,
		onEnterPress: () => {
			onEnterPress();
			setExpand(true);
		},
		onArrowPress: (direction, props) => {
			if (expand) {
				setExpand(false);
				measure.value = {
					x: width,
					y: measure.value.y,
				};
			} else {
				onArrowPress({ direction, ...props });
			}
			return true;
		},
		extraProps: { rightFocusKey, leftFocusKey, downFocusKey, upFocusKey },
	});
	const [expand, setExpand] = useState(false);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			width: focused ? withTiming(measure.value.x, { duration: 600 }) : width,
			height: focused ? withTiming(measure.value.y, { duration: 600 }) : height,
		};
	});

	return (
		<FocusContext.Provider value={_focusKey}>
			<Animated.View
				ref={ref}
				style={[
					styles.container,
					animatedStyle,
					{
						backgroundColor: !item.uri
							? focused
								? 'red'
								: '#187af2'
							: 'black',
						overflow: 'hidden',
					},
				]}>
				{!item.uri ? (
					<Text style={{ fontSize: GetScaledValue(28) }}>{_focusKey}</Text>
				) : expand ? (
					<VideoPlayer uri={item.uri} />
				) : (
					<Animated.Image
						source={item.poster}
						style={animatedStyle}
						resizeMode={'cover'}
						resizeMethod={'resize'}
					/>
				)}
			</Animated.View>
		</FocusContext.Provider>
	);
};

export default ItemOrganism;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		borderRadius: 10,
	},
});

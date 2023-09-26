import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { GetScaledValue } from '../methods';
import {
	FocusContext,
	useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import useFocusHandler from '../hooks/useFocusHandler';
import Animated, {
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';
import SidebarOverlay from '../components/SidebarOverlay';

const Sidebar = () => {
	const { ref, hasFocusedChild, focusKey } = useFocusable({
		trackChildren: true,
	});
	const { setNextFocus } = useFocusHandler();

	const onArrowPress = useCallback(
		({ direction, props }: { direction: string; props: any }) => {
			setNextFocus({ direction, ...props });
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const animatedOpacity = useAnimatedStyle(() => {
		return {
			opacity: withTiming(hasFocusedChild ? 1 : 0.4, { duration: 1000 }),
		};
	}, [hasFocusedChild]);

	return (
		<Animated.View style={[styles.container, animatedOpacity]}>
			<FocusContext.Provider value={focusKey}>
				<View ref={ref}>
					{[
						...new Array(10)
							.fill(0)
							.map((_, index) => (
								<FocusableSidebarItem
									key={index}
									focusKey={`icon${index}`}
									rightFocusKey={'section0_item0'}
									downFocusKey={`icon${index + 1}`}
									upFocusKey={`icon${index - 1}`}
									onArrowPress={onArrowPress}
								/>
							)),
					]}
				</View>
			</FocusContext.Provider>
			{hasFocusedChild && <SidebarOverlay />}
		</Animated.View>
	);
};

export default Sidebar;

const styles = StyleSheet.create({
	container: {
		width: GetScaledValue(200),
		position: 'absolute',
		left: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'black',
		zIndex: 999,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const FocusableSidebarItem = ({
	focusKey,
	rightFocusKey,
	upFocusKey,
	downFocusKey,
	onArrowPress,
}: {
	focusKey: string;
	rightFocusKey: string;
	upFocusKey: string;
	downFocusKey: string;
	onArrowPress: any;
}) => {
	const {
		ref,
		focused,
		focusKey: _focusKey,
	} = useFocusable({
		focusKey,
		onArrowPress: (direction, props) => onArrowPress({ direction, props }),
		extraProps: { rightFocusKey, upFocusKey, downFocusKey },
	});

	return (
		<FocusContext.Provider value={_focusKey}>
			<View ref={ref} style={{ margin: 10 }}>
				<Text
					style={{
						color: focused ? '#ffbc00' : 'white',
						fontWeight: focused ? 'bold' : 'normal',
						fontSize: GetScaledValue(focused ? 40 : 35),
					}}>
					icon
				</Text>
			</View>
		</FocusContext.Provider>
	);
};

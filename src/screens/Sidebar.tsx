import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { GetScaledValue } from '../methods';
import {
	FocusContext,
	useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import useFocusHandler from '../hooks/useFocusHandler';
import Animated, {
	FadeIn,
	FadeOut,
	Layout,
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
					<FocusableTopSection
						hasFocusedChild={hasFocusedChild}
						focusKey="profile"
						onArrowPress={onArrowPress}
					/>

					<View
						style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						{[
							...new Array(10)
								.fill(0)
								.map((_, index) => (
									<FocusableSidebarItem
										key={index}
										focusKey={`icon${index}`}
										rightFocusKey={'section0_item0'}
										downFocusKey={`icon${index + 1}`}
										upFocusKey={index === 0 ? 'profile' : `icon${index - 1}`}
										onArrowPress={onArrowPress}
									/>
								)),
						]}
					</View>
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
		alignItems: 'center',
		paddingVertical: GetScaledValue(100),
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
			<View ref={ref}>
				<Text
					style={{
						color: focused ? '#ffbc00' : 'white',
						fontWeight: focused ? 'bold' : 'normal',
						fontSize: GetScaledValue(focused ? 40 : 35),
					}}>
					ic
				</Text>
			</View>
		</FocusContext.Provider>
	);
};

export const FocusableTopSection = ({
	hasFocusedChild,
	focusKey,
	onArrowPress,
}: {
	hasFocusedChild: boolean;
	focusKey: string;
	onArrowPress: any;
}) => {
	const {
		ref,
		focusKey: _focusKey,
		focused,
	} = useFocusable({
		focusKey,
		onArrowPress: (direction, props) => onArrowPress({ direction, props }),
		extraProps: { downFocusKey: 'icon0', rightFocusKey: 'section0_item0' },
	});

	return (
		<FocusContext.Provider value={_focusKey}>
			<View ref={ref}>
				{!hasFocusedChild ? (
					<Animated.Image
						layout={Layout}
						entering={FadeIn.duration(1000)}
						exiting={FadeOut.duration(1000)}
						source={require('../../assets/tod-logo.png')}
						style={{
							width: 200,
							aspectRatio: 1,
						}}
					/>
				) : (
					<Animated.View
						layout={Layout}
						entering={FadeIn.duration(1000)}
						exiting={FadeOut.duration(1000)}
						style={{
							width: 110,
							aspectRatio: 1,
							backgroundColor: 'red',
							borderWidth: focused ? 5 : 0,
							borderColor: '#ffbc00',
						}}
					/>
				)}
			</View>
		</FocusContext.Provider>
	);
};

import { FlatList, StyleSheet } from 'react-native';
import React, { RefObject, useCallback } from 'react';
import useFocusHandler from '../hooks/useFocusHandler';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { appActions, useApp } from '../context';
import SectionOrganism from '../components/organisms/SectionOrganism';
import { AbstractKeys } from '../FocusHelper';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { GetScaledValue } from '../methods';

export interface IPopulatedArrowPress {
	direction: string;
	downFocusKey: string;
	leftFocusKey: string;
	rightFocusKey: string;
	upFocusKey: string;
	listRef: RefObject<FlatList>;
	sectionIndex: number;
}

const AnimatedSection = () => {
	const { initialContentPosition, data, currentFocus, appDispatch } = useApp();

	const border = useSharedValue(GetScaledValue(200));
	const opacity = useSharedValue(1);
	const scroll = useSharedValue(0);
	const contentY = useSharedValue(initialContentPosition);

	const { setFocus } = useFocusable();
	const { setNextFocus, scrollToDirection } = useFocusHandler();

	const onArrowPress = useCallback(
		(props: IPopulatedArrowPress) => {
			let nextFocusKey = setNextFocus(props);

			if (
				currentFocus.itemIndex === 0 &&
				props.direction === AbstractKeys.LEFT
			) {
				setFocus('icon0');
			}

			if (nextFocusKey) {
				appDispatch(appActions.setCurrentFocus(nextFocusKey));

				scrollToDirection({
					direction: props.direction,
					listRef: props.listRef,
					sectionIndex: props.sectionIndex,
					scroll,
					contentY,
					opacity,
					border,
				});
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[currentFocus]
	);

	const animatedContainer = useAnimatedStyle(() => {
		return {
			top: withTiming(contentY.value, { duration: 600 }),
		};
	});

	const animatedItem = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: withTiming(scroll.value, { duration: 600 }) }],
		};
	});

	return (
		<Animated.View style={[styles.container, animatedContainer]}>
			<FlatList
				data={data}
				keyExtractor={(_, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={({ item, index }) => {
					const cond = index >= currentFocus.sectionIndex;
					const defaultStyle = {
						transform: [{ translateY: scroll.value }],
					};
					return (
						<Animated.View style={cond ? animatedItem : defaultStyle}>
							<SectionOrganism
								item={item}
								index={index}
								opacity={opacity}
								border={border}
								onArrowPress={(props: any) =>
									onArrowPress({
										...props,
										sectionIndex: index,
									})
								}
							/>
						</Animated.View>
					);
				}}
			/>
		</Animated.View>
	);
};

export default AnimatedSection;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		zIndex: 99,
	},
});

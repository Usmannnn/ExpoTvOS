import { FlatList, SectionList, StyleSheet, View } from 'react-native';
import React, { RefObject, useCallback } from 'react';
import useFocusHandler from '../hooks/useFocusHandler';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { appActions, useApp } from '../context';
import SectionOrganism from '../components/organisms/SectionOrganism';

export interface IPopulatedArrowPress {
	direction: string;
	downFocusKey: string;
	leftFocusKey: string;
	rightFocusKey: string;
	upFocusKey: string;
	listRef: RefObject<FlatList>;
	sectionIndex: number;
}

const Home = () => {
	const { initialContentPosition, data, currentFocus, appDispatch } = useApp();

	const border = useSharedValue(0);
	const opacity = useSharedValue(1);
	const scroll = useSharedValue(0);
	const contentY = useSharedValue(initialContentPosition);

	const { setNextFocus, transition } = useFocusHandler();

	const onArrowPress = useCallback(
		(props: IPopulatedArrowPress) => {
			let nextFocusKey = setNextFocus(props);

			if (nextFocusKey) {
				appDispatch(appActions.setCurrentFocus(nextFocusKey));

				transition({
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
		<View style={styles.container}>
			<View style={{ flex: 1 }} />

			<Animated.View
				style={[
					animatedContainer,
					{
						position: 'absolute',
						backgroundColor: 'aquamarine',
					},
				]}>
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
										onArrowPress({ ...props, sectionIndex: index })
									}
								/>
							</Animated.View>
						);
					}}
				/>
			</Animated.View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
});

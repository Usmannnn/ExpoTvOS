import { FlatList, View } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { IData } from '../../context/App/initialState';
import ItemOrganism from './ItemOrganism';
import AnimatedBorder from '../AnimatedBorder';
import Animated, {
	SharedValue,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { useApp } from '../../context';
import { GetScaledValue } from '../../methods';

const SectionOrganism = ({
	item,
	index: sectionIndex,
	border,
	opacity,
	onArrowPress,
}: {
	item: IData;
	index: number;
	border: SharedValue<number>;
	opacity: SharedValue<number>;
	onArrowPress: any;
}) => {
	const listRef = useRef(null);
	const measure = useSharedValue({ x: item.width, y: item.height });

	const { currentFocus } = useApp();

	const cond = currentFocus.sectionIndex === sectionIndex;

	const onEnterPress = useCallback(() => {
		if (sectionIndex === 4) {
			measure.value = {
				x: GetScaledValue(1200),
				y: measure.value.y,
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentFocus, sectionIndex]);

	const animated = useAnimatedStyle(() => {
		return {
			opacity: withTiming(
				sectionIndex < currentFocus.sectionIndex ? opacity.value : 1,
				{ duration: 600 }
			),
		};
	}, [currentFocus, sectionIndex]);

	return (
		<Animated.View style={animated}>
			<AnimatedBorder
				measure={measure}
				borderX={border}
				opacity={cond ? 1 : 0}
			/>

			<FlatList
				ref={listRef}
				horizontal
				style={{
					paddingLeft: GetScaledValue(200),
				}}
				ListFooterComponent={() => {
					return (
						<View
							style={{
								marginRight: GetScaledValue(210),
								marginLeft: 10,
								width: GetScaledValue(200),
								backgroundColor: 'gray',
								height: item.height,
								marginVertical: 10,
								borderRadius: 10,
							}}
						/>
					);
				}}
				data={item.data}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item: it, index }) => (
					<ItemOrganism
						item={it}
						measure={measure}
						width={item.width}
						height={item.height}
						onEnterPress={onEnterPress}
						onArrowPress={(props: any) => onArrowPress({ ...props, listRef })}
						focusKey={`section${sectionIndex}_item${index}`}
						rightFocusKey={`section${sectionIndex}_item${index + 1}`}
						leftFocusKey={`section${sectionIndex}_item${index - 1}`}
						downFocusKey={`section${sectionIndex + 1}_item${0}`}
						upFocusKey={`section${sectionIndex - 1}_item${0}`}
					/>
				)}
			/>
		</Animated.View>
	);
};

export default SectionOrganism;

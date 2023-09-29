import { RefObject } from 'react';
import { AbstractKeys, getFocusableComponents } from '../FocusHelper';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { FlatList, useWindowDimensions } from 'react-native';
import { Extrapolate, SharedValue, interpolate } from 'react-native-reanimated';
import { useApp } from '../context';
import { GetScaledValue } from '../methods';

const useFocusHandler = () => {
	const { currentFocus, data, initialContentPosition } = useApp();
	const { setFocus } = useFocusable();
	const { width } = useWindowDimensions();

	const currentSection = data[currentFocus.sectionIndex];
	const sectionLength = currentSection.data.length;
	const itemWidth = data[currentFocus.sectionIndex].width + 20;
	const viewableItem = Math.floor(width / itemWidth);

	const setNextFocus = ({ direction, ...nextFocusKeys }: any) => {
		const index = Object.keys(nextFocusKeys)
			.map((i) => i.includes(direction))
			.findIndex((item) => item === true);

		const focusableItems = Object.keys(getFocusableComponents());
		const nextFocus = Object.keys(nextFocusKeys)[index];

		if (focusableItems.includes(nextFocusKeys[nextFocus])) {
			// pushToNavigationStack(nextFocusKeys[nextFocus]);
			setFocus(nextFocusKeys[nextFocus]);
			return nextFocusKeys[nextFocus];
		}
	};

	const scrollToTop = (
		listRef: RefObject<FlatList>,
		scroll: SharedValue<number>,
		border: SharedValue<number>
	) => {
		scroll.value = 0;
		border.value = GetScaledValue(200);
		listRef.current?.scrollToOffset({ offset: 0, animated: true });
	};

	const scrollToDirection = ({
		direction,
		listRef,
		scroll,
		sectionIndex,
		contentY,
		opacity,
		border,
	}: {
		direction: string;
		listRef: RefObject<FlatList>;
		scroll: SharedValue<number>;
		sectionIndex: number;
		contentY: SharedValue<number>;
		border: SharedValue<number>;
		opacity: SharedValue<number>;
	}) => {
		switch (direction) {
			case AbstractKeys.DOWN:
				scrollToTop(listRef, scroll, border);

				const downValue = currentSection.height + 10 * 2;
				scroll.value = scroll.value - downValue;

				if (currentFocus.sectionIndex === 3) {
					contentY.value = 0;
				} else {
					contentY.value = initialContentPosition;
				}

				if (sectionIndex <= currentFocus.sectionIndex) {
					opacity.value = interpolate(
						downValue,
						[1, 0],
						[0, 1],
						Extrapolate.CLAMP
					);
				}

				break;

			case AbstractKeys.UP:
				scrollToTop(listRef, scroll, border);

				const upValue = data[sectionIndex - 1].height + 10 * 2;
				scroll.value = scroll.value + upValue;

				opacity.value = interpolate(upValue, [0, 1], [0, 1], Extrapolate.CLAMP);

				if (currentFocus.sectionIndex - 1 === 4) {
					contentY.value = 0;
				} else {
					contentY.value = initialContentPosition;
				}

				break;
			case AbstractKeys.RIGHT:
				listRef.current?.scrollToOffset({
					animated: true,
					offset: (currentFocus.itemIndex + 1) * itemWidth,
				});

				const _vOffset =
					width - (GetScaledValue(230) + (viewableItem - 1) * itemWidth);

				if (currentFocus.itemIndex === sectionLength - viewableItem) {
					border.value =
						_vOffset < GetScaledValue(200) ? GetScaledValue(200) : _vOffset;
				} else if (
					currentFocus.itemIndex - 1 ===
					sectionLength - viewableItem
				) {
					border.value = itemWidth + _vOffset;
				} else if (currentFocus.itemIndex > sectionLength - viewableItem) {
					border.value += itemWidth;
				}

				break;

			case AbstractKeys.LEFT:
				listRef.current?.scrollToIndex({
					animated: true,
					index: currentFocus.itemIndex - 1,
					viewOffset: 0,
				});

				const offset = border.value - itemWidth;
				border.value =
					offset < GetScaledValue(200) ? GetScaledValue(200) : offset;

				break;
			default:
				break;
		}
	};

	return { setNextFocus, scrollToDirection };
};

export default useFocusHandler;

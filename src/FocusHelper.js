import { SpatialNavigation } from '@noriginmedia/norigin-spatial-navigation';

export const AbstractKeys = {
	LEFT: 'left',
	RIGHT: 'right',
	UP: 'up',
	DOWN: 'down',
	ENTER_PRESS: 'enterPress',
	PLAY: 'play',
	PAUSE: 'pause',
	PLAY_PAUSE: 'playPause',
	FAST_FORWARD: 'fastForward',
	REWIND: 'rewind',
	STOP: 'stop',
	FOCUS: 'focus',
	BLUR: 'blur',
};

export const NavigationKeys = {
	right: AbstractKeys.RIGHT,
	left: AbstractKeys.LEFT,
	up: AbstractKeys.UP,
	down: AbstractKeys.DOWN,
	select: AbstractKeys.ENTER_PRESS,
	22: AbstractKeys.RIGHT,
	21: AbstractKeys.LEFT,
	19: AbstractKeys.UP,
	20: AbstractKeys.DOWN,
	23: AbstractKeys.ENTER_PRESS,
	66: AbstractKeys.ENTER_PRESS,
	play: AbstractKeys.PLAY,
	pause: AbstractKeys.PAUSE,
	playPause: AbstractKeys.PLAY_PAUSE,
	fastForward: AbstractKeys.FAST_FORWARD,
	rewind: AbstractKeys.REWIND,
	stop: AbstractKeys.STOP,
	focus: AbstractKeys.FOCUS,
	blur: AbstractKeys.BLUR,
};

export const getFocusableComponents = () => {
	return SpatialNavigation.focusableComponents;
};

export const pressedKeyEventHandler = (event) => {
	const abstractKey = NavigationKeys[event];

	const currentFocus = SpatialNavigation.focusKey;
	const currentFocusable = SpatialNavigation.focusableComponents[currentFocus];

	// const { rightFocusKey, leftFocusKey, downFocusKey, upFocusKey } =
	// 	currentFocusable?.node?._internalFiberInstanceHandleDEV?.pendingProps;

	if (currentFocus && currentFocusable) {
		switch (abstractKey) {
			case AbstractKeys.RIGHT:
				currentFocusable.onArrowPress(AbstractKeys.RIGHT);
				// SpatialNavigation.setFocus(rightFocusKey);
				break;
			case AbstractKeys.LEFT:
				currentFocusable.onArrowPress(AbstractKeys.LEFT);
				// SpatialNavigation.setFocus(leftFocusKey);

				break;
			case AbstractKeys.DOWN:
				currentFocusable.onArrowPress(AbstractKeys.DOWN);
				// SpatialNavigation.setFocus(downFocusKey);

				break;
			case AbstractKeys.UP:
				currentFocusable.onArrowPress(AbstractKeys.UP);
				// SpatialNavigation.setFocus(upFocusKey);

				break;
			case AbstractKeys.ENTER_PRESS:
				currentFocusable.onEnterPress();
				break;

			default:
				break;
		}
	}
};

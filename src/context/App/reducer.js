import TYPES from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case TYPES.SET_CURRENT_FOCUS:
			return {
				...state,
				currentFocus: {
					focusKey: action.payload,
					sectionIndex: Number(action.payload.match(/\d+/g)[0]),
					itemIndex: Number(action.payload.match(/\d+/g)[1]),
				},
			};

		default:
			throw new Error();
	}
};

export default reducer;

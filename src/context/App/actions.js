import TYPES from './types';

const actions = {
	setCurrentFocus: (payload) => ({
		type: TYPES.SET_CURRENT_FOCUS,
		payload,
	}),

	onNavigate: (payload) => ({
		type: TYPES.NAVIGATE,
		payload,
	}),
};

export default actions;

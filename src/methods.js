import { Dimensions } from 'react-native';

export const GetScaledValue = (data) => {
	return data / (1920 / Dimensions.get('window').width);
};

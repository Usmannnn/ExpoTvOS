import { Platform } from 'react-native';
import Gradient from './Gradient';
import GradientWeb from './Gradient.web';

const LinearGradient = Platform.OS === 'web' ? GradientWeb : Gradient;

export default LinearGradient;

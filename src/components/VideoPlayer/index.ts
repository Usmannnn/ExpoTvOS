import { Platform } from 'react-native';
import VideoPlayer from './Video';
import VideoPlayerWeb from './VideoWeb';

const Video = Platform.OS === 'web' ? VideoPlayerWeb : VideoPlayer;

export default Video;

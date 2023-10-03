import { Platform } from 'react-native';
import SidebarOverlay from './SidebarOverlay';
import SidebarOverlayWeb from './SidebarOverlayWeb';

const Overlay = Platform.OS === 'web' ? SidebarOverlayWeb : SidebarOverlay;

export default Overlay;

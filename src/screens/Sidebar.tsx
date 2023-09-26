import {StyleSheet, View} from 'react-native';
import React from 'react';
import {GetScaledValue} from '../methods';
// import LinearGradient from 'react-native-linear-gradient';

const Sidebar = () => {
  return <View style={styles.container} />;
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    width: GetScaledValue(200),
    opacity: 0.4,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 999,
  },
});

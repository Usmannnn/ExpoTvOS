import { StyleSheet, View } from 'react-native';
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import TrailerContent from '../components/organisms/TrailerContent';

const Home = () => {
	return (
		<View style={styles.container}>
			<TrailerContent />
			<AnimatedSection />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

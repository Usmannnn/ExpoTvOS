const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
	const config = await createExpoWebpackConfigAsync(env, argv);

	config.mode = 'development';

	// If you want to add a new alias to the config.
	// config.resolve.alias['moduleA'] = 'moduleB';
	config.resolve.alias['@stripe/stripe-react-native'] = 'null-loader';
	config.resolve.alias['../Utilities/Platform'] =
		'react-native-web/dist/exports/Platform';

	config.resolve.alias['react-native-linear-gradient'] =
		'react-native-web-linear-gradient';

	// Finally return the new config for the CLI to use.
	return config;
};

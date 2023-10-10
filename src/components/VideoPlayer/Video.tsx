import { StyleSheet } from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const VideoPlayer = ({ uri }: { uri: string }) => {
	const video = React.useRef(null);

	return (
		<Video
			ref={video}
			source={{ uri: uri }}
			style={{ ...StyleSheet.absoluteFillObject }}
			resizeMode="cover"
			// rate={this.state.rate}
			// paused={this.state.paused}
			// volume={this.state.volume}
			// muted={this.state.muted}
			// fullscreen={this.state.fullscreen}
			// controls={this.state.showRNVControls}
			// resizeMode={this.state.resizeMode}
			// onLoad={this.onLoad}
			// onAudioTracks={this.onAudioTracks}
			// onTextTracks={this.onTextTracks}
			// onProgress={this.onProgress}
			// onEnd={this.onEnd}
			// progressUpdateInterval={1000}
			// onError={this.onError}
			// onAudioBecomingNoisy={this.onAudioBecomingNoisy}
			// onAudioFocusChanged={this.onAudioFocusChanged}
			// onLoadStart={this.onVideoLoadStart}
			// onVideoAspectRatio={this.onAspectRatio}
			// onReadyForDisplay={this.onReadyForDisplay}
			// onBuffer={this.onVideoBuffer}
			// repeat={this.state.loop}
			// selectedTextTrack={this.state.selectedTextTrack}
			// selectedAudioTrack={this.state.selectedAudioTrack}
			// playInBackground={false}
		/>
	);
};

export default VideoPlayer;

import React from 'react';
// import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

export default class VideoComponent extends React.Component {
  renderVideo() {
    return (
      <Video
        source={{ uri: 'https://www.youtube.com/watch?v=PrD0MkDt6WQ&ab_channel=OwnagePranks' }}
        style={{ width: 800, height: 800 }}
        muted
        repeat
        resizeMode="cover"
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch="obey"
      />
    );
  }

  render() {
    return (
      <View>
        {this.renderVideo()}
      </View>
    );
  }
}

// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

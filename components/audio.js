import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { AudioRecorder, AudioUtils } from 'react-native-audio';

const AUDIO_PATH = AudioUtils.DocumentDirectoryPath + '/demo.aac';

class Audio extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Audio'
    })
  };

  constructor() {
    super();

    this.state = {
      currentMetering: 0
    };
  }

  prepareRecordingPath(){
    AudioRecorder.prepareRecordingAtPath(AUDIO_PATH, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000,
      MeteringEnabled: true
    });
  }

  componentDidMount() {
    this.prepareRecordingPath();
  }

  startListening() {
    AudioRecorder.startRecording();

    AudioRecorder.onProgress = ({ currentMetering }) => this.setState({
      currentMetering: currentMetering + 50
    });
  }

  stopListening() {
    AudioRecorder.stopRecording();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Audio</Text>

        <TouchableHighlight onPress={ () => this.startListening() }
                            activeOpacity={ 0.5 }>
          <View style={ styles.button }>
            <Text>Start recording</Text>
          </View>
        </TouchableHighlight>

        <View style={ styles.bars }>
          <View style={{
            width: '5%',
            height: this.state.currentMetering * 0.2,
            marginTop: 20,
            backgroundColor: 'orange'
          }} />
          <View style={{
            width: '10%',
            height: this.state.currentMetering * 0.5,
            marginTop: 20,
            backgroundColor: 'orange'
          }} />
          <View style={{
            width: '20%',
            height: this.state.currentMetering,
            marginTop: 20,
            backgroundColor: 'red'
          }} />
          <View style={{
            width: '10%',
            height: this.state.currentMetering * 0.5,
            marginTop: 20,
            backgroundColor: 'orange'
          }} />
          <View style={{
            width: '5%',
            height: this.state.currentMetering * 0.2,
            marginTop: 20,
            backgroundColor: 'orange'
          }} />
        </View>

        <TouchableHighlight onPress={ () => this.stopListening() }
                            activeOpacity={ 0.5 }>
          <View style={ styles.button }>
            <Text>Stop recording</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  button: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#eee',
    marginTop: 20,
    backgroundColor: 'white'
  },
  bars: {
    width: '100%',
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default Audio;
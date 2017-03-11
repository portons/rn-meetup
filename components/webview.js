import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import WKWebView from 'react-native-wkwebview-reborn';
import RNFS from 'react-native-fs';

const INJECTED_JS = `
  window.changeX = function(x) {
    window.touchX = x;
  }
  
  window.changeY = function(y) {
    window.touchY = y;
  }

  window.changeForce = function(force) {
    window.touchForce = force;
  }
`;

class WebView extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'WebView'
    })
  };

  constructor() {
    super();

    this.state = {
      force: 0
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  onPress(event) {
    this.setState({ force: event.nativeEvent.force * 100 });

    this.sendMessage({
      force: event.nativeEvent.force * 50,
      x: Math.round(event.nativeEvent.locationX / 10),
      y: Math.round(event.nativeEvent.locationY / 10)
    });
  }

  onRelease() {
    this.setState({ force: 0 });

    this.sendMessage({ force: 0, x: 0, y: 0 })
  }

  render() {
    const htmlSource = {
      file: RNFS.MainBundlePath + '/web/visualizer/index.html',
      allowingReadAccessToURL: RNFS.MainBundlePath
    };

    return (
      <View style={styles.container}>
        <WKWebView source={ htmlSource }
                   ref={ webview => this.webview = webview }
                   scrollEnabled={ false }
                   style={ styles.web }
                   injectedJavaScript={ INJECTED_JS } />

        <View style={ styles.button }
              onStartShouldSetResponder={ () => true }
              onResponderMove={ (event) => this.onPress(event) }
              onResponderRelease={ () => this.onRelease() }>
          <Text>3D Touch. Force: { this.state.force.toFixed(2) }</Text>
        </View>
      </View>
    );
  }

  sendMessage({ x, y, force }) {
    this.webview.evaluateJavaScript(`changeX(${x})`);
    this.webview.evaluateJavaScript(`changeY(${y})`);
    this.webview.evaluateJavaScript(`changeForce(${force})`);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    justifyContent: 'flex-end',
    flex: 1
  },
  web: {
    borderWidth: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%'
  },
  button: {
    zIndex: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default WebView;
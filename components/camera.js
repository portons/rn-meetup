import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Animated } from 'react-native';
import Camera from 'react-native-camera';

class Map extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Camera'
    })
  };

  constructor() {
    super();

    this.state = {
      glasses: false,
      glassesPosition: new Animated.Value(0)
    };
  }

  toggleSunglasses() {
    if (this.state.glasses) {
      this.setState({
        glasses: false,
        glassesPosition: new Animated.Value(0)
      });
    } else {
      this.setState({ glasses: !this.state.glasses });

      Animated.timing(
        this.state.glassesPosition,
        { toValue: 300, duration: 4000 }
      ).start();
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Camera style={ styles.preview }
                type={ 'front' }
                aspect={ Camera.constants.Aspect.fill }>
        </Camera>

        {
          this.state.glasses &&
          <Animated.Image style={ [styles.glasses, { top: this.state.glassesPosition }] }
                          source={ require('../assets/images/sunglasses.png') } />
        }

        <TouchableHighlight onPress={ () => this.toggleSunglasses() }
                            activeOpacity={ 0.5 }>
          <View style={ styles.button }>
            <Text>Sunglasses</Text>
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
    paddingTop: 20
  },
  preview: {
    width: '100%',
    height: '100%'
  },
  glasses: {
    width: 200,
    height: 100,
    position: 'absolute'
  },
  button: {
    position: 'absolute',
    padding: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#eee',
    backgroundColor: 'white',
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Map;
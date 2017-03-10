import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';

class Map extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Map'
    })
  };

  constructor() {
    super();

    this.state = {
      latitude: 32.080017,
      longitude: 34.803766,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
  }

  setCurrentLocation() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
    });
  }

  render() {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state;

    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          region={{ latitude, longitude, latitudeDelta, longitudeDelta }} />

        <TouchableHighlight onPress={ () => this.setCurrentLocation() }
                            activeOpacity={ 0.5 }>
          <View style={ styles.button }>
            <Text>Current location</Text>
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
  map: {
    height: '100%',
    width: '100%'
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
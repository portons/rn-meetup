import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class FirstScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'First screen'
    })
  };

  render() {
    return (
      <View style={ styles.container }>
        <Text>Congrats with your first screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  }
});

export default FirstScreen;
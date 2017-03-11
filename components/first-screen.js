import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class FirstScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'First screen'
    })
  };

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.congrats }>Congrats with your first screen</Text>

        <Image style={ styles.image }
               source={ require('../assets/images/good-job.gif') }/>
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
  congrats: {
    fontSize: 20
  },
  image: {
    marginTop: 100
  }
});

export default FirstScreen;
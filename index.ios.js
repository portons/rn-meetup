import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from './components/first-screen';
import Map from './components/map';
import Audio from './components/audio';

const App = DrawerNavigator({
  FirstScreen: { screen: FirstScreen },
  Map: { screen: Map },
  Audio: { screen: Audio }
});

AppRegistry.registerComponent('ReactNativeMeetup', () => App);
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from './components/first-screen';
import Map from './components/map';

const App = DrawerNavigator({
  FirstScreen: { screen: FirstScreen },
  Map: { screen: Map }
});

AppRegistry.registerComponent('ReactNativeMeetup', () => App);
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from './components/first-screen';

const App = DrawerNavigator({
  FirstScreen: { screen: FirstScreen }
});

AppRegistry.registerComponent('ReactNativeMeetup', () => App);
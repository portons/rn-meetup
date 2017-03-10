import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from './components/first-screen';
import Map from './components/map';
import Audio from './components/audio';
import WebView from './components/webview';

const App = DrawerNavigator({
  FirstScreen: { screen: FirstScreen },
  Map: { screen: Map },
  Audio: { screen: Audio },
  WebView: { screen: WebView }
});

AppRegistry.registerComponent('ReactNativeMeetup', () => App);
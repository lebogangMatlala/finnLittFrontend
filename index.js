// index.js

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { createDeepLinkingHandler } from 'react-native-deep-linking';

const handleDeepLinking = createDeepLinkingHandler(App);

AppRegistry.registerComponent(appName, () => handleDeepLinking);

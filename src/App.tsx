import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes/index.routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#3a3049" />
    <Routes />
  </NavigationContainer>
);

export default App;

LogBox.ignoreAllLogs(); // Temporary

/*
  🚀 Created by Geziel Elyon (@oprogramadornordestino)
*/

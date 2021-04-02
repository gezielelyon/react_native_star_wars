import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes/index.routes';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#3a3049" />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </>
);

export default App;

/*
  🚀 Created by Geziel Elyon (@oprogramadornordestino)
*/

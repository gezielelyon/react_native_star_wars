import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {StackPersonages} from './stack.routes';

const DrawerInstance = createDrawerNavigator();

const Routes: React.FC = () => (
  <DrawerInstance.Navigator
    screenOptions={{}}
    drawerType="slide"
    drawerStyle={{
      width: '50%',
      backgroundColor: '#231c2e',
      borderRightWidth: 1,
      borderRightColor: '#3a3049',
    }}
    drawerContentOptions={{
      activeBackgroundColor: '#3a3049',
      inactiveBackgroundColor: '#231c2e',
      inactiveTintColor: '#aaa0bb',
      activeTintColor: '#8553f1',
    }}
    overlayColor="1">
    <DrawerInstance.Screen
      name="StackPersonages"
      options={{
        title: 'Personagem',
        drawerIcon: () => <FontAwesome name="user" color="#8553f1" size={24} />,
      }}
      component={StackPersonages}
    />

    <DrawerInstance.Screen
      name="StackPlanets"
      options={{
        title: 'Planetas',
        drawerIcon: () => <Ionicons name="planet" color="#8553f1" size={24} />,
      }}
      component={StackPersonages}
    />

    <DrawerInstance.Screen
      name="StackFilms"
      options={{
        title: 'Filmes',
        drawerIcon: () => (
          <MaterialCommunityIcons name="movie" color="#8553f1" size={24} />
        ),
      }}
      component={StackPersonages}
    />

    <DrawerInstance.Screen
      name="StackSpecies"
      options={{
        title: 'Spécies',
        drawerIcon: () => <FontAwesome5 name="dog" color="#8553f1" size={24} />,
      }}
      component={StackPersonages}
    />

    <DrawerInstance.Screen
      name="StackVehicles"
      options={{
        title: 'Veículos',
        drawerIcon: () => (
          <FontAwesome5 name="car-alt" color="#8553f1" size={24} />
        ),
      }}
      component={StackPersonages}
    />

    <DrawerInstance.Screen
      name="StackStarShips"
      options={{
        title: 'NaveS Estelar',
        drawerIcon: () => <FontAwesome name="star" color="#8553f1" size={24} />,
      }}
      component={StackPersonages}
    />
  </DrawerInstance.Navigator>
);

export default Routes;

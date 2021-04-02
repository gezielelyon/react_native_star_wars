import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import LogoStarWars from '../assets/logo.png';
import ButtonMenu from '../components/ButtonMenu/index';

import Personages from '../screens/Personages/index';
import PersonageDetails from '../screens/PersonageDetails/index';

const StackInstance = createStackNavigator();

export const StackPersonages: React.FC = () => (
  <StackInstance.Navigator initialRouteName="Personages">
    <StackInstance.Screen
      name="Personages"
      options={{
        headerStyle: {
          backgroundColor: '#231c2e',
          height: 70,
        },
        headerTitle: () => (
          <Image source={LogoStarWars} style={{height: 50, width: 130}} />
        ),
        headerTitleAlign: 'center',
        headerLeft: () => <ButtonMenu />,
      }}
      component={Personages}
    />
    <StackInstance.Screen
      name="PersonageDetails"
      options={{
        headerStyle: {
          backgroundColor: '#231c2e',
          height: 70,
        },
        headerTitle: () => (
          <Image source={LogoStarWars} style={{height: 50, width: 130}} />
        ),
        headerTitleAlign: 'center',
        headerBackImage: () => (
          <Feather name="arrow-left" color="#aaa0bb" size={30} />
        ),
      }}
      component={PersonageDetails}
    />
  </StackInstance.Navigator>
);

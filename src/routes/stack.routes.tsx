import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import LogoStarWars from '../assets/logo.png';
import ButtonMenu from '../components/ButtonMenu/index';

// Personages's imports
import Personages from '../screens/Personages/index';
import PersonageDetails from '../screens/PersonageDetails/index';

// Planets's imports
import Planets from '../screens/Planets/index';
import PlanetDetails from '../screens/PlanetDetails/index';

// Films's imports
import Films from '../screens/Films/index';
import FilmDetails from '../screens/FilmDetails/index';

// Species's imports
import Species from '../screens/Species/index';
import SpecieDetails from '../screens/SpecieDetails/index';

// Vehicles's imports
import Vehicles from '../screens/Vehicles/index';
import VehicleDetails from '../screens/VehicleDetails/index';

// Starships's imports
import Starships from '../screens/Starships/index';
import StarshipDetails from '../screens/StarshipDetails/index';

const StackInstance = createStackNavigator();

// Personages
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
          <Feather name="arrow-left" color="#aaa0bb" size={26} />
        ),
      }}
      component={PersonageDetails}
    />
  </StackInstance.Navigator>
);

// Planets
export const StackPlanets: React.FC = () => (
  <StackInstance.Navigator initialRouteName="Planets">
    <StackInstance.Screen
      name="Planets"
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
      component={Planets}
    />
    <StackInstance.Screen
      name="PlanetDetails"
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
          <Feather name="arrow-left" color="#aaa0bb" size={26} />
        ),
      }}
      component={PlanetDetails}
    />
  </StackInstance.Navigator>
);

// Films
export const StackFilms: React.FC = () => (
  <StackInstance.Navigator initialRouteName="Films">
    <StackInstance.Screen
      name="Films"
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
      component={Films}
    />
    <StackInstance.Screen
      name="FilmDetails"
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
          <Feather name="arrow-left" color="#aaa0bb" size={26} />
        ),
      }}
      component={FilmDetails}
    />
  </StackInstance.Navigator>
);

// Species
export const StackSpecies: React.FC = () => (
  <StackInstance.Navigator initialRouteName="Species">
    <StackInstance.Screen
      name="Species"
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
      component={Species}
    />
    <StackInstance.Screen
      name="SpecieDetails"
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
          <Feather name="arrow-left" color="#aaa0bb" size={26} />
        ),
      }}
      component={SpecieDetails}
    />
  </StackInstance.Navigator>
);

// Vehicles
export const StackVehicles: React.FC = () => (
  <StackInstance.Navigator initialRouteName="Vehicles">
    <StackInstance.Screen
      name="Vehicles"
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
      component={Vehicles}
    />
    <StackInstance.Screen
      name="VehicleDetails"
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
          <Feather name="arrow-left" color="#aaa0bb" size={26} />
        ),
      }}
      component={VehicleDetails}
    />
  </StackInstance.Navigator>
);

// Starships
export const StackStarships: React.FC = () => (
  <StackInstance.Navigator initialRouteName="Starships">
    <StackInstance.Screen
      name="Starships"
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
      component={Starships}
    />
    <StackInstance.Screen
      name="StarshipDetails"
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
          <Feather name="arrow-left" color="#aaa0bb" size={26} />
        ),
      }}
      component={StarshipDetails}
    />
  </StackInstance.Navigator>
);

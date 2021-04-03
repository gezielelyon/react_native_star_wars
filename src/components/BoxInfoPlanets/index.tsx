import React from 'react';
import {useNavigation} from '@react-navigation/native';

import IPlanetDTO from '../../dtos/IPlanetDTO';

import {Container, Name, BoxInfoDetails, Description} from './styles';

interface IBoxInfoProps {
  screenName: string;
  values: IPlanetDTO;
}

const BoxInfoPlanets: React.FC<IBoxInfoProps> = ({screenName, values}) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => {
        navigation.navigate(screenName, {
          value: values,
        });
      }}>
      <Name>{values.name}</Name>
      <BoxInfoDetails>
        <Description>Horas por dia: {values.rotation_period} horas</Description>
        <Description numberOfLines={1} style={{maxWidth: 150}}>
          Dias por ano: {values.orbital_period} dias
        </Description>
      </BoxInfoDetails>
    </Container>
  );
};

export default BoxInfoPlanets;

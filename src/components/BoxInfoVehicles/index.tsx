import React from 'react';
import {useNavigation} from '@react-navigation/native';

import IVehicleDTO from '../../dtos/IVehicleDTO';

import {Container, Name, BoxInfoDetails, Description} from './styles';

interface IBoxInfoProps {
  screenName: string;
  values: IVehicleDTO;
}

const BoxInfoVehicles: React.FC<IBoxInfoProps> = ({screenName, values}) => {
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
        <Description numberOfLines={1} style={{maxWidth: 150}}>
          Modelo: {values.model}
        </Description>
        <Description>Número de passageiros: {values.passengers}</Description>
      </BoxInfoDetails>
    </Container>
  );
};

export default BoxInfoVehicles;

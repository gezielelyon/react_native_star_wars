import React from 'react';
import {useNavigation} from '@react-navigation/native';

import IStarshipDTO from '../../dtos/IStarshipDTO';

import {Container, Name, BoxInfoDetails, Description} from './styles';

interface IBoxInfoProps {
  screenName: string;
  values: IStarshipDTO;
}

const BoxInfoStarships: React.FC<IBoxInfoProps> = ({screenName, values}) => {
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
        <Description numberOfLines={1} style={{maxWidth: 180}}>
          Número de passageiros: {values.passengers}
        </Description>
      </BoxInfoDetails>
    </Container>
  );
};

export default BoxInfoStarships;

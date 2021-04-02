import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Name, BoxInfoDetails, Description} from './styles';

interface IBoxInfoProps {
  screenName: string;
  values: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  };
}

const BoxInfoPersonages: React.FC<IBoxInfoProps> = ({screenName, values}) => {
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
        <Description>Altura: {values.height}cm</Description>
        <Description>Peso: {values.mass}Kg</Description>
        <Description>Nascimento: {values.birth_year}</Description>
      </BoxInfoDetails>
    </Container>
  );
};

export default BoxInfoPersonages;
